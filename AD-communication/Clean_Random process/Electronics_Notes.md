---
sr-due: 2026-08-12
sr-interval: 41
sr-ease: 290
---
# Electronics Study Notes



---
## Page 1

# Random Process

4. Collection of Random Variables changing with time.

Q. A time domain signal x(t) is defined as,

$$\int x(t) = At + B \quad ; \quad A \in \{1, 2, 3\} \quad \text{or} \quad B \in \{-1, 0, 1\}$$

Random sig / Random Process
plot all the possible sample functions of x(t)

4

$$x_1(t) = t - 1$$

$$x_4(t) = t$$

$$x_7(t) = 3t - 1$$

$$x_2(t) = 2t - 1$$

$$x_5(t) = 2t$$

$$x_8(t) = 3t$$

$$x_9(t) = 3t - 1$$

$$x_6(t) = 3t$$

$$x_9(t) = 3t + 1$$

![img-0.jpeg](AD-communication/Clean_Random%20process/images/img-0.jpeg)

Q.

$$x(t) = A \cos(\pi/2 t)$$

$$A \sim U[0, 2]$$

Plot all the sample functions of x(t).

4

$$x_1(t) = 0$$

$$x_2(t) = 0.1 \cos(\pi/2 t)$$

$$x_3(t) = 0.123 \cos(\pi/2 t)$$

$$x_\infty(t) = 2 \cos(\pi/2 t)$$

![img-1.jpeg](AD-communication/Clean_Random%20process/images/img-1.jpeg)

---
## Page 2

▲ Sampling the random process at a particular Time instant:-

$$x(t) = At + B \quad ; \quad A \in \{1, 2, 3\} \quad \text{or} \quad \text{or} \quad v$$
$$B \in \{-1, 0, 1\}$$

$$x(t) \xrightarrow[t=2 \text{ sec.}]{\gamma} x(2) \quad \text{or} \quad R \cdot v$$

$$x(t) \xrightarrow[t=-3 \text{ sec.}]{\gamma} x(-3) \quad \text{or} \quad R \cdot v$$

$$x(t) \xrightarrow[t=t_1]{} x(t_1) \quad \text{or} \quad R \cdot v$$

$$\begin{array}{c} x(t) \xrightarrow[t=t_1]{} x(t_1) \\ \text{Random} \\ \text{Process} \end{array} \quad \text{or} \quad \text{Random Variable}$$

$$\begin{array}{c} x(t) \xrightarrow[t=t]{} x(t) \\ R \cdot P \\ \uparrow \quad x(t) \xrightarrow[t=t+\tau]{} x(t+\tau) \end{array} \quad \text{or} \quad R \cdot v$$

$$\left. \begin{array}{c} x_1(t) \\ x(t) \xrightarrow[t=2]{} x_2(t) \\ x_3(t) \end{array} \right\} \text{Sample functions}$$

▲ Statistical Parameter in Random Process:-

(i) Mean function:-

$$\begin{array}{c} x(t) \xrightarrow[t=2]{} x(t) \\ R \cdot P \end{array}$$

$$\text{Mean function } \mu_x(t) = E[x(t)]$$

$$x(t) \xrightarrow[t=2]{} x(2)$$

$$E[x(2)] = E[A \cos \omega]$$

$$= \cos \omega \cdot E[A]$$

$$= L/2 \cos \omega$$

Q. $$x(t) = A \cos \omega t \quad ; \quad A \sim U[0, L]$$

$$\omega = \text{constant}$$

Find the mean function. Also Find $$E[x(2)] = ?$$

$$\mu_x(t) = E[x(t)] = E[A \cos \omega t] = \cos \omega t \cdot E[A] = L/2 \cos \omega t$$

$$\boxed{\mu_x(t) = \frac{L}{2} \cos \omega t} = f(t) \quad \boxed{E[x(2)] = \mu_x(2) = \frac{L}{2} \cos \omega}$$

Q. $$x(t) = A \cos(\omega t + \theta) \quad ; \quad A \text{ and } \omega \to \text{constant}$$

$$\theta \sim U[0, \pi]$$

Find mean function.

$$f_\theta(\theta) = \begin{cases} \frac{1}{\pi} : 0 < \theta < \pi \\ 0 : 0/\omega \end{cases}$$

$$E[x(t)] = E[A \cos(\omega t + \theta)]$$

$$= A E[\cos(\omega t + \theta)]$$

$$E[\cos(\omega t + \theta)] = \int_{-\infty}^{\infty} \cos(\omega t + \theta) \cdot f_\theta(\theta) \cdot d\theta = \int_{0}^{\pi} \cos(\omega t + \theta) \cdot \frac{L}{\pi} d\theta$$

$$\boxed{\mu_x(t) = \frac{-2A \sin \omega t}{\pi}} = f(t)$$

$$= \frac{1}{\pi} [\sin(\omega t + \theta)]^n_0$$

$$= \frac{-2 \sin \omega t}{\pi}$$

---
## Page 3

M-I

$$\begin{array}{l} E[A \cos(\omega t + \theta)] = A E[\cos \omega t \cos \theta - \sin \omega t \sin \theta] \\ = A \cos \omega t \cdot E[\cos \theta] - A \sin \omega t \cdot E[\sin \theta] \end{array}$$

$$E[\cos \theta] = \int_{0}^{\pi} \frac{\cos \theta}{\pi} \cdot d\theta = 0$$

$$E[\sin \theta] = \int_{0}^{\pi} \frac{\sin \theta}{\pi} \cdot d\theta = \frac{2}{\pi}$$

$$\mu_y(t) = E[A \cos(\omega t + \theta)] = -\frac{2A \sin \omega t}{\pi} = f(t)$$

Q

$$x(t) = \begin{cases} A & ; \quad t < t < 2 \\ B & ; \quad 2 \le t < 3 \end{cases}$$

$$E[A] = \frac{2-3}{2} = -\frac{1}{2}$$

$$A \sim U[-3, 2] \quad ; \quad B \sim N[3, 4]$$

Find mean function.

4

$$\begin{array}{l} \mu_y(t) = E[x(t)] = \begin{cases} E[A] & ; \quad t < t < 2 \\ E[B] & ; \quad 2 \le t < 3 \end{cases} \\ = \begin{cases} -1/2 & ; \quad t < t < 2 \\ 3 & ; \quad 2 \le t < 3 \end{cases} \end{array}$$

Q

$$x(t) = \begin{cases} 1 & ; \text{probability} = p \\ -1 & ; \text{probability} = 1-p \end{cases}$$

$$x(t) \in \begin{cases} -1, & 1 \\ \downarrow & 1 \\ 1-p & p \end{cases}$$

Find mean function.

$$E[x(t)] = 1 \cdot p + (-1)(1-p) = p \cdot 1 + p = 2p - 1$$

4 Correlation Function:

What we studied: x and Y are two Random Variables,

correlation b/w R.v. x and Y: $R_{xy} \in E[XY]$

Auto-Correlation function:-

$$\begin{array}{c} x(t) \xrightarrow[t=t_1]{} x(t_1) \\ \uparrow \quad \uparrow \\ x(t) \xrightarrow[t=t_2]{} x(t_2) \end{array}$$

Auto correlation function of Random Process $x(t)$ is defined as:

$$\begin{array}{l} R_{xy}(t_1, t_2) = E[x(t_1) \cdot x(t_2)] \\ R_{xy}(t_2, t_1) = E[x(t_2) \cdot x(t_1)] \end{array}$$

4 Now,

$$\begin{array}{l} x(t) \xrightarrow[t=t]{} x(t) \\ x(t) \xrightarrow[t=t+t]{} x(t+t) \end{array}$$

---
## Page 4

Auto-correlation function of x(t) is defined as

$$\begin{array}{l} R_{xx}(t, t+\tau) = E[x(t) \cdot x(t+\tau)] \\ R_{xx}(t+\tau, t) = E[x(t+\tau) \cdot x(t)] \end{array}$$

* Cross correlation:

Cross correlation b/w x(t) and y(t) is defined by:

$$\text{Same} \left\{ \begin{array}{l} R_{xy}(t, t+\tau) = E[x(t) \cdot y(t+\tau)] \\ R_{xy}(t+\tau, t) = E[x(t+\tau) \cdot y(t)] \\ R_{yx}(t, t+\tau) = E[y(t) \cdot x(t+\tau)] \\ R_{yx}(t+\tau, t) = E[y(t+\tau) \cdot x(t)] \end{array} \right\}$$

Q. $$x(t) = A \sin(\omega t + \phi)$$

$$A \sim \omega(2, 4)$$ ; $$\omega$$ and $$\phi$$ are constant.

Find A.C.F. of x(t). Also find E[y(t) x(s)] = ?

$$\text{ACF}[x(t)] = E[x(t) \cdot x(t+\tau)]$$

$$= E[A^2 \sin(\omega t + \phi) \cdot \sin(\omega t + \omega\tau + \phi)]$$

$$= E[A^2] \cdot \sin(\omega t + \phi) \cdot \sin(\omega t + \omega\tau + \phi)$$

$$R_{xx}(t, t+\tau) = \delta \sin(\omega t + \phi) \cdot \sin(\omega t + \omega\tau + \phi) = f(t, \tau)$$

$$\sigma_A^2 = 4$$

$$\mu_A = 2$$

$$E[A^2] = 4 + 4$$

$$= 8$$

$$E[x(2) \cdot x(3)] = ?$$

$$E[x(t) \cdot x(t+\tau)] = R_{xx}(t, t+\tau)$$

$$t=2, \tau=3$$

$$R_{xx}(2, 5) = E[x(2) \cdot x(3)] = \delta \sin(2\omega t + \phi) \cdot \sin(5\omega t + \phi)$$

Q. $$x(t) = A \cos(\omega t + \theta)$$ ; $$\theta \sim \cup[0, 2\pi]$$

A.C.F. of x(t)

4. A.C.F. [x(t)] = E[x(t) x(t+\tau)]

$$= E[A^2 \cos(\omega t + \theta) \cdot \cos(\omega t + \omega\tau + \theta)]$$

$$= \frac{A^2}{2} E[2 \cos(\omega t + \theta) \cdot \cos(\omega t + \omega\tau + \theta)]$$

$$= \frac{A^2}{2} E[\cos(2\omega t + \theta + 2\omega\tau) + \cos(\omega\tau)]$$

$$= \frac{A^2}{2} \left\{ E[\cos(2\omega t + 2\omega\tau + \theta)] + E[\cos \omega\tau] \right\}$$

$$R_{xx}(t, t+\tau) = \frac{A^2}{2} \cos \omega\tau = R_x(\tau)$$

---
## Page 5

$$\begin{aligned} E[\cos(2\omega t + 2\omega z + \theta)] &= \int_{-\infty}^{\infty} \cos(2\omega t + 2\omega z + \theta) \cdot f_\theta(\theta) \cdot d\theta \\ &= \int_{0}^{2\pi} \frac{\cos(2\omega t + 2\omega z + \theta)}{2\pi} \cdot d\theta \\ &= 0 \end{aligned}$$

Q. $x(t) = A \cos(\omega t + \theta)$ ; $A \sim N(2, 4)$ , $\theta \sim U[0, 2\pi]$

Find ACF $x(t)$ . $A, \theta$ are mutually independent.

4. ACF $[x(t)] = R_{xx}(t, t+\tau) = E[x(t) x(t+\tau)]$

$$= E[A^2 \cos(\omega t + \theta) \cdot \cos(\omega t + \omega z + \theta)]$$

$$= E[\frac{A^2}{2} \{\cos(2\omega t + 2\omega z + \theta) + \cos(\omega z)\}]$$

$$= \frac{1}{2} E[A^2] \left\{ E[\cos(2\omega t + 2\omega z + \theta)] + E[\cos \omega z] \right\}$$

$$= \frac{1}{2} \times 8 \cos \omega z$$

$$R_{xx}(t, t+\tau) = 4 \cos \omega z = R_x(\tau)$$

$$R_x(\tau) = 4 \cos \omega \tau$$

no constant term

$$\mu_x^2 = 0 \Rightarrow \mu_x = 0$$

$$\mu_x(t) = E[x(t)] = E[A \cos(\omega t + \theta)] = E[A] \cdot E[\cos(\omega t + \theta)] = 0$$

$$E[\cos(\omega t + \theta)] = \int_{0}^{2\pi} \frac{\cos(\omega t + \theta)}{2\pi} \cdot d\theta$$

$$= 0$$

$$\mu_x(t) = 0$$

4. Mean square value of R.P. $x(t)$ :

$$M_{SV}[x(t)] = E[x^2(t)]$$

4. Variance of R.P. $x(t)$ :

$$V_{\text{var}}[x(t)] = E[x^2(t)] - \{E[x(t)]\}^2 = \sigma_x^2(t)$$

4. Covariance of R.P. $x(t)$ :

$$C_{xx}(t, t+\tau) = E[x(t) \cdot x(t+\tau)] - E[x(t)] \cdot E[x(t+\tau)]$$

$$= R_{xx}(t, t+\tau) - \mu_x(t) \cdot \mu_x(t+\tau)$$

---
## Page 6

# Summary:-

$$\text{Mean}[x(t)] = E[x(t)] = \mu_x(t)$$

$$\text{MSV}[x(t)] = E[x^2(t)] \rightarrow \text{Total power of } x(t) = \text{Avg power of } x(t)$$

$$\text{Var}[x(t)] = E[x^2(t)] - \{E[x(t)]\}^2 = \sigma_x^2(t)$$

$$\text{ACF}[x(t)] = E[x(t) \cdot x(t+\tau)] = R_{xx}(t, t+\tau)$$

$$\text{Cov}[x(t)] = E[x(t) \cdot x(t+\tau)] - E[x(t)] \cdot E[x(t+\tau)] = C_{xx}(t, t+\tau)$$

$$\underbrace{E[x^2(t)]}_{\text{Total power}} = \underbrace{\sigma_x^2(t)}_{\text{AC power}} + \underbrace{\{E[x(t)]\}^2}_{\text{AC power}} \\ \text{DC power}$$

Q. $$x(t) = 2A \cos(\omega t + \theta) + B$$

$$E[A] = 0$$

$$A \sim N(0, 2) ; B \sim U[-1, 1] , \theta \sim U[0, 2\pi]$$

$$E[B] = \frac{1-1}{2} = 0$$

A, B and $$\theta$$ are mutually independent.

i) Find Mean [x(t)], MSV [x(t)], Var [x(t)], ACF [x(t)], COV [x(t)]

ii) Find Mean [x(t+2)], Mean [x(4)], E [x(3) x(5)]

$$E[x(5) x(3)] \quad , \quad E[x^2(2)]$$

$$E[A^2] = 2$$

iii) Mean [x(t)] = $$\mu_x(t) = E[2A \cos(\omega t + \theta) + B]$$

$$E[B^2] = \frac{(2)^2}{12} = 1/3$$

$$= 2 E[A]^0 \cdot E[\cos(\omega t + \theta)] + E[B]^0$$

$$\boxed{\mu_x(t) = 0} \neq f(t)$$

(ii) ACF [x(t)] = E [x(t) \cdot x(t+\tau)]

$$= E[\{2A \cos(\omega t + \theta) + B\} \{2A \cos(\omega t + \omega\tau + \theta) + B\}]$$

$$= E[4A^2 \cos(\omega t + \theta) \cdot \cos(\omega t + \omega\tau + \theta) + 2AB \cos(\omega t + \theta)$$

$$+ 2AB \cos(\omega t + \omega\tau + \theta) + B^2]$$

$$= 4 E[A^2] E[\cos(\omega t + \theta) \cdot \cos(\omega t + \omega\tau + \theta)] + 2 E[A] \cdot E[B] \cdot E[\cos(\omega t + \theta)]$$

$$+ 2 E[A] \cdot E[B] \cdot E[\cos(\omega t + \omega\tau + \theta)] + E[B^2]$$

$$= \frac{4 E[A^2] \cos \omega\tau}{2} + E[B^2]$$

$$R_{xx}(t, t+\tau) = 4 \cos \omega\tau + 1/3 = R_x(\tau)$$

(iii) MSV [x(t)] = E [x^2(t)]

$$= E[4A^2 \cos^2(\omega t + \theta) + B^2 + 4AB \cos(\omega t + \theta)]$$

$$= 4 E[A^2] E[\frac{1+\cos(2\omega t+2\theta)}{2}] + E[B^2] + 4 E[A] \cdot E[B] \cdot E[\cos(\omega t+\theta)]$$

$$= 2 \times 2 + 1/3$$

$$E[x^2(t)] = 13/3$$

$$\stackrel{M-II}{=} R_{xx}(\tau) = E[x(t) \cdot x(t+\tau)] \Big|_{\tau=0} = 4 \cos \omega(0) + 1/3$$

$$R_{xx}(0) = E[x^2(t)]$$

$$= 4 + 1/3 = 13/3$$

---
## Page 7

$$\begin{array}{l} \operatorname{Var}[x(t)] = \sigma_{x(t)}^{2} = E[x^{2}(t)] - \{E[x(t)]\}^{2} \\ = 13/3 \end{array}$$

$$\operatorname{Cov}[x(t)] = E[x(t)x(t+\tau)] - E[x(t)]^{0} E[x(t+\tau)]^{0}$$

$$\boxed{\operatorname{Cov}[x(t)] = 4 \cos(\omega t) + 1/3}$$

(ii) Mean $[x(t+2)] = E[x(t+2)] = E[x(t)] = E[x(2)] = E[x(4)] = 0 \neq f(t)$

$$E[x^{2}(t)] = E[x^{2}(t+2)] = E[x^{2}(2)] = E[x^{2}(4)] = 13/3 \neq f(t)$$

$$\begin{array}{l} E[x(3)x(3)] = ? \quad ; \quad E[x(3)x(3)] = R_{x}(2) \\ R_{x}(\tau) = E[x(t)x(t+\tau)] \quad = 4 \cos 2\omega t + 1/3 \\ t+3, \tau=2 \quad E[x(3)x(3)] = R_{y}(-2) \\ = 4 \cos 2\omega t + 1/3 \end{array}$$

![img-2.jpeg](AD-communication/Clean_Random%20process/images/img-2.jpeg)

$$\begin{array}{l} R_{x}(0) \geqslant |R_{x}(\tau)| \\ \downarrow \text{power} = +ve \end{array}$$

4. wide Sense Stationary Random Process: [W.S.S.R.P.]

☑ Mean of R.P. $x(t)$ is not a function of time.

☑ Auto-correlation function of $x(t)$ is the function of sampling time period.

If both conditions satisfied $\Rightarrow$ W.S.S.R.P.

$$\mu_{x}(t) = \text{constant} \quad ; \quad R_{xx}(t, t+\tau) = R_{x}(\tau)$$

$$\operatorname{Cov}[x(t)] = C_{xy}(t, t+\tau) = E[x(t)x(t+\tau)] - E[x(t)]E[x(t+\tau)]$$

$$= R_{x}(\tau) - \mu_{x}^{2} \quad \text{for WSSR P}$$

$$E[x(t)] = E[x(t+\tau)] = \mu_{x}$$

Q. For a WSSR Process:

☑ Mean is constant.

☑ ACF is only the function of sampling time period.

☑ MSV, Variance will be constant.

☑ Covariance is only the function of sampling time period.

☑ ACF and Covariance are constant.

$$\operatorname{MSV}[x(t)] = E[x^{2}(t)] = E[x(t)\cdot x(t)] = [R_{xx}(t, t+\tau)]_{\tau=0}$$

$$\begin{array}{l} \operatorname{Var}[x(t)] = \sigma_{x}^{2}(t) = E[x^{2}(t)] - \{E[x(t)]\}^{2} \\ \neq f(t) \end{array} = \begin{array}{l} = R_{x}(\tau)|_{\tau=0} \\ = R_{x}(0) \neq f(t) \end{array}$$

---
## Page 8

NOTE: Let's say, It's known that correlation is function of only $\tau$.

then, $R_{xx}(\tau) = E[x(t) \cdot x(t+\tau)]$

$R_{xx}(-\tau) = E[x(t+\tau) \cdot x(t)]$

$R_{xy}(\tau) = E[x(t) \cdot y(t+\tau)]$

$R_{yx}(\tau) = E[y(t) \cdot x(t+\tau)]$

$R_{xy}(-\tau) = E[x(t+\tau) \cdot y(t)] = R_{yx}(\tau)$

$R_{yx}(-\tau) = E[y(t+\tau) \cdot x(t)] = R_{xy}(\tau)$

$\Rightarrow R_x(\tau) = R_x(-\tau)$

$R_{xy}(\tau) = R_{yx}(-\tau)$

$R_{xy}(\tau) \neq R_{xy}(-\tau)$

Some Important Point: $x(t): WSSRP$; $R_{xx}(t, t+\tau) = R_x(\tau)$

(i) $x(t): WSSRP + Periodic \longrightarrow R_x(\tau): Periodic$

$x(t): WSSRP + aperiodic \longrightarrow R_x(\tau): aperiodic$

$R_x(0) = E[x^2(t)] = Total power of x(t) = \sigma_x^2 + \mu_x^2 = MSV$

(ii) $x(t): WSSRP$

$C_{xx}(t, t+\tau) = R_{xx}(t, t+\tau) - \mu_x(t) \mu_x(t+\tau)$

$C_{xx}(\tau) = R_x(\tau) - \mu_x^2$

$C_x(\tau) = R_x(\tau) - \mu_x^2$

$C_{xx}(0) = R_x(0) - \mu_x^2 = E[x^2(t)] - \mu_x^2$
$\text{Variance} = \sigma_x^2$

$R_x(\tau)$:

(iii) $R_{xx}(0) \ge |R_{xx}(\tau)|$

(i) $R_x(0) \to Peak$

(ii) $R_x(\tau) = R_x(-\tau)$

(iii) $R_{xx}(\tau) = R_{xx}(-\tau)$: even function of $\tau$

Q. $y(t) = x(t) \pm x(t+\tau)$; $x(t): WSSRP$
Find $E[y^2(t)] = ?$
$E[x(t)] - E[x(t+\tau)] = \mu_x$
$E[x^2(t)] = E[x^2(t+\tau)]$
$= \sigma_x^2 + \mu_x^2$

![img-3.jpeg](AD-communication/Clean_Random%20process/images/img-3.jpeg)

$E[y^2(t)] = E[x^2(t) + y^2(t+\tau) \pm 2x(t) \cdot x(t+\tau)]$

$= E[x^2(t)] + E[x^2(t+\tau)] \pm 2E[x(t) \cdot x(t+\tau)]$

$= 2E[x^2(t)] \pm 2R_x(\tau)$

$E[y^2(t)] = 2R_x(0) \pm 2R_x(\tau)$

$E[y^2(t)] = Total power of y(t) \ge 0$

$2R_x(0) \pm 2R_x(\tau) \ge 0$

$R_x(0) \ge \frac{1}{4}R_x(\tau)$

$\Rightarrow R_x(0) \ge |R_x(\tau)|$

---
## Page 9

4 Important NOTE:

4 X(t): WSSRP + NO OFFSET

C_X(t) = R_X(t) - \mu_X^2

4 R_X(t) = \underbrace{C_X(t)}_{f(t)} + \underbrace{\mu_X^2}_{\text{constant}} \rightarrow \text{dc power}

4 Constat term in the expression of R_X(t) shows dc power; when there is no offset in the expression of X(t).

Q. for a R.P. X(t); dcf R_X(t) = 3 + 2 cos(3t) + 4 [sin 2πt]^2

True statement?

f(t)

Given: X(t): NO OFFSET t

Mean of X(t) is 1/√3 X(t): WSSRP

Total dc power of X(t) is 2+16π^2 Total power of X(t) is 5+16π^2

R_X(-t) = R_X(t) R_X(0) = 3 + 2

R_X(t) = 3 + 2 cos(3t) + 4 [sin 2πt / t]^2

R_X(0) = 3 + 2 + 4 [2π / 1]^2 = 5 + 16π^2 = Total power

R_X(t) = E[X(t) X(t+t)] = R_X(t, t+t)

R_X(0) = E[X(t) X(t)] = E[x^2(t)]

4 \mu_X^2 = 3 ; True only when X(t): WSSRP + NO OFFSET

\mu_X = \pm\sqrt{3} \neq f(t) ; R_X(t, t+t) = R_X(t) \checkmark

4 dc power = \sigma_X^2 = E[x^2(t)] - \mu_X^2

= 5 + 16π^2 - 3 = 2 + 16π^2

Q. X(t) = A cos(ωt+θ) ; θ ~ U[0, 2π] \nu WSSRP

Y(t) = B sin(ωt+θ) ; θ ~ U[0, 2π]

(a) is X(t) WSSRP? (b) is Y(t) WSSRP?

(c) Find R_XY(t, t+t); R_YX(t, t+t) \rightarrow Cross correlation function

4 (a) E[X(t)] = E[A cos(ωt+θ)] ; E[cos(ωt+θ)] = \int_{0}^{2π} \frac{cos(ωt+θ)}{2π} dθ = 0
= A E[cos(ωt+θ)]
\mu_X(t) = 0 \neq f(t)

R_XX(t, t+t) = E[X(t) X(t+t)]
= E[A^2 cos(ωt+θ) cos(ωt+ωt+θ)] = \frac{A^2}{2} cos(ωt) = R_X(t)

(b) E[Y(t)] = E[B sin(ωt+θ)] ; E[sin(ωt+θ)]

= B E[sin(ωt+θ)]

= \int_{0}^{2π} \frac{sin(ωt+θ)}{2π} dθ

\mu_Y(t) = 0 \neq f(t)

= 0

R_YY(t, t+t) = E[Y(t) Y(t+t)]

= E[B^2 sin(ωt+θ) sin(ωt+ωt+θ)]

= \frac{B^2}{2} E[2 sin(ωt+θ) sin(ωt+ωt+θ)]

= B_2^2 E[cos(ωt) - cos(2ωt+ωt+θ)]

R_Y(t) = B_2^2 cos(ωt)

Y(t): WSSRP

---
## Page 10

$$R_{xy}(t, t+\tau) = E[x(t) \gamma(t+\tau)]$$

$$= E[A \cos(\omega t + \theta) \cdot B \sin(\omega t + \omega\tau + \theta)]$$

$$= \frac{AB}{2} E[\sin(2\omega t + \omega\tau + 2\theta) + \sin(\omega\tau)]$$

$$R_{xy}(t, t+\tau) = \frac{AB}{2} \sin(\omega\tau) = R_{xy}(\tau) \quad R_{xy}(\tau) =$$

$$\begin{array}{l} x(t) : \omega SSRP \\ y(t) : \omega SSRP \end{array} \Rightarrow R_{xy}(t, t+\tau) = R_{xy}(\tau) = f(\tau)$$

$$\begin{array}{l} 4 R_{yx}(t, t+\tau) = E[\gamma(t) \cdot x(t+\tau)] \\ = E[AB \sin(\omega t + \theta) \cdot \cos(\omega t + \omega\tau + \theta)] \end{array}$$

$$= \frac{AB}{2} E[\sin(2\omega t + 2\omega\tau + \theta) + \sin(-\omega\tau)]$$

$$R_{yx}(t, t+\tau) = \frac{AB}{2} \sin(-\omega\tau) = R_{yx}(\tau)$$

conclusion :-

If x(t) and y(t) : wssRP

Then cross correlation of x(t) & y(t) = f(t)

$$R_{xy}(\tau) = R_{yx}(-\tau)$$

$$R_{yx}(\tau) = R_{xy}(-\tau)$$

Q. x(t) : wssRP ; then ACF [x(t)] = Rx(τ) = E[x(t) x(t+τ)]

$$\text{Find } E[x(t) \times (t+\tau)] = R_x(2) = R_x(-2) = f(\tau)$$

$$E[x(2) \times (4)] = R_x(2)$$

$$E[x(t-2) \times (t+4)] = R_x(t+4-t+2) = R_x(6)$$

$$E[x(4) \times (2)] = R_x(2-4) = R_x(-2) = R_x(2)$$

$$E[x(2t+3) \times (2t-7)] = R_x(2t-7-2t-3) = R_x(-10) = R_x(10)$$

$$E[x(2t+3) \times (t-3)] = R_x(t-3-2t-3) = R_x(-t-6) \rightarrow$$

Q. x(t) : wssRP ; E[x(t)] = μx , ACF [x(t)] = Rxy(τ)

comment on the nature of -

(a) γ(t) = 2x(t) - 3 : wssRP (b) γ(t) = 2x(t) + 3x(t-2) : wssRP

(b) γ(t) = x(2t+3) : wssRP

(a) γ(t) = 2x(t) - 3 ; x(t) : wssRP

$$E[\gamma(t)] = E[2x(t) - 3]$$

$$= 2E[x(t)] - 3$$

$$\mu_y(t) = 2\mu_x - 3 \neq f(t)$$

$$E[x(t+\tau)] \neq f(t)$$
$$= \sigma_x^2 + \mu_y^2$$

$$R_{yy}(t, t+\tau) = E[\gamma(t) \cdot \gamma(t+\tau)]$$

$$= E[\{2x(t) - 3\}\{2x(t+\tau) - 3\}]$$

$$= E[4x(t) \times (t+\tau) - 6x(t) - 6x(t+\tau) + g]$$

$$= 4E[x(t) \times (t+\tau)] - 6E[x(t)] - 6E[x(t+\tau)] + E[g]$$

$$= 4R_x(\tau) - 6\mu_x - 6\mu_x + g = R_y(\tau)$$
$$= f(\tau)$$

---
## Page 11

|  $$\gamma(t) = ax(t) + b : wssRP$$ (ii) $$\gamma(t) = x(2t+3) : wssRP$$ $$E[\gamma(t)] = E[x(2t+3)]$$ $$\mu_\gamma(t) = \mu_x \neq f(t)$$ $$R_{\gamma\gamma}(t, t+\tau) = E[\gamma(t) \cdot \gamma(t+\tau)]$$ $$= E[x(2t+3) \cdot x(2t+2\tau+3)]$$ $$= R_x(2t+2\tau+3 - 2t-3]$$ $$R_{\gamma\gamma}(t, t+\tau) = R_x(x\tau) = g(\tau)$$ $$\gamma(t) = x(at+b) : wssRP$$ | $$E[x(t)] = \mu_x$$ $$E[x(2t+3)] = \mu_x$$ $$x(t) : wssRP$$ $$E[x(t)x(t+\tau)]$$ $$= R_x(t+\tau-t)$$ $$= R_x(\tau)$$ $$= f(\tau)$$ | (iii) $$\gamma(t) = 2x(t) + 3x(t-2) : wssRP$$ $$E[\gamma(t)] = \mu_\gamma(t) = E[2x(t) + 3x(t-2)]$$ $$= 2E[x(t)] + 3E[x(t-2)]$$ $$= 2\mu_x + 3\mu_x = 5\mu_x$$ $$E[\gamma(t)] = 5\mu_x \neq f(t)$$ $$R_{\gamma\gamma}(t, t+\tau) = E[\gamma(t) \cdot \gamma(t+\tau)]$$ $$= E[\{2x(t) + 3x(t-2)\}, \{2x(t+\tau) + 3x(t+\tau-2)\}]$$ $$= E[4x(t)x(t+\tau) + 6x(t)x(t+\tau-2) + 6x(t-2)x(t+\tau) + 9x(t-2)x(t+\tau-2)]$$ $$R_\gamma(\tau) = 4R_x(\tau) + 6R_x(\tau-2) + 6R_x(\tau+2) + 9R_x(\tau)$$  |
| --- | --- | --- |

|  $$\gamma(t) = ax(t) + bx(t-T_0) : wssRP$$ $$x(t) : wssRP$$ (i) $$\gamma(t) = ax(t) + b : wssRP$$ $$\mu_\gamma = a\mu_x + b$$ $$\sigma_\gamma^2 = a^2\sigma_x^2$$ $$R_\gamma(\tau) \to calculate$$ (ii) $$\gamma(t) = x(at+b) : wssRP$$ $$\mu_\gamma = \mu_x$$ $$\sigma_\gamma^2 = \sigma_x^2$$ | $$\gamma = ax+b$$ $$\mu_\gamma = a\mu_x + b$$ $$\sigma_\gamma^2 = a^2\sigma_x^2$$ (iii) $$\gamma(t) = ax(t) + bx(t-T_0) : wssRP$$ $$\mu_\gamma = a\mu_x + b\mu_x$$ $$\sigma_\gamma^2 = a^2\sigma_x^2 + b^2\sigma_x^2 + 2abC_{xx}(T_0)$$ $$\sigma_\gamma^2 = (a^2+b^2)\sigma_x^2 + 2abC_{xx}(T_0)$$ | $$x(t) : wssRP$$ $$C_x(\tau) = R_x(\tau) - \mu_x^2$$ $$C_x(-\tau) = R_x(-\tau) - \mu_x^2$$ $$= R_x(\tau) - \mu_x^2 = C_x(\tau)$$ $$C_x(-\tau) = C_x(\tau)$$ $$\gamma(t) = ax(t) + bx(t-T_0) : wssRP$$ $$\sigma_\gamma^2(t) = E[\gamma^2(t)] - \{E[\gamma(t)]\}^2$$ $$E[\gamma(t)] = a\mu_x + b\mu_x$$ $$\{E[\gamma(t)]\}^2 = a^2\mu_x^2 + b^2\mu_x^2 + 2ab\mu_x^2$$ $$E[\gamma^2(t)] = E[q^2x^2(t) + b^2x^2(t-T_0) + 2abx(t)x(t-T_0)]$$ $$= a^2E[x^2(t)] + b^2E[x^2(t)] + 2abR_x(T_0)$$  |
| --- | --- | --- |

---
## Page 12

$$\sigma_{Y(t)}^2 = a^2 E[x^2(t)] + b^2 E[x^2(t)] + 2ab R_Y(T_0) - a^2 \mu_Y^2 - b^2 \mu_Y^2 - 2ab \mu_Y^2$$

$$\sigma_{Y(t)}^2 = a^2 \sigma_X^2 + b^2 \sigma_X^2 + 2ab C_X(T_0)$$

$$R_X(T_0) - \mu_X^2 = C_X(T_0)$$

$$\begin{array}{l} Y(t) = aX(t) + bX(t-T_0) \\ \sigma_{Y(t)}^2 = a^2 \sigma_Y^2 + b^2 \sigma_Y^2 + 2ab C_X(T_0) \end{array}$$

$$\begin{array}{l} C_X(T_0) = \text{cov}[X(t) \cdot X(t-T_0)] \\ = R_X(T_0) - \mu_X^2 \end{array}$$

$$\begin{array}{l} Y = aX + bZ \\ \sigma_Y^2 = a^2 \sigma_Y^2 + b^2 \sigma_Y^2 + 2ab \sigma_{XZ} \\ \sigma_{XZ} = C_{XZ} \end{array}$$

$$\begin{array}{c} \star \text{Deterministic signal} \\ \xleftarrow{\text{waveform}} \\ X(t) = A \cos(\omega t + \theta) \end{array}$$

$$\begin{array}{l} \star \text{Random signal} \\ \rightarrow \text{Random Process} \\ \rightarrow \text{Stochastic Process} \\ X(t) = A \cos(\omega t + \theta) \quad ; \quad A \sim U[0, 2] \\ \downarrow \quad \theta \sim U[0, 2\pi] \\ R.P. \\ \left. \begin{array}{l} X_1(t) \vee \\ X_2(t) \vee \\ X_3(t) \vee \\ \vdots \end{array} \right\} \text{Multiple Time domain} \\ \text{waveforms} \end{array}$$

$$\rho \text{WSSRP}$$

$$Q \quad X(t) = A \sin(\omega t + \theta) \quad ; \quad \theta \sim U[0, 2\pi]$$

(a) Statistical mean of \( X(t) \)
(b) Time \( \text{dyn} \). Mean of \( x(t) \) \( \sim \) deterministic
(c) Statistical auto-correlation of \( X(t) \).
(d) Time \( \text{dyn} \) auto-correlation of \( X(t) \).

$$(a) \quad E[X(t)] = E[A \sin(\omega t + \theta)] = A E[\sin(\omega t + \theta)] = A \int_{0}^{2\pi} \sin(\omega t + \theta) \times \frac{L}{2\pi} d\theta = 0 \vee$$

$$(b) \quad \text{Time dyn. Mean} = \lim_{T \to \infty} \frac{L}{T} \int_{T} X(t) dt$$

$$= \lim_{T \to \infty} \frac{L}{T} \int_{T} \sin(\omega t + \theta) \cdot d\theta = 0 \vee$$

$$(s) \quad dCF[X(t)] = E[X(t) \cdot X(t+\tau)] = E[A^2 \sin(\omega t + \theta) \sin(\omega t + \omega\tau + \theta)] = \frac{A^2}{2} \cos(\omega\tau) \vee$$

$$(d) \quad \text{Time dyn } dCF = \lim_{T \to \infty} \frac{L}{T} \int_{T} X(t) \cdot X(t+\tau) dt = \frac{A^2}{2} \cos \omega\tau \vee$$

$$\begin{array}{l} = \lim_{T \to \infty} \frac{A^2}{2T} \int_{T} \sin(\omega t + \theta) \sin(\omega t + \omega\tau + \theta) \cdot dt \\ = \lim_{T \to \infty} \frac{A^2}{2T} \left[ \int_{T} \cos \omega\tau \cdot dt - \int_{T} \cos(\omega\tau + \omega\tau + 2\theta) \cdot dt \right] \\ = \frac{A^2}{2} \cos \omega\tau \end{array}$$

---
## Page 13

* Ergodic Random Process:

![img-4.jpeg](AD-communication/Clean_Random%20process/images/img-4.jpeg)

Ergodic R.P.

![img-5.jpeg](AD-communication/Clean_Random%20process/images/img-5.jpeg)

NOTE:-

4 If the process is ergodic, it will surely be wssRP.

4 for aperiodic ergodic R.P.

$$\lim_{\tau \to 0} R_x(\tau) = R_x(\infty) = \mu_x^2 = \Delta c \text{ power}$$

Q. For a stationary ergodic Process $x(t)$,

$$\Delta cF \ R_x(\tau) = \frac{\tau^2}{2S + g\tau^2} \ ; \text{magnitude of mean} = ?$$

4 Ergodic R.P.: $$\lim_{\tau \to 0} R_x(\tau) = \lim_{\tau \to 0} \frac{\tau^2}{2S + g\tau^2} = \frac{L}{g} = \mu_x^2$$

$$\mu_x = \pm L/g$$

Q. $x(t) = 6e^{At}$ ; $A \sim U[0, 2]$

Find $R_x(t_1, t_2)$ ; $wssRP = ?$

$$R_x(t_1, t_2) = E[x(t_1) \cdot x(t_2)] = E[36 e^{At_1} e^{At_2}] = 36 E[e^{A(t_1 + t_2)}] = \frac{18}{t_1 + t_2} [e^{2(t_1 + t_2)} - 1]$$

$$E[e^{A(t_1 + t_2)}] = \int_0^2 \frac{e^{A(t_1 + t_2)}}{2} \cdot dA$$
$$= \frac{1}{2} \left[ \frac{e^{A(t_1 + t_2)}}{(t_1 + t_2)} \right]_0^2 = \boxed{\frac{L}{2(t_1 + t_2)} [e^{2(t_1 + t_2)} - 1]} = f(t_1 + t_2)$$

For wssRP:

$$R_x(t_1, t_2) = f(t_2 - t_1) \quad ; \quad R_x(t_1, t+\tau) = R_x(t+\tau - t) = R_x(\tau)$$

Q. $x(t)$: wssRP; $R_x(\tau) = 0.5 e^{-|\tau|/2}$
$\sim E[x^2(t)] = R_x(0) \neq f(t)$
$wssRP$
$y(t) = x(t) - 6ax(t-0.5)$
$= 0.5$
$E[x^2(t-0.5)] = 0.5$

Find the value of "a" that would minimize the mean square value of $y(t)$.

$$MSV[y(t)] = E[y^2(t)]$$
$$= E[x^2(t) + 36a^2 x^2(t-0.5) - 12a x(t) x(t-0.5)]$$
$$= E[x^2(t)] + 36a^2 E[x^2(t-0.5)] - 12a E[x(t) x(t-0.5)]$$
$$= 0.5 + 18a^2 - 12a R_x(t-0.5-t)$$
$$= 0.5 + 18a^2 - 12a \times 0.5 e^{-1/4}$$
$$MSV = 0.5 + 18a^2 - 6a e^{-1/4} = f(a)$$
$$f(a) = 18a^2 - 6a e^{-1/4} + 0.5$$
$$\frac{df(a)}{da} = 0$$
$$\Rightarrow 36a = 6 e^{-1/4}$$
$$a = \frac{1}{6} e^{-1/4}$$

---
## Page 14

Q. x(t): wssRP with an avg. power of Px and zero mean.
$$ \text{Total } \uparrow \text{MSV} \quad \uparrow \text{MSV} \quad \uparrow \text{E}[x(t)] = 0 $$
$$ y(t) = A x(t) \cos(\pi/3 t + \theta) \quad ; \quad \theta \sim v[0, 2\pi] \quad E[x^2(t)] = P_x $$

Avg. power of R.P. $$ y(t) = ? = E[y^2(t)] \quad \theta \in x(t)$$: Independent
Avg. of $$ y(t) = ? = E[y(t)] $$

$$ E[y(t)] = E[A x(t) \cos(\pi/3 t + \theta)] = A E[x(t)] \cdot E[\cos(\pi/3 t + \theta)] $$
$$ = [0] $$
$$ E[y^2(t)] = E[A^2 x^2(t) \cos^2(\pi/3 t + \theta)] = A^2 E[x^2(t)] \cdot E[\cos^2(\pi/3 t + \theta)] $$
$$ = A^2 P_x \cdot E[\frac{1 + \cos(2\pi/3 t + 2\theta)}{2}] $$
$$ \cos 2\phi = 2 \cos^2 \phi - 1 $$
$$ = 1 - 2 \sin^2 \phi $$
$$ \boxed{E[y^2(t)] = \frac{A^2}{2} P_x} $$

$$ \text{Q. } x(t) = A \cos \omega t \quad ; \quad A \sim v[0, 1] \quad \uparrow \text{E}[A] = 1/2 $$
$$ y(t) = \frac{2\pi}{T} \int_{t}^{t+T/2} x(\alpha) \cdot d\alpha \quad ; \quad \omega = \frac{2\pi}{T} $$
maximum possible value of $$ E[y(t)] = ? $$
$$ E[y(t)] = E[\frac{2\pi}{T} \int_{T/2} A \cos \omega \alpha \cdot d\alpha] $$
$$ \underbrace{E[y(t)]}_{\max} = \frac{2\pi}{T} \int_{T/2} E[A] \cdot \cos \omega \alpha \cdot d\alpha = \frac{2\pi}{T} \cdot \frac{1}{2} \int_{T/2} \cos \omega \alpha \cdot d\alpha $$
$$ = \frac{\pi}{T} \times \frac{2}{\pi} \times T/2 = [1]_{A=0} $$

Q. x(t): Ergodic R.P.
$$ \text{Q. } x(t) \text{: Ergodic R.P.} $$
$$ E[x(t) x(t+t)] = R_x(t) $$
$$ E[x(t+t) x(t+2t)] = R_x(t) $$
$$ E[x(t-t) x(t)] = R_x(t) $$
$$ (a) \text{ Mean, Variance, MSV; Co-variance graph?} $$
$$ E[x(t+x(t+t))] = R_x(t) $$
$$ E[x(t-2)x(t)] = R_x(t) $$
$$ (b) \quad \alpha = \lim_{T \to \infty} \frac{1}{T} \int_{-T/2}^{T/2} x^2(t) \cdot dt \quad ; \quad \text{Find } \alpha = ? $$
$$ (c) \text{ The process is sampled at freq. } f_s, \text{ what should be the maximum value of } f_s \text{ such that.} $$
$$ \boxed{f_s = \frac{1}{\tau}} $$

- (i) successive samples are uncorrelated. $$ x(t) = \text{wssRP} $$
- (ii) successive samples are orthogonal.
- (iii) successive samples are independent.
- (iv) covariance of successive sample is 12.5.
- (v) correlation of successive samples is 40.

- (d) $$ E[x^2(200)] = E[x^2(t)] = 50 $$
- (e) $$ E[x(101) x(36)] = R_x(96-101) = R_x(-5) = R_x(3) = 37.5 $$
- (f) $$ E[x(100)] = E[x(4)] = \pm 5 $$
- (g) $$ \text{cov}[x(7)x(9)] = E[x(7)x(9)] - E[x(7)] \cdot E[x(9)] = R_x(2) - M_x^2 = 45 - 25 = 20 $$
- (h) $$ Y = x(2) - x(4) $$; Variance of $$ Y = ? $$

---
## Page 15

(a) Mean; Ergodic R.P
$$
\begin{array}{l}
R_{x}(\infty) = \mu_{x}^{2} \\
2s = \mu_{x}^{2} \quad ; \quad \mu_{x} = \pm s
\end{array}
$$
$$
\begin{array}{l}
c_{xx}(t, t+\tau) = E[x(t) \times (t+\tau)] \\
- E[x(t)] \cdot E[x(t+\tau)] \\
= R_{x}(\tau) - \mu_{x}^{2}
\end{array}
$$

MSV
$$
\begin{array}{l}
E[x^{2}(t)] = R_{x}(0) = 50 \\
\text{Variance} \quad \sigma_{x}^{2} = E[x^{2}(t)] - \mu_{x}^{2} = 50 - 25 = 25
\end{array}
$$

covariance
$$
\begin{array}{l}
c_{x}(\tau) = R_{x}(\tau) - \mu_{x}^{2} \\
c_{y}(\tau) = R_{y}(\tau) - 25 \\
c_{x}(t) = R_{x}(0) - 25 \\
= 50 - 25
\end{array}
$$

for Ergodic R.P.
$$
\begin{array}{l}
R_{x}(\tau) = E[x(t) \times (t+\tau)] = \lim_{T \to \infty} \frac{1}{T} \int_{T} x(t) \cdot x(t+\tau) \, dt \\
R_{x}(0) = \lim_{T \to \infty} \frac{1}{T} \int_{-T_{2}}^{T_{2}} x^{2}(t) \, dt = \alpha = 50
\end{array}
$$

(c) Uncorrelated R.V. $E[xy] = E[x] \cdot E[y]$
$$
\begin{array}{l}
R.P. \quad E[x(t) \cdot x(t+\tau)] = E[x(t)] \cdot E[x(t+\tau)] \\
R_{x}(\tau) = \mu_{x} \cdot \mu_{x} \\
R_{x}(\tau) = \mu_{x}^{2} = 25 \\
R_{x}(\tau) = 25
\end{array}
$$
$$
4 \tau_{min} = 10 \text{ mse} \quad f_{5max} = \frac{1}{\tau_{min}} = \frac{1}{10m} = \boxed{100 \text{ Hz}}
$$

Orthogonal R.V. $E[xy] = 0$

$$E[x(t) \times (t+\tau)] = 0$$

$$
\begin{array}{c}
R_{x}(\tau) = 0 \\
4 \quad \text{Never Possible}
\end{array}
$$

Independent R.V. $x$ and $y$ ; $E[g(x) \cdot h(y)] = E[g(x)] \cdot E[h(y)]$

$$E[x(t) \times (t+\tau)] = E[x(t)] \cdot E[x(t+\tau)]$$

$$R_{x}(\tau) = \mu_{x}^{2} = 25$$

$$\tau_{min} = 10 \text{ min}$$

$$f_{5max} = 100 \text{ Hz}$$

Covariance = 12.5

$$E[x(t) \times (t+\tau)] - E[x(t)] \cdot E[x(t+\tau)] = 12.5$$

$$R_{x}(\tau) - 25 = 12.5$$

$$R_{y}(\tau) = 37.5$$

$$\Rightarrow \quad \tau_{min} = 5 \text{ msec}$$

$$f_{5max} = 200 \text{ Hz}$$

$$
\begin{array}{l}
E[x(t) \times (t+\tau)] = R_{x}(\tau) = 40 \\
; \quad \tau_{min} = 4 \text{ mse} \\
\boxed{f_{5max} = \frac{1}{4m} = 250 \text{ Hz}}
\end{array}
$$

$$Y = X(2) - X(4)$$

$$\sigma_{Y}^{2} = P = E[Y^{2}] - \{E[Y]\}^{2}$$

![img-6.jpeg](AD-communication/Clean_Random%20process/images/img-6.jpeg)

$$
\begin{array}{l}
E[Y^{2}] = E[x^{2}(2) + x^{2}(4) - 2X(2)X(4)] \\
= E[x^{2}(2)] + E[x^{2}(4)] - 2E[x(2)X(4)] \\
= 50 + 50 - 2R_{x}(2) \\
= 100 - 2(45) = 10
\end{array}
$$

$$E[Y] = E[x(2)] - E[x(4)] = \mu_{x} - \mu_{x} = 0$$

$$\boxed{\sigma_{Y}^{2} = E[Y^{2}] = 10} \quad \text{mse}$$

---
## Page 16

# Continuous Time to Discrete time

![img-7.jpeg](AD-communication/Clean_Random%20process/images/img-7.jpeg)

Q. A Discrete Time R.P. X[n] is zero mean and stationary.

Another R.P. d[n] = X[n] - X[n-1] : WSSRP

$$\sigma_{d[n]}^2 = \frac{\sigma_{X[n]}^2}{10} ; R_{xx}(k) : ACF[x(n)]$$

Find $$\left\{ \frac{R_{xx}(k)}{\sigma_x^2} \right\}_{k=1}^n = ?$$ [dn. 10.95]

$$E[X(n)] = 0 - E[X(n-1)]$$

$$d[n] = X[n] - X[n-1]$$

$$\sigma_{d[n]}^2 = E[d^2(n)] \left\{ E[d(n)] \right\}^2$$

$$E[d(n)] = E[X(n)] - E[X(n-1)] = 0$$

$$\begin{array}{l} Y(t) = aX(t) + bX(t-T_0) \\ \downarrow Y(n) = aX(n) + bX[n-n_0] \\ \downarrow WSSRP \end{array}$$

$$E[d^2(n)] = E[x^2[n] + x^2[n-1] - 2X[n]X[n-1]]$$

$$= E[x^2(n)] + E[x^2(n-1)] - 2E[x(n)X(n-1)]$$

$$\sigma_{d[n]}^2 = \sigma_{X[n]}^2 + \sigma_{X[n]}^2 - 2R_{xx}(-1)$$

![img-8.jpeg](AD-communication/Clean_Random%20process/images/img-8.jpeg)

$$\sigma_{d[n]}^2 = 2\sigma_{X[n]}^2 - 2R_x(L)$$

$$\frac{\sigma_{X[n]}^2}{10} = 2\sigma_{X[n]}^2 - 2R_x(L)$$

$$2R_x(L) = 1.9\sigma_{X[n]}^2$$

$$\frac{R_x(L)}{\sigma_{X[n]}^2} = \frac{1.9}{2} = 0.95$$

$$\sigma_{X[n]}^2 = E[x^2(n)] - \left\{ E[x(n)] \right\}^2$$

$$WSSRP$$

$$\sigma_{X[n]}^2 = \sigma_{X[n-1]}^2 = \sigma_x^2$$

$$\boxed{\left\{ \frac{R_x(k)}{\sigma_x^2} \right\}_{k=1} = 0.95}$$

(I.I.O. R.V.)

# Meaning of Independent and identically distributed R.P.

Let X(t) is I.I.O. R.P.

Let X(n) is I.I.O. R.P.

![img-9.jpeg](AD-communication/Clean_Random%20process/images/img-9.jpeg)

---
## Page 17

Q. An independent and identically distributed R.P. $\{x_n\}_{n=-\infty}^{n=-\infty}$ takes value -1 and 1 with equal probabilities.

(a) find mean, variance, MSV, ACF, covariance of $x_n$.
(ii) " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " "

(b) R.P. $Y_n$ and $Z_n$ are defined by,

$$Y_n = 3x_n + 2x_{n-1} : WSSRP$$

$$Z_n = x_n - 2x_{n-2} : WSSRP$$

i) Find all the statistical parameters of $Y_n$ and $Z_n$, also find CCF=?

(ii) $E[Y_3X_3]$

$$R_{YZ}, R_{ZY} = ?$$

$$x_n \in \{-1, 1\} \quad x_n^2 \in \{1\} \quad x[n] = \{x_n\}_{n=-\infty}^{n=-\infty}$$

(i) Mean = $(-1)(1/2) + (1)(1/2) = 0 = E[x_n]$
(ii) MSV = $E[x_n^2]$
$= (-1)^2 + 1/2 + (1)^2(1/2) = 1$
Constant
-1
-2
1
0
1
2
3
$\eta \to$

(iii) Variance = $E[x_n^2] - \{E[x_n]\}^2$
$= 1$

(iv) ACF = $E[x_n x_{n+k}] = E[x_n] E[x_{n+k}] \to$ Independent

$$= E[x_n]^0 \cdot E[x_n]^0$$
$$R_{xx}(k) = 0 \to XXX \text{ wrong}$$

$$\begin{array}{c} x_n \cdot I \cdot I \cdot O \cdot R \cdot P \\ \text{Independent} \\ \text{Identical} \\ x_n - 1 - x_n \\ x_n - 1 - x_{n+k} \end{array}$$

$$ACF = E[x_n x_{n+k}] = \begin{cases} E[x_n^2] & ; k=0 \\ E[x_n] \cdot E[x_{n+k}] & k \neq 0 \to \text{independence} \\ E[x_n] \cdot E[x_n] & \to \text{identical} \end{cases}$$

$$x_n : I \cdot I \cdot O \cdot R \cdot P$$

$$R_{xx}(k) = \begin{cases} E[x_n^2] & ; k=0 \\ \{E[x_n]\}^2 & ; k \neq 0 \end{cases} \to I \cdot I \cdot O \cdot R \cdot P$$

$$R_{xx}(k) = \begin{cases} 1 & ; k=0 \\ 0 & ; k \neq 0 \end{cases} ; \boxed{R_{xx}(k) = \delta(k)} = f(\text{Time difference})$$

![img-10.jpeg](AD-communication/Clean_Random%20process/images/img-10.jpeg)

4. covariance = $E[x_n x_{n+k}] - E[x_n]^0 \cdot E[x_{n+k}]^0$

$$C_x(k) = R_x(k) \quad \text{ans.}$$

(ii) $x_n : WSSRP$
statistical parameters of $\{x_n\}$ = statistical parameters of $x_{n+k}$

(iii) $E[x_7 x_3] = R_x(3-7) = R_x(-4) = 0$
$E[x_7^2] = MSV = 1$ ; $E[x_{n+3} x_{n-6}] = R_x(n-6-n-3) = R_x(-9) = 0$

---
## Page 18

$$Y_{\eta} = 3x_{\eta} + 2x_{\eta-1}$$

$$E[x_{\eta}] = E[x_{\eta-1}]$$

$$z_{\eta} = x_{\eta} - 2x_{\eta-2}$$

$$= E[x_{\eta-2}] = 0$$

(a) $$E[Y_{\eta}] = 3(0) + 2(0) = 0$$

$$E[z_{\eta}] = 0 - 2(0) = 0$$

(b) $$R_{Y}(k) = E[Y_{\eta} \cdot Y_{\eta+k}] = E[(3x_{\eta} + 2x_{\eta-1}) \cdot (3x_{\eta+k} + 2x_{\eta+k-1})]$$

$$= E[9x_{\eta} \cdot x_{\eta+k} + 6x_{\eta} \cdot x_{\eta+k-1} + 6x_{\eta-1} x_{\eta+k}$$

$$+ 4x_{\eta-1} x_{\eta+k-1}]$$

$$= 9R_{Y}(k) + 6R_{Y}(k-1) + 6R_{Y}(k+1) + 4R_{Y}(k)$$

$$= 13R_{Y}(k) + 6R_{Y}(k-1) + 6R_{Y}(k+1)$$

$$R_{Y}(k) = 15\delta(k) + 6\delta(k-1) + 6\delta(k+1)$$

![img-11.jpeg](AD-communication/Clean_Random%20process/images/img-11.jpeg)

$$R_{Z}(k) = E[z_{\eta} z_{\eta+k}]$$

$$= E[(x_{\eta} - 2x_{\eta-2})(x_{\eta+k} - 2x_{\eta+k-2})]$$

$$= E[x_{\eta}x_{\eta+k} - 2x_{\eta}x_{\eta+k-2} - 2x_{\eta-1}x_{\eta+k} + 4x_{\eta-2}x_{\eta+k-2}]$$

$$= R_{Y}(k) - 2R_{Y}(k-2) - 2R_{Y}(k+2) + 4R_{Y}(k)$$

$$R_{Z}(k) = 5R_{Y}(k) - 2R_{Y}(k-2) - 2R_{Y}(k+2)$$

$$R_{Z}(k) = 5\delta(k) - 2\delta(k-2) - 2\delta(k+2)$$

![img-12.jpeg](AD-communication/Clean_Random%20process/images/img-12.jpeg)

MSV = 5

Variance = 5

Mean = 0

$$C_{Y}(k) = R_{Y}(k)$$

4 $$Y_{\eta} : WSSR P ; Z_{\eta} : WSSR P \Rightarrow Their \ CCF = f(k)$$

$$Y(t) : WSSR P : X(t) : WSSR P \Rightarrow R_{XY}(t, t+t) ; R_{YX}(t, t+t) = f(t)$$

4 $$R_{YX}(k) = E[Y_{\eta} z_{\eta+k}] = E[(3x_{\eta} + 2x_{\eta-1})(x_{\eta+k} - 2x_{\eta+k-2})]$$

$$= E[3x_{\eta}x_{\eta+k} - 6x_{\eta}x_{\eta+k-2} + 2x_{\eta-1}x_{\eta+k} - 4x_{\eta-1}x_{\eta+k-2}]$$

$$R_{YX}(k) = 3R_{Y}(k) - 6R_{Y}(k-1) + 2R_{Y}(k+1) - 4R_{Y}(k-1)$$

$$R_{YX}(k) = 5\delta(k) - 6\delta(k-2) + 2\delta(k+1) - 4\delta(k-1)$$

$$R_{ZY}(k) = R_{YX}(-k) = 3\delta(-k) - 6\delta(-k-2) + 2\delta(-k+1)$$

$$- 4\delta(-k-1)$$

$$R_{ZY}(k) = 3\delta(k) - 6\delta(k+2) + 2\delta(k-1) - 4\delta(k+1)$$

4 $$E[Y_{3}z_{5}] = ?$$

$$\delta(k) = \begin{cases} 1; & k=0 \\ 0; & k \neq 0 \end{cases}$$

$$R_{YX}(k) = E[Y_{\eta} z_{\eta+k}]$$

$$\eta=3, k=2$$

$$E[Y_{3}z_{5}] = R_{YX}(2) = 5\delta(2) - 6\delta(2-2) + 2\delta(3) - 4\delta(1)$$

$$E[Y_{3}z_{5}] = -6$$

---
## Page 19

4 Quick overview of Cross- Correlation: x(t); y(t): wSSRP

$$R_{xy}(z) = E[x(t) y(t+z)]$$

$$R_{yx}(z) = E[y(t) x(t+z)]$$

$$R_{xy}(-z) = E[x(t+z) \cdot y(t)] = R_{yx}(z)$$

* some Important Point:

① $$R_{xy}(z) = R_{yx}(-z)$$ ; $$R_{xy}(k) = R_{yx}(-k)$$

② $$R_{yx}(z) = R_{xy}(-z)$$ ; $$R_{yx}(k) = R_{xy}(-k)$$

③ $$\frac{R_{yx}(0) + R_{yy}(0)}{2} > \sqrt{R_{xy}(0) \cdot R_{yy}(0)} > |R_{xy}(z)| = |R_{yx}(-z)|$$

Q

x(t) and y(t) are wSSRP.

$$w(t) = ax(t) + by(t) : w_{SSRP}$$

$$x(t) = ax(t) - by(t)$$

Find (a) $$\alpha cF[w(t)]$$ ; $$\alpha cF[x(t)]$$

b(b) If x(t) and y(t) are orthogonal, then $$\alpha cF[w(t)] = ?$$

$$\alpha cF[x(t)] = ?$$

4

$$\begin{array}{l} E[w(t)] = a u_x + b u_y \\ E[x(t)] = a u_x - b u_y \end{array} \quad \longleftrightarrow \text{constant}$$

4 $$\alpha cF[w(t)] = E[w(t) \cdot w(t+z)]$$

$$= E[ax(t) + by(t)] \cdot (ax(t+z) + by(t+z))]$$

$$= E[a^2x(t)x(t+z) + abx(t)y(t+z) + aby(t)x(t+z)$$

$$+ b^2y(t)y(t+z)]$$

$$= a^2R_x(z) + abR_{xy}(z) + abR_{yx}(z) + b^2R_y(z)$$

$$\checkmark \boxed{R_w(z) = a^2R_x(z) + b^2R_y(z) + abR_{xy}(z) + abR_{yx}(z)} : w_{SSRP}$$

$$R_w(-z) = a^2R_x(z) + b^2R_y(z) + abR_{yx}(z) + abR_{xy}(z)$$

$$R_w(z) = R_w(-z)$$

4 $$\alpha cF[z(t)] = E[z(t) \cdot z(t+z)] = E[ax(t) - by(t) \cdot ax(t+z) - by(t+z)]$$

$$= E[a^2x(t) \cdot x(t+z) - abx(t)y(t+z) - aby(t)x(t+z) + b^2y(t)y(t+z)]$$

$$R_x(z) = a^2R_x(z) + b^2R_y(z) - abR_{xy}(z) - abR_{yx}(z)$$

: wSSRP

4 x(t) and y(t): wSSRP + orthogonal

$$R_{xy}(z) = E[x(t) \cdot y(t+z)] = 0$$

$$R_{yx}(z) = E[y(t) \cdot x(t+z)] = 0$$

$$x(t) \perp y(t), y(t+z), y(t+z) \dots$$

$$y(t) \perp x(t), x(t+z), x(t+z) \dots$$

$$w(t) = ax(t) + by(t)$$

$$R_w(z) = a^2R_x(z) + b^2R_y(z)$$

$$z(t) = ax(t) - by(t)$$

$$R_z(z) = a^2R_y(z) + (-b)^2R_y(z)$$

$$R_z(z) = a^2R_y(z) + b^2R_y(z)$$

4 x(t) and y(t): wSSRP + orthogonal

---
## Page 20

$$\begin{array}{l} R_{wz}(t, t+\tau) = E[w(t) \cdot z(t+\tau)] \\ = E[a_x(t) + b_y(t) \cdot a_x(t+\tau) - b_y(t+\tau)] \\ = E[q^2_x(t) \times (t+\tau) - a_b x(t) y(t+\tau) + a_b y(t) x(t+\tau) \\ - b^2 y(t) y(t+\tau)] \end{array}$$

$$R_{wx}(z) = a^2 R_x(z) - b^2 R_y(z) - a_b R_{xy}(z) + a_b R_{yx}(z)$$

$$\begin{array}{l} w(t): w_{SSRP} \Rightarrow CCF = f(\tau) \\ z(t): w_{SSRP} \end{array}$$

* Strict Sense Stationary R.P. -

$$\begin{array}{l} (a) \mu_y(t) = \text{constant} \\ (b) R_{xx}(t, t+\tau) = R_x(\tau) \end{array} \Bigg\} w_{SSRP}$$

![img-13.jpeg](AD-communication/Clean_Random%20process/images/img-13.jpeg)

(c) Joint PDFs doesn't change when all times are shifted equally.

![img-14.jpeg](AD-communication/Clean_Random%20process/images/img-14.jpeg)

$$x(t) \xrightarrow[t=t_1+h]{} x(t_1+h) = w$$

$$x(t) \xrightarrow[t=t_2+h]{} x(t_2+h) = v$$

$$f_{yz}(y, z) = f_{wv}(w, v)$$

" Gaussian R.P. -

$$E[xy] = E[x] \cdot E[y]$$

$$E[g(x)h(y)]$$

![img-15.jpeg](AD-communication/Clean_Random%20process/images/img-15.jpeg)

$$= E[g(x)] \cdot E[h(x)]$$

If $x(t)$ is Gaussian + wSSRP, then $x(t)$ will be SSSRP as well.

Generally, Uncorrelation $\Rightarrow$ Independence

But if $x(t)$ is Gaussian then,

Uncorrelation $\Rightarrow$ Independence

* Important discussion: -

Given, $x(t)$: wSSRP

![img-16.jpeg](AD-communication/Clean_Random%20process/images/img-16.jpeg)

$$p(t) = A \cos(\omega t + \theta)$$

Comment on the nature of $y(t)$ when:

(a) when $p(t)$ is deterministic signal

(b) $A \sim U[0, 2]$ ; $A \sim U[-1, 1]$

(c) $\theta \sim U[0, 2\pi]$ ; $\theta \sim U[-\pi, \pi]$

(d) $A \sim U[0, 2]$, $\theta \sim U[0, 2\pi]$

Take $A, \theta$ and $x(t)$ mutually independent.

---
## Page 21

$$Y(t) = X(t) \cdot P(t)$$

(g) $$Y(t) = A X(t) \cos(\omega t + \theta)$$

$$\begin{array}{l} E[Y(t)] = E[X(t)] A \cos(\omega t + \theta) \\ = \mu_X A \cos(\omega t + \theta) = f(t) \end{array}$$

NOT WSSRP

(h) $$Y(t) = A X(t) \cos(\omega t + \theta)$$

$$\mu_Y(t) = E[A] \cdot E[X(t)] \cos(\omega t + \theta)$$

$$R_Y(t, t+\tau) = E[Y(t) Y(t+\tau)] = E[A^2 X(t) X(t+\tau) \cos(\omega t + \theta) \cos(\omega t + \omega\tau + \theta)]$$

$$= \frac{E[A^2]}{2} R_X(\tau) [\cos(2\omega t + 2\omega\tau + \theta) + \cos(\omega\tau)] = f(t, \tau)$$

NOT WSSRP

(c) $$Y(t) = A X(t) \cos(\omega t + \theta)$$ ; $$\theta \sim U[0, 2\pi]$$

OR $$\theta \sim U[-\pi, \pi]$$

$$\begin{array}{l} \mu_Y = A \cdot E[X(t)] E[\cos(\omega t + \theta)] \\ = 0 \neq f(t) \end{array}$$

$$R_Y(t, t+\tau) = E[Y(t) Y(t+\tau)] = E[A^2 X(t) X(t+\tau) \cos(\omega t + \theta) \cos(\omega t + \omega\tau + \theta)]$$

$$R_Y(\tau) = \frac{A^2}{2} R_X(\tau) \cos \omega\tau$$

$$Y(t) : \omega_{SSRP}$$

(d) $$Y(t) = A X(t) \cdot \cos(\omega t + \theta)$$ ; $$A \sim U[0, 2]$$

$$\mu_Y = 0$$

$$\theta \sim U[0, 2\pi]$$

$$R_Y(\tau) = \frac{E[A^2]}{2} R_X(\tau) \cos \omega\tau$$

Conclusion:

$$X(t) : \omega_{SSRP} \Rightarrow Y(t) : \omega_{SSRP}$$

$$Y(t) = A X(t) \cos(\omega t + \theta)$$

$$; Y(t) = A X(t) \sin(\omega t + \theta)$$

$$\begin{array}{l} R_Y(\tau) = \frac{E[A^2]}{2} R_X(\tau) \cos \omega\tau \\ R_Y(0) = \frac{E[A^2]}{2} R_X(0) \end{array}$$

$$A \sim R \cdot V$$

$$\theta \sim U[-\pi, \pi]$$

$$\sim U[0, 2\pi]$$

$$\sim U[-\pi/2, 3\pi/2]$$

$$\sim U[(\text{length } 2\pi)]$$

* Passing a Random Process through an LTI S/S:

![img-17.jpeg](AD-communication/Clean_Random%20process/images/img-17.jpeg)

---
## Page 22

![img-18.jpeg](AD-communication/Clean_Random%20process/images/img-18.jpeg)

![img-19.jpeg](AD-communication/Clean_Random%20process/images/img-19.jpeg)

Q.

![img-20.jpeg](AD-communication/Clean_Random%20process/images/img-20.jpeg)

![img-21.jpeg](AD-communication/Clean_Random%20process/images/img-21.jpeg)

![img-22.jpeg](AD-communication/Clean_Random%20process/images/img-22.jpeg)

![img-23.jpeg](AD-communication/Clean_Random%20process/images/img-23.jpeg)

![img-24.jpeg](AD-communication/Clean_Random%20process/images/img-24.jpeg)

![img-25.jpeg](AD-communication/Clean_Random%20process/images/img-25.jpeg)

![img-26.jpeg](AD-communication/Clean_Random%20process/images/img-26.jpeg)

Q. Find the Expression of $R_{xy}(z)$, $R_{yx}(z)$, $C_{xy}(z)$, $C_{yx}(z)$, $C_y(z)$

$\rightarrow R_{xy}(z) \in E[x(t), y(t+z)] = E[x(t) \int_{-\infty}^{\infty} h(\alpha) \cdot x(-\alpha+t+z) d\alpha]$

$$= E \left[ \int_{-\infty}^{\infty} h(\alpha) \cdot x(t) \cdot x(-\alpha+t+z) \cdot d\alpha \right]$$

$$= \int_{-\infty}^{\infty} h(\alpha) \cdot E[x(t) \cdot x(t-\alpha+z)] \cdot d\alpha$$

$$= \int_{-\infty}^{\infty} h(\alpha) \cdot R_y(-\alpha+z) \cdot d\alpha \quad \int_{-\infty}^{\infty} h(\alpha) \cdot x(-\alpha+t) \cdot d\alpha$$
$$h(t) \neq x(t)$$

$$R_{xy}(z) = h(z) * R_y(z)$$

$$R_{xy}(z) = R_y(z) * h(z)$$

$$R_{yx}(z) = R_{xy}(-z) = R_y(z) * h(-z)$$

$$R_{yx}(z) = R_y(z) * h(-z)$$

$$\begin{array}{l} x(t) * h(t) = y(t) \\ x(t) * h(-t) = y(-t) \end{array}$$

---
## Page 23

$$\begin{array}{l} R _ { Y } ( \tau ) = R _ { X } ( \tau ) \times h ( \tau ) \times h ( - \tau ) \\ R _ { Y } ( \tau ) = R _ { X Y } ( \tau ) \times h ( - \tau ) \\ R _ { Y } ( \tau ) = R _ { Y X } ( \tau ) \times h ( \tau ) \\ R _ { X Y } ( \tau ) = R _ { X } ( \tau ) \times h ( \tau ) \\ R _ { Y X } ( \tau ) = R _ { X } ( \tau ) \times h ( - \tau ) \end{array}$$

![img-27.jpeg](AD-communication/Clean_Random%20process/images/img-27.jpeg)

$$\begin{array}{l} C _ { X Y } ( \tau ) = E [ X ( t ) Y ( t + \tau ) ] - E [ X ( t ) ] E [ Y ( t + \tau ) ] \\ = R _ { X Y } ( \tau ) - \mu _ { X } \mu _ { Y } = R _ { X Y } ( \tau ) - \mu _ { X } ^ { 2 } H ( 0 ) \\ C _ { Y } ( \tau ) = R _ { Y } ( \tau ) - \mu _ { Y } ^ { 2 } \\ = R _ { Y } ( \tau ) - \mu _ { Y } ^ { 2 } H ^ { 2 } ( 0 ) \end{array}$$

Conclusion :-

$$\begin{array}{l} Y ( t ) = X ( t ) \times h ( t ) \\ \mu _ { Y } = \left. \mu _ { X } \cdot H ( w ) \right| _ { w = 0 } \\ R _ { Y } ( \tau ) = R _ { Y } ( \tau ) \times h ( \tau ) \times h ( - \tau ) \\ R _ { X Y } ( \tau ) = R _ { Y } ( \tau ) \times h ( \tau ) \\ R _ { Y X } ( \tau ) = R _ { Y } ( \tau ) \times h ( - \tau ) \\ R _ { Y } ( \tau ) = R _ { X Y } ( \tau ) \times h ( - \tau ) = R _ { Y X } ( \tau ) \times h ( \tau ) \end{array}$$

Q

![img-28.jpeg](AD-communication/Clean_Random%20process/images/img-28.jpeg)

(a) Mean, MSV, Variance, \( R_{Y}(t), C_{Y}(t) = ? \)
(b) \(R_{XY}(t), R_{YX}(t), C_{XY}(t), C_{YX}(t) = ?\)

(9) $$\mu _ { Y } = \mu _ { X } \cdot H ( w ) | _ { w = 0 }$$

$$\boxed { \mu _ { Y } = L }$$

$$\begin{array}{l} R _ { Y } ( \tau ) = R _ { X } ( \tau ) \times h ( \tau ) \times h ( - \tau ) \\ = 4 R _ { X } ( \tau ) \times \delta ( \tau - L ) \times \delta ( \tau + L ) = 4 R _ { X } ( \tau ) \times \delta ( \tau ) = 4 R _ { X } ( \tau ) \end{array}$$

$$h ( \tau ) = 2 \delta ( \tau - L )$$

$$h ( - \tau ) = 2 \delta ( - \tau - L )$$

$$= 2 \delta ( \tau + L )$$

$$X ( t ) \times h ( t ) = y ( t )$$

$$X ( t + t _ { 1 } ) \times h ( t + t _ { 2 } ) = y ( t + t _ { 1 } + t _ { 2 } )$$

$$R _ { Y } ( \tau ) = 4 R _ { X } ( \tau ) \quad M S V = 1 2 = R _ { Y } ( 0 )$$

$$R _ { Y } ( \tau ) = 1 2 e ^ { - 2 | \tau | } \quad \sigma _ { Y } ^ { 2 } = 1 2 - 1 + 1 L$$

$$C _ { Y } ( \tau ) = R _ { Y } ( \tau ) - \mu _ { Y } ^ { 2 } = 1 2 e ^ { - 2 | \tau | } - L$$

(b) $$R _ { X Y } ( \tau ) = R _ { X } ( \tau ) \times h ( \tau )$$

$$= 2 R _ { X } ( \tau ) \times \delta ( \tau - L ) = 2 R _ { X } ( \tau - L ) = 6 e ^ { - 2 | \tau - L | }$$

$$R _ { Y X } ( \tau ) = R _ { X Y } ( - \tau ) = 6 e ^ { - 2 | - \tau - L | } = 6 e ^ { - 2 | \tau + L | }$$

$$= R _ { X } ( \tau ) \times h ( - \tau ) = R _ { X } ( \tau ) \times 2 \delta ( \tau + L ) = 2 R _ { X } ( \tau + L ) = 6 e ^ { - 2 | \tau + L | }$$

$$C _ { X Y } ( \tau ) = R _ { X Y } ( \tau ) - \mu _ { X } \mu _ { Y } = R _ { X Y } ( \tau ) - 0 . 5$$

$$C _ { Y X } ( \tau ) = R _ { Y X } ( \tau ) - \mu _ { X } \mu _ { Y } = R _ { Y X } ( \tau ) - 0 . 5$$

---
## Page 24

M-II

$$y(t) = x(t) \times h(t)$$

$$x(t) = \omega SSRP$$

$$= 2x(t) \times \delta(t-1)$$

$$\boxed{y(t) = 2x(t-1)}$$

$$\text{mean}[2x(t-1)] = 2 \text{ mean}[x(t)] = 1$$

$$\text{Msv}[2x(t-1)] = E[4x^2(t-1)] = 4E[x^2(t)] = 12$$

$$R_y(\tau) = E[y(t) \cdot y(t+\tau)] = E[2x(t-1) \cdot 2x(t+\tau-1)]$$

$$= 4E[x(t-1)x(t+\tau-1)]$$

$$\boxed{R_y(\tau) = 4R_y(\tau)}$$

$$R_{xy}(\tau) = E[x(t) y(t+\tau)] = E[x(t) \cdot 2x(t+\tau-1)]$$

$$\boxed{R_{xy}(\tau) = 2R_y(\tau-1)}$$

# 4 Quick Revision of Fourier Transform Formulae:

$$x(t) \xrightarrow[\text{7.1}]{\text{7.1}} x(w)$$
$$\xrightarrow[\text{7.1}]{\text{7.1}} x(f)$$

$$x(w) = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} \cdot dt$$

$$x(f) = \int_{-\infty}^{\infty} x(t) e^{-j2\pi ft} \cdot dt$$

$$x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} x(w) e^{j\omega t} \cdot dw$$

$$x(t) = \int_{-\infty}^{\infty} x(f) e^{j2\pi ft} \cdot df$$

# Some Properties:

$$x(t) \xrightarrow{\text{7.1}} x(w), x(f)$$

$$x(-t) \longrightarrow x(-w), x(-f)$$

$$x^A(t) \longrightarrow x^A(-w), x^A(-f)$$

$$x(at) \longrightarrow \frac{1}{|a|} x(w_a) + \frac{1}{|a|} x(f_a)$$

$$\int_{-\infty}^{\infty} x(w) \cdot dw = 2\pi x(t)|_{t=0}$$

$$\int_{-\infty}^{\infty} x(f) \cdot df = x(t)|_{t=0}$$

![img-29.jpeg](AD-communication/Clean_Random%20process/images/img-29.jpeg)

![img-30.jpeg](AD-communication/Clean_Random%20process/images/img-30.jpeg)

$$\star \quad \delta(t) \xrightarrow{\text{7.1}} 1$$

$$1 \xrightarrow{\text{7.1}} 2\pi \delta(w), \delta(f)$$

$$e^{j2\pi f_0 t}, e^{j\omega_0 t} \xrightarrow{\text{7.1}} 2\pi \delta(w - \omega_0), \delta(f - f_0)$$

$$\cos 2\pi f_0 t, \cos \omega_0 t \xrightarrow{\text{7.1}} \pi[\delta(w - \omega_0) + \delta(w + \omega_0)], \frac{1}{2}[\delta(f - f_0) + \delta(f + f_0)]$$

$$\text{sgn}(t) \xrightarrow{\text{7.1}} \frac{2}{j\omega}, \frac{2}{j2\pi f}, \frac{1}{j\pi f}$$

$$\star \quad x_1(t) \in x_2(t) \xrightarrow{\text{7.1}} x_1(w) \cdot x_2(w), x_1(f) \cdot x_2(f)$$

If $h(t)$ is real:

$$H(t) = H^*(-t)$$

$$\boxed{H(-t) = H^*(t)}$$

---
## Page 25

$$\begin{array}{l} e^{-alt} \xrightarrow{\text{7.T.}} \frac{2a}{a^2+w^2} \\ e^{-at^2} \xrightarrow{\text{7.T.}} \sqrt{\pi} e^{-w^2/4a} \\ e^{-\pi t^2} \xrightarrow{\text{7.T.}} e^{-\pi f^2} \\ x(t) \cos \omega_0 t \longrightarrow \frac{x(\omega-\omega_0) + x(\omega+\omega_0)}{2} \\ x(t) \left[ \frac{e^{j\omega_0 t} + e^{-j\omega_0 t}}{2} \right] \quad \frac{x(f-f_0) + x(f-f_0)}{2} \\ 4 \text{ Parseval's Theorem:.} \\ \int_{-\infty}^{\infty} |h(t)|^2 \cdot dt = \int_{-\infty}^{\infty} |h(f)|^2 \cdot df = \frac{1}{d\pi} \int_{-\infty}^{\infty} |H(\omega)|^2 \cdot d\omega \end{array}$$

$$\begin{array}{l} \text{Hilbert Transformer:.} \\ 4 \text{ Finding hilbert transform of } x(t). \\ \begin{array}{l} y(t) = x(t) * \frac{1}{\pi t} = \hat{x}(t) \\ Y(\omega) = x(\omega)[-j\sin(\omega)] = -j x(\omega) \sin(\omega) \\ Y(\omega) = -j x(f) \sin(f) \\ |H(f)| = 1 \end{array} \\ \begin{array}{l} h(t) = \frac{1}{\pi t} \\ h(f) = -j \sin(f) \\ H(\omega) = -j \sin(\omega) \end{array} \\ \begin{array}{l} y(t) = x(t) * \frac{1}{\pi t} = \hat{x}(t) \\ Y(\omega) = x(\omega)[-j \sin(\omega)] = -j x(\omega) \sin(\omega) \\ Y(\omega) = -j x(f) \sin(f) \\ |H(f)| = 1 \end{array} \\ -j \sin(f) = \left\{ \begin{array}{l} -j, f > 0 \\ j, f < 0 \end{array} \right. \end{array}$$

Q. Find hilbert Transform of -
(a) $x(t) = \cos 2t$
(b) $x(t) = \sin 2t$
$\omega_0 = 2r/sec.$
$H(\omega) = -j \sin(\omega)$
$H(\omega_0) = -j$
$|H(\omega)| = 1, \quad \angle H(\omega_0) = -90^\circ$
$$\begin{array}{l} \cos 2t \xrightarrow{LTI S/S} H(\omega) \\ y(t) = |H(\omega_0)| \cos(2t + \angle H(\omega_0)) \\ y(t) = \cos(2t - 90^\circ) \\ \hat{x}(t) = \sin 2t \end{array}$$
$$\begin{array}{l} \sin 2t \xrightarrow{H(\omega)} y(t) = \sin(2t - 90^\circ) \\ = -\cos 2t \end{array}$$

4 Hilbert Transform works as -90° phase shifter.
4 Taking hilbert Transform twice:-

![img-31.jpeg](AD-communication/Clean_Random%20process/images/img-31.jpeg)

$$y(t) = x(t) * \frac{1}{\pi t} * \frac{1}{\pi t}$$

$$\begin{array}{l} Y(f) = x(f) \cdot H(f) \cdot H(f) \\ = x(f)[-j \sin(f)] [-j \sin(f)] \end{array}$$

$$Y(f) = x(f)(-1) (\sin^2(f))$$

$$Y(f) = -x(f) \quad ; \quad \boxed{y(t) = -x(t)}$$

---
## Page 26

4 Hilbert Transformer is a non-causal LTI s/s which is unstable.

4 H.T. of an even function will be an odd function.

4 H.T. of an odd function will be an even function.

Q Find the o/o of each block.

* Power spectral density of a wssRP:

$$\downarrow_{w \text{ sSRP}} x(t) \xrightarrow{d \in F} R_x(\tau) \xrightarrow{\text{F.T.}} S_x(\omega), S_x(\text{F}) \xrightarrow{\text{LT PSD}}$$

$$S_x(\omega) = \int_{-\infty}^{\infty} R_x(\tau) e^{-j\omega\tau} d\tau$$

$$S_x(\text{F}) = \int_{-\infty}^{\infty} R_x(\tau) e^{-j2\pi f\tau} d\tau$$

$$R_x(\tau) = \frac{1}{\sqrt{\pi}} \int_{-\infty}^{\infty} S_x(\omega) e^{j\omega\tau} d\omega = \int_{-\infty}^{\infty} S_x(\text{F}) e^{j2\pi f\tau} d\text{F}$$

![img-32.jpeg](AD-communication/Clean_Random%20process/images/img-32.jpeg)

Total power of $x(t) = MSV[x(t)] = R_x(\tau)|_{\tau=0} = \frac{1}{2\pi} \int_{-\infty}^{\infty} S_x(\omega) d\omega = \int_{-\infty}^{\infty} S_x(\text{F}) d\text{F} = \text{watt}$

4 What does PSD represent?

How the power of Random Process is distributed over different frequency range.

4 Unit: $\text{watt}/\mu_z$ $S_x(\text{F}) \to \text{watt}/\mu_z$

4 Important properties:

(ii) Defined only for wssRP:

(ii) Always positive: $S_x(\text{F}) \ge 0$ ; $S_x(\omega) \ge 0$

(iii) Even function: $S_x(\text{F}) = S_x(\text{F})$ ; $S_x(\omega) = S_x(\text{F}-\omega)$

(iv) Total power: $E[x^2(t)] = \frac{1}{d\pi} \int_{-\infty}^{\infty} S_x(\omega) d\omega = \int_{-\infty}^{\infty} S_x(\text{F}) d\text{F}$

$R_x(\tau) \to$

$R_x(0) \ge |R_x(\tau)|$

$R_x(\tau) = R_x(\text{F}-\tau)$

4 It could be

negative

Q $R_x(\tau) = 4 + 2 \cos 4\tau + \frac{4 \sin 2\tau}{\pi \tau}$ ; $x(t)$: wssRP with no offset

(a) Find mean of $x(t)$, Variance and MSV of $x(t)$

(b) Draw PSD.

4 (a) $\mu_x^2 = 4$ ; $x(t) \to \text{NO OFFSET}$

$\mu_y = \pm 2$

$$\text{MSV} = R_x(0) = 4 + 2 + \frac{4 \times 2}{\pi} = 6 + 8/\pi$$

$$\text{Variance} = 6 + 8/\pi - 4 = 2 + 8/\pi$$

(b) $R_x(\tau) \xrightarrow{\text{F.T.}} S_x(\omega), S_x(\text{F})$

---
## Page 27

$$R_x(z) = 4 + 2 \cos 4z + \frac{4 \sin 2z}{\pi z}$$
$$1 \rightarrow 2\pi \delta(\omega)$$
$$4 \rightarrow 8\pi \delta(\omega)$$

$$S_x(\omega) = 8\pi \delta(\omega) + 2\pi [\delta(\omega-4) + \delta(\omega+4)] + 4 \text{rect}(\frac{\omega}{4})$$

$$1 \rightarrow \delta(f)$$

The impulse at $\omega=0$, $f=0$ will be

$$4 \rightarrow 4 \delta(f)$$

responsible for DC power, considering

$x(t)$ has no offset.

$$S_x(f) = 4\delta(f) + \delta(f - \frac{4}{2\pi}) + \delta(f + \frac{4}{2\pi}) + 4 \text{rect}(\frac{2\pi f}{4})$$

![img-33.jpeg](AD-communication/Clean_Random%20process/images/img-33.jpeg)

$\cos 2\pi f_0 z$ ; $2\pi f_0 = 4$

$\downarrow$

$$\frac{\delta(f-f_0) + \delta(f+f_0)}{2}$$

![img-34.jpeg](AD-communication/Clean_Random%20process/images/img-34.jpeg)

![img-35.jpeg](AD-communication/Clean_Random%20process/images/img-35.jpeg)

Total power = $L + L + 4 + L_6$

$$= 6 + 8/\pi$$

$$\mu_y^2 = \int_{0}^{\pi^2} s_y(f) \cdot df = 4$$

$$\mu_y = \pm 4$$

4

$$(i) \text{ DC Power} = \mu_y^2 = \underbrace{\frac{1}{2\pi} \int_{0}^{\pi^2} s_x(\omega) \cdot d\omega}_{\text{Area of Impulse at } \omega=0} = \underbrace{\int_{0}^{\pi^2} s_y(f) \cdot df}_{\text{Area of impulse at } f=0}$$

$$(ii) \text{ Total Power} = E[x^2(t)] = \underbrace{\frac{1}{2\pi} \int_{-\infty}^{\infty} s_x(\omega) \cdot d\omega}_{\text{Area}} = \underbrace{\int_{-\infty}^{\infty} s_y(f) \cdot df}_{\text{Area}}$$

$$(iii) \text{ Variance } \sigma_{x(t)}^2 = E[x^2(t)] - \mu_y^2$$

* Summary:

$$① R_x(z) \xrightarrow{\text{7.T.}} S_x(\omega), S_x(f)$$

$$② S_x(\omega) \xrightarrow{\text{7.F.T.}} R_y(z)$$

$$S_y(f) \xrightarrow{\text{7.F.T.}} R_x(z)$$

$$③ \text{ MSV}[x(t)] = \text{Total power} = \int_{-\infty}^{\infty} S_x(f) \cdot df = \frac{1}{2\pi} \int_{-\infty}^{\infty} S_x(\omega) \cdot d\omega$$

$$④ \text{ Mean}[x(t)] = \int_{0}^{\pi^2} S_x(f) \cdot df = \frac{1}{2\pi} \int_{0}^{\pi^2} S_x(\omega) \cdot d\omega \quad \cdot \quad x(t) = \text{NO OFFSET}$$

$$⑤ S_x(f) \geqslant 0; S_x(\omega) > 0$$

$$⑥ S_x(f) = S_x(-f)$$

$$S_x(\omega) = S_x(-\omega)$$

$$⑦ \text{ Peak need not to be necessary at } \omega=0 \text{ or } f=0$$
$$\text{But } R_x(0) > |R_x(z)|$$

---
## Page 28

Q. Valid PSO?

$$(a) S_x(\omega) = \frac{2}{g+\omega^2}$$

$$(b) S_x(\omega) = e^{-\omega^2 \cos^2 \omega}$$
$$S_x(\omega) = \begin{cases} 1 & ; 0 < \omega < 2 \\ -1 & ; -2 < \omega < 0 \end{cases}$$
$$(c) S_x(\omega) = \begin{cases} 1 & ; 0 < \omega < 2 \\ 0 & ; 0/\omega \end{cases}$$

4

$$S_x(\omega) \ge 0$$

$$S_x(\omega) = S_x(-\omega)$$

![img-36.jpeg](AD-communication/Clean_Random%20process/images/img-36.jpeg)

(d) Avg Power = ? → Total Power = nsv

(e) 2c Power = ? = $$\mu_y^2 = \frac{1}{2\pi} \int_0^\infty S_x(\omega) d\omega = 2\pi_0 = 0$$

(f) $$\frac{4+4+2\times 2\times 10^3+2\times 1/2\times 10^3\times 2}{2\pi} = Power = \frac{6+6\times 10^3}{2\pi} = \frac{3004}{\pi} watt$$

Q.

$$Y(t) = -3x(t) - 2z(t)$$

PSO of Y(t) -? considering x(t) and z(t) are orthogonal.

4

$$Y(t) = ax(t) + bz(t)$$

$$R_Y(\tau) = a^2 R_Y(\tau) + b^2 R_X(\tau) +$$

$$S_Y(f) = a^2 S_X(f) + b^2 S_X(f)$$

$$S_Y(\omega) = a^2 S_Y(\omega) + b^2 S_X(\omega)$$

$$S_Y(\omega) = g S_X(\omega) + 4 S_X(\omega)$$

O: x(t) & z(t) are orthogonal.

Q.

$$x(t): W \text{ SS RP}$$

$$S_x(f) = \begin{cases} 1/\omega & ; |f| \le \omega \\ 0 & ; 0/\omega \end{cases}$$

Find $$\mathbb{E}[\pi x(t) \times (t - \frac{1}{4\omega})] = ?$$

$$\pi R_x(-1/4\omega) = \pi R_x(\frac{1}{4\omega}) = ?$$

$$R_x(\tau) = \frac{1}{\omega} \frac{\sin(2\pi\omega\tau)}{\pi\tau} \longleftarrow \text{IFT}$$

![img-37.jpeg](AD-communication/Clean_Random%20process/images/img-37.jpeg)

$$\pi R_x(1/4\omega) = \frac{\pi}{\omega} \frac{\sin(2\pi\omega\tau + 1/4\omega)}{\pi \times 1/4\omega} = \frac{\pi}{\omega} \times \frac{4\omega}{\pi} \sin(\pi/2) = \boxed{4} \quad \text{ans.}$$

---
## Page 29

Q. $$\gamma(t) = \chi(2t - L)$$

![img-38.jpeg](AD-communication/Clean_Random%20process/images/img-38.jpeg)

Find $$S_\gamma(f)$$ in terms of $$S_\chi(f)$$.

$$\gamma(t) \longrightarrow R_\gamma(\tau) \xrightarrow{\text{F.T.}} S_\gamma(f)$$

$$R_\gamma(\tau) = E[\gamma(t) \cdot \gamma(t+\tau)]$$
$$= E[\chi(2t-L) \chi(2t+2\tau-L)]$$

$$R_\gamma(\tau) = R_\chi(2\tau)$$

$$\begin{array}{c} \downarrow \text{F.T.} \quad \downarrow \text{F.T.} \\ \boxed{S_\gamma(f) = \frac{L}{2} S_\chi(f/2)} \end{array}$$

$$\chi(t) \longrightarrow \chi(f)$$

$$\chi(2t) \rightarrow \frac{L}{2} \chi(f/2)$$

* Passing $$\chi(t)$$ through an LTI sig:-

$$\gamma(t) = \chi(t) * h(t)$$

$$R_\gamma(\tau) = R_\chi(\tau) * h(\tau) * h(-\tau) \xrightarrow{\text{F.T.}} S_\gamma(f) = S_\chi(f) \cdot H(f) \cdot H(-f)$$
$$= S_\chi(f) \cdot H(f) \cdot H^*(f)$$

$$R_{\chi\gamma}(\tau) = R_\chi(\tau) * h(\tau) \xrightarrow{\text{F.T.}} S_{\chi\gamma}(f) = S_\chi(f) \cdot H(f) \quad \boxed{S_\gamma(f) = |H(f)|^2 S_\gamma(f)}$$

$$R_{\gamma\gamma}(\tau) = R_\chi(\tau) * h(-\tau) \xrightarrow{\text{F.T.}} S_{\gamma\gamma}(f) = S_\gamma(f) \cdot H(f)$$

$$R_\gamma(\tau) = R_{\chi\gamma}(\tau) * h(-\tau) = R_{\gamma\chi}(\tau) * h(\tau) \xrightarrow{\text{F.T.}} S_\gamma(f) = S_{\chi\gamma}(f) \cdot H(-f) = S_{\gamma\gamma}(f) \cdot H(f)$$

![img-39.jpeg](AD-communication/Clean_Random%20process/images/img-39.jpeg)

Total power of $$\gamma(t) = MSV$$ of $$\gamma(t) = E[\gamma^2(t)]$$

$$= \int_{-\infty}^{\infty} S_\gamma(f) \cdot df = \frac{L}{2\pi} \int_{-\infty}^{\infty} S_\gamma(\omega) \cdot d\omega$$

![img-40.jpeg](AD-communication/Clean_Random%20process/images/img-40.jpeg)

![img-41.jpeg](AD-communication/Clean_Random%20process/images/img-41.jpeg)

![img-42.jpeg](AD-communication/Clean_Random%20process/images/img-42.jpeg)

![img-43.jpeg](AD-communication/Clean_Random%20process/images/img-43.jpeg)

$$R_\chi(\tau) = e^{(-\pi\tau^2)} \xrightarrow{\text{F.T.}} S_\chi(f) = e^{-\pi f^2}$$

PSO of OIP $$\gamma(t) = ?$$, $$R_\gamma(\tau) = ?$$

---
## Page 30

$$\begin{array}{l} \begin{array}{c} \boxed {x (t)} \xrightarrow {} \boxed {\rho (t)} \xrightarrow {} \boxed {\gamma (t)} \\ \gamma (t) = x (t) \times \rho (t) \\ s _ {\gamma} (f) = | \rho (f) | ^ {2} s _ {x} (f) \end{array} \quad \begin{array}{c} \boxed {x (f) \cdot \rho (f) = \gamma (f)} \\ \frac {\gamma (f)}{\kappa (f)} = \rho (f) \end{array} \\ \gamma (t) = x (t) \times H (t) - x (t) \\ \gamma (f) = x (f) \cdot H (f) - x (f) \\ \frac {\gamma (f)}{\kappa (f)} = H (f) - L = \rho (f) \\ \Rightarrow \rho (f) = j 2 \pi f - L; | \rho (f) | ^ {2} = L + 4 \pi^ {2} f ^ {2} \\ \boxed {s _ {\gamma} (f) = \left(L + 4 \pi^ {2} f ^ {2}\right) s _ {x} (f)} \\ \end{array}$$

$$\begin{array}{l} \begin{array}{l} S _ {\gamma} (f) = \left(L + 4 \pi^ {2} f ^ {2}\right) S _ {x} (f) \\ S _ {\gamma} (\omega) = \left(L + \omega^ {2}\right) S _ {x} (\omega) \\ S _ {\gamma} (\omega) = S _ {x} (\omega) + \omega^ {2} S _ {x} (\omega) \end{array} \\ \begin{array}{c} \downarrow \text {IFT} \\ R _ {x} (\tau) \longrightarrow S _ {x} (\omega) \\ - \frac {d ^ {2}}{d \tau^ {2}} R _ {x} (\tau) \longrightarrow \omega^ {2} S _ {x} (\omega) \end{array} \\ \begin{array}{c} \boxed {x (t) \longrightarrow x (\omega)} \\ \frac {d}{d t} x (t) \longrightarrow j \omega x (\omega) \\ - \frac {d ^ {2}}{d t ^ {2}} x (t) \longrightarrow \omega^ {2} x (\omega) \end{array} \\ \end{array}$$

![img-44.jpeg](AD-communication/Clean_Random%20process/images/img-44.jpeg)

Find $\mu_{Y}, R_{Y}(\tau) \in S_{Y}(\omega)$ in terms of i1p parameters

4

$$\mu_ {Y} = \mu_ {Y} \cdot H (\omega) | _ {\omega = 0}$$

$$\boxed {\mu_ {Y} = \mu_ {X}}$$

$$R _ {Y} (\tau) = R _ {X} (\tau) \times \underbrace {h (\tau) \times h (- \tau)} _ {\rho (\tau)}$$

$$\frac {\gamma (s)}{\chi (s)} = \frac {L}{L + s R C}$$

$$\begin{array}{l} H (s) = \frac {L}{L + s R C}; H (\omega) = \frac {L}{L + j \omega R C} \\ \int_ {h (\tau)} = \quad H (\omega) | _ {\omega = 0} = 1 \end{array}$$

$$\begin{array}{l} \frac {1}{L + \omega^ {2} R ^ {2} c ^ {2}} = \rho (\omega) \\ = \frac {L}{R ^ {2} c ^ {2}} \\ \frac {\omega^ {2} + L}{R ^ {2} c ^ {2}} = \rho (\omega) \end{array} \quad \begin{array}{l} S _ {Y} (\omega) = | H (\omega) | ^ {2} S _ {X} (\omega) \\ S _ {Y} (\omega) = \underbrace {\frac {L}{L + \omega^ {2} R ^ {2} c ^ {2}} \cdot S _ {X} (\omega)} _ {\rho (\omega)} \\ \downarrow \text {IFT} \end{array}$$

$$R _ {Y} (\tau) = \underbrace {\rho (\tau)} _ {\sim} * R _ {X} (\tau)$$

$$R _ {Y} (\tau) = \underbrace {e ^ {- | \tau | / R _ {C}}} _ {2 R C} * R _ {X} (\tau)$$

$$H (\omega) = \frac {L}{L + j \omega R C}$$

$$| H (\omega) | ^ {2} = \frac {L}{L + \omega^ {2} R ^ {2} c ^ {2}}$$

$$e ^ {- a | \tau |} \longrightarrow \frac {2 a}{a ^ {2} + \omega^ {2}}$$

$$\frac {1}{2 R C} e ^ {- \frac {1}{R C} | \tau |} \longrightarrow \frac {\frac {1}{R C} + \frac {1}{R C}}{\omega^ {2} + \frac {1}{R ^ {2} c ^ {2}}}$$

$$\frac {e ^ {- | \tau | / R C}}{2 R C} \rightarrow \rho (\omega)$$

---
## Page 31

![img-45.jpeg](AD-communication/Clean_Random%20process/images/img-45.jpeg)

![img-46.jpeg](AD-communication/Clean_Random%20process/images/img-46.jpeg)

---
## Page 32

![img-47.jpeg](AD-communication/Clean_Random%20process/images/img-47.jpeg)

![img-48.jpeg](AD-communication/Clean_Random%20process/images/img-48.jpeg)

---
## Page 33

![img-49.jpeg](AD-communication/Clean_Random%20process/images/img-49.jpeg)

![img-50.jpeg](AD-communication/Clean_Random%20process/images/img-50.jpeg)

![img-51.jpeg](AD-communication/Clean_Random%20process/images/img-51.jpeg)

$$power [Y(t)] = \int_{-\infty}^{\infty} s_Y(f) df = 2 \times \left[ \frac{1}{2} \times 2k + \frac{1}{2} \times 2k \times \frac{1}{4} \right] \frac{mW}{H^2} \times H^2$$
$$= 2 [1k + 0.25k] mw$$
$$= 2.5 walt \quad Ans.$$

Q. $$Y(t) = \frac{d}{dt} [X(t) + X(t-0.5)]$$

Find the freq for which $$S_Y(f) = 0$$ ; Given $$S_X(f) > 0$$

$$S_Y(f) = |H(f)|^2 S_X(f)$$

![img-52.jpeg](AD-communication/Clean_Random%20process/images/img-52.jpeg)

$$Y(t) = \frac{d}{dt} [X(t) + X(t-0.5)]$$

$$Y(f) = j\alpha\pi f [X(f) + e^{-j\alpha\pi f \times t/2} X(f)]$$

$$\frac{Y(f)}{X(f)} = H(f) = j\alpha\pi f [1 + e^{-j\pi f}]$$
$$|H(f)|^2 = 4\pi^2 f^2 |1 + e^{-j\pi f}|^2$$

$$S_Y(f) = 4\pi^2 f^2 |1 + e^{-j\pi f}|^2 S_X(f)$$
$$e^{j\theta} = -1$$
$$\theta = \pi + 2n\pi$$

$$S_Y(f) = 0$$
$$\Downarrow$$
$$e^{-j\pi f} = -1$$

$$for \quad f = (2n+1)Hz$$
$$\eta \in W$$
$$f = 1, 3, 5, 7 \dots$$
$$f = (2n+1)Hz$$

---
## Page 34

![img-53.jpeg](AD-communication/Clean_Random%20process/images/img-53.jpeg)

![img-54.jpeg](AD-communication/Clean_Random%20process/images/img-54.jpeg)

NOTE: If white noise is Gaussian ⇒ SSSRP
Independence ✓

![img-55.jpeg](AD-communication/Clean_Random%20process/images/img-55.jpeg)

![img-56.jpeg](AD-communication/Clean_Random%20process/images/img-56.jpeg)

![img-57.jpeg](AD-communication/Clean_Random%20process/images/img-57.jpeg)

---
## Page 35

Total o/p Power = $\frac{N_0}{2} \int_{-\infty}^{\infty} |H(f)|^2 \cdot df = \frac{N_0}{2} \int_{-\infty}^{\infty} |h(t)|^2 \cdot dt = \frac{N_0}{2} E_{h(t)}$

![img-58.jpeg](AD-communication/Clean_Random%20process/images/img-58.jpeg)

Q. $S_x(f) = \frac{N_0}{2}$ ; passed through LTI filter = $h(t)$

zero mean white Gaussian noise. $\mu_x = 0$ ; $\mu_y = 0$

The variance of the filtered noise at t=4 sec. $\gamma(t): \text{WSS} \text{RP}$

![img-59.jpeg](AD-communication/Clean_Random%20process/images/img-59.jpeg)

$\sigma^2 = E[\gamma^2(t)] - \mu_y^{-0}$

= Total power

$\sigma^2 = \int_{-\infty}^{\infty} C_Y(f) \cdot df = \int_{-\infty}^{\infty} |H(f)|^2 C_Y(f) \cdot df = \frac{N_0}{2} \int_{-\infty}^{\infty} |H(f)|^2 \cdot df = \frac{N_0}{2} \int_{-\infty}^{\infty} |H(f)|^2 \cdot dt = \frac{N_0}{2} 3A^2$

4. $R_{xx}(t) = E[x(t)] \cdot E[z(t+t)] \rightarrow$ Uncorrelation

$R_{xz}(t) = \mu_x \mu_z$

$\gamma(t) = \rho(t) + z(t)$

$R_{yx}(t) = 0 \rightarrow$ orthogonal

4. $x(t)$ and $z(t)$ are orthogonal

$\downarrow S_Y(f) = S_\rho(f) + S_z(f)$

only when $\rho(t)$ & $z(t)$ are orthogonal

$R_{pz}(t) = 0 \rightarrow \rho(t)$ and $z(t)$ are orthogonal

$R_{pz}(t) = E[\rho(t) \cdot z(t+t)]$

$= E[x(t) * h(t)] \cdot z(t+t)]$

$= E[\int_{-\infty}^{\infty} h(\alpha) \cdot x(-\alpha+t) \cdot dt \cdot z(t+t)]$

$= \int_{-\infty}^{\infty} h(\alpha) \cdot E[x(-\alpha+t)] \cdot dt \cdot E[z(t+t)] = 0 \begin{cases} x(t) \text{ and } z(t) \\ \text{are uncorrelated} \end{cases}$

$R_{pz}(t) = 0 \Rightarrow \rho(t)$ and $z(t)$ are orthogonal

$S_Y(f) = S_\rho(f) + S_z(f)$

4. If $x(t)$: white noise and $z(t)$ are uncorrelated, then they will be orthogonal too.

4. If $x(t)$: white noise is passed through a filter to produce $\rho(t)$ and $z(t)$ is known that $x(t)$ and $z(t)$ are uncorrelated then $\rho(t)$ and $z(t)$ will be orthogonal too.

---
## Page 36

![img-60.jpeg](AD-communication/Clean_Random%20process/images/img-60.jpeg)

$$S_p(f) = |H(f)|^2 S_y(f)$$

$$\text{Power of } Y(t) = \int_{-\infty}^{\infty} S_y(f) \cdot df = \int_{-\infty}^{\infty} [S_p(f) + \delta_x(f)] \cdot df$$
$$= \int_{-\infty}^{\infty} S_p(f) \cdot df + \int_{-\infty}^{\infty} \delta_x(f) \cdot df = \frac{50}{4} + 5$$
$$= \boxed{17.5 \text{ watt}}$$

$$\text{Q. } S_N(f) = 0.5 \text{ W/m}^2; \quad h(t) = 0.5 e^{-t^2/2}$$
$$\text{O/P power} = ?$$

$$S_y(f) = \delta_y(f) \cdot |H(f)|^2$$
$$\int_{-\infty}^{\infty} S_y(f) \cdot df = 0.5 \int_{-\infty}^{\infty} |H(f)|^2 \cdot df$$
$$= 0.5 \int_{-\infty}^{\infty} |h(t)|^2 \cdot dt$$
$$= 0.5 \int_{-\infty}^{\infty} 0.25 e^{-t^2} \cdot dt$$
$$= \frac{1}{8} \int_{-\infty}^{\infty} e^{-t^2} \cdot dt = \sqrt{\pi}/8 = 0.22 \text{ watt}$$

![img-61.jpeg](AD-communication/Clean_Random%20process/images/img-61.jpeg)

---
## Page 37

![img-62.jpeg](AD-communication/Clean_Random%20process/images/img-62.jpeg)

![img-63.jpeg](AD-communication/Clean_Random%20process/images/img-63.jpeg)

![img-64.jpeg](AD-communication/Clean_Random%20process/images/img-64.jpeg)

![img-65.jpeg](AD-communication/Clean_Random%20process/images/img-65.jpeg)

---
## Page 38

![img-66.jpeg](AD-communication/Clean_Random%20process/images/img-66.jpeg)

![img-67.jpeg](AD-communication/Clean_Random%20process/images/img-67.jpeg)

$$P(\tau) = \frac{N_0}{2} \frac{\sin(2\pi B\tau)}{\pi\tau}$$

$$S_T(\omega) = P(\omega - \omega_c) + P(\omega + \omega_c)$$

$$\downarrow \pi r - \tau$$

$$R_T(\tau) = P(\tau) e^{-j\omega_c\tau} + P(\tau) e^{j\omega_c\tau}$$

$$= 2P(\tau) \left[ \frac{e^{-j\omega_c\tau} + e^{j\omega_c\tau}}{2} \right]$$

$$= 2P(\tau) \cos \omega_c \tau$$

$$R_T(\tau) = 2B N_0 \frac{\sin(2\pi B\tau)}{2B\pi\tau} \cos \omega_c \tau$$

$$R_T(\tau) = 2N_0 B \sin C(2B\tau) \cos \omega_c \tau \quad ANS.$$

4 Random Binary Sequence ✓


#flashcards

#review
