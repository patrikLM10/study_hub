var supabaseUrl = document.body.dataset.supabaseUrl || '';
var supabaseKey = document.body.dataset.supabaseAnonKey || '';
var supabase = supabaseUrl && supabaseKey ? supabase.createClient(supabaseUrl, supabaseKey) : null;

function renderMath(element) {
    if (typeof renderMathInElement === 'undefined') return;
    try {
        renderMathInElement(element || document.body, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '\\[', right: '\\]', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
            ],
            throwOnError: false,
            ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
        });
    } catch (e) {}
}

function scheduleRenderMath() {
    if (window._mathRenderTimer) clearTimeout(window._mathRenderTimer);
    window._mathRenderTimer = setTimeout(function () { renderMath(); }, 50);
}

document.addEventListener('alpine:init', function () {
    Alpine.directive('math', function (el) {
        Alpine.bind(el, {
            'x-effect': function () {
                el._mathRenderPending = true;
                Alpine.nextTick(function () {
                    if (el._mathRenderPending) {
                        renderMath(el);
                        el._mathRenderPending = false;
                    }
                });
            }
        });
    });

    Alpine.data('appState', function () {
        return {
            sidebarOpen: true,
            mobileMenuOpen: false,
            pageTitle: 'Dashboard',
            user: null,
            session: null,
            async init() {
                if (!supabase) return;
                var _this = this;
                var result = await supabase.auth.getSession();
                var session = result.data.session;
                this.session = session;
                if (session && session.user) {
                    this.user = {
                        id: session.user.id,
                        email: session.user.email,
                        name: session.user.user_metadata && session.user.user_metadata.name || session.user.email,
                        avatar_url: session.user.user_metadata && session.user.user_metadata.avatar_url,
                    };
                }
                supabase.auth.onAuthStateChange(function (event, session) {
                    _this.session = session;
                    _this.user = session && session.user ? {
                        id: session.user.id,
                        email: session.user.email,
                        name: session.user.user_metadata && session.user.user_metadata.name || session.user.email,
                    } : null;
                });
            },
            async signOut() {
                if (supabase) await supabase.auth.signOut();
                this.user = null;
                this.session = null;
                window.location.href = '/login';
            }
        };
    });
});

document.addEventListener('htmx:afterSwap', function () {
    scheduleRenderMath();
});

document.addEventListener('htmx:afterSettle', function () {
    scheduleRenderMath();
});

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(date));
}

function timeAgo(date) {
    var now = new Date();
    var diff = now - new Date(date);
    var mins = Math.floor(diff / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return mins + 'm ago';
    var hrs = Math.floor(mins / 60);
    if (hrs < 24) return hrs + 'h ago';
    var days = Math.floor(hrs / 24);
    if (days < 7) return days + 'd ago';
    return formatDate(date);
}

document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        window.location.href = '/search';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    renderMath();
});
