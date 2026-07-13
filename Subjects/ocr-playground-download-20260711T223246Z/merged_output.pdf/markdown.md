# Polar plot

complex value

Plot of G(jω)H(jω) for various values of ω on complex plane.

x-axis: Re [G(jω)H(jω)]

y-axis: Im [G(jω)H(jω)]

GH = Re (GH) + jIm (GH)

Determine both values at all values of ω[0 → ∞]& plot on the polar plane. Join the dots to get the polar plot.

![img-0.jpeg](img-0.jpeg)

GH = |GH| ∠GH

magnitude phase

# Steps to Draw Polar Plot

** SN

Step 1: T(s)|s=jω = T(jω)0 +< ω < ∞+

Step 2: T(j0+) = M1∠φ1 ← polar form
T(j∞+) = M2∠φ2

Step 3: Rationalise T(jω) = Re {T(jω)} + jIm{T(jω)}

rectangular form
useful when magnitude 1GH1
becomes ∞ at certain value
of ω.

# $T(s) = s$ polar plot

![img-1.jpeg](img-1.jpeg)

$$T(j\omega) = j\omega \Leftrightarrow \begin{cases} Re = 0 \\ \hat{I}_m = \omega \end{cases}$$

$$= \omega / 90^\circ$$

$$N = \omega \quad \phi = 90^\circ$$

$$\omega \to 0 \quad N \to 0 \quad \phi = 90^\circ$$

$$\omega \to \infty \quad N \to \infty \quad \phi = 90^\circ$$

$\phi$: fixed at $90^\circ$

N: represents distance from origin

$$T(s) = s^2$$

$$T(j\omega) = (j\omega)^2 = -\omega^2 \quad \begin{array}{c} Re: -\omega^2 \\ \hat{L}_m: 0 \end{array}$$

$$= \omega^2 / 180^\circ$$

$$M = \omega^2 \quad \phi = 180^\circ$$

$$\begin{array}{l} \omega \to 0 \quad M \to 0 \quad \phi = 180^\circ \\ \omega \to \infty \quad M \to \infty \quad \phi = 180^\circ \end{array}$$

$$\begin{array}{l} \phi: \text{fixed at } 180^\circ \\ (-ve \text{ real axis}) \end{array}$$

$$\text{as } \omega \uparrow, \quad M \uparrow$$

$$\text{distance from origin } \uparrow$$

![img-2.jpeg](img-2.jpeg)

$$T(s) = s + 5$$

$$T(j\omega) = j\omega + 5 \quad \begin{cases} Re: 5 \\ \hat{I}_m: \omega \end{cases}$$

$$Re(T) = 5 = const$$

$$\hat{I}_m(T) = \omega \quad increases \ as$$

$$\omega \ goes \ from \ 0 \ to \ \omega$$

$$\omega \to 0 \quad T(j\omega) = 5 + j0$$

$$\omega \to \infty \quad T(j\omega) = 5 + j\infty$$

![img-3.jpeg](img-3.jpeg)

NOTE- whenever magnitude is $\infty$ either at $T(j0^{+})$ +or $T(j\infty^{+})$ then the point cannot be always located exactly in T(s) plane. For exact location, Rationalization is used.

$\rightarrow$ determining real & imaginary parts separately.

# First Order TF

**
SN

$$G(s)H(s) = \frac{1}{(1+sT)} : \text{type-0 order -1}$$

$$GH(j\omega) = \frac{1}{1+j\omega T}$$
$$= \frac{1}{\sqrt{1+\omega^2 T^2}} \angle -\tan^{-1} \omega T$$

$$M = \frac{1}{\sqrt{1+\omega^2 T^2}} \quad \phi = -\tan^{-1} \omega T$$

|  tail | ω | M | φ  |
| --- | --- | --- | --- |
|   | 0 | 1 | 0°  |
|  ωT=1 | 1/T | 1/√2 | -45°  |
|   | ∞ | 0 | -90°  |

![img-4.jpeg](img-4.jpeg)

# Addition of a pole

$$\begin{array}{c} \text{**}_{SN} \end{array}$$

$$G(s)H(s) = \frac{1}{s(1+sT)} : \text{type-1 order -2}$$

$$\begin{array}{l} G(j\omega)H(j\omega) = \frac{1}{j\omega(1+j\omega T)} \\ = \frac{-j(1-j\omega T)}{\omega(1+j\omega T)(1-j\omega T)} \\ = \frac{-j-\omega T}{\omega(1+\omega^2 T^2)} \\ = \frac{-T}{1+\omega^2 T^2} - \frac{j}{\omega(1+\omega^2 T^2)} \end{array}$$

$$M = \frac{1}{\omega\sqrt{1+\omega^2 T^2}} \quad \phi = -90^\circ - \tan^{-1}\omega T$$

|  ω | M | φ  |
| --- | --- | --- |
|  0 | ∞ | -90°  |
|  1/T | 1/√2 | -135°  |
|  ∞ | 0 | -180°  |

at ω → 0

$$Re = -T$$

$$Im = -\infty$$

there is a shift of

-90° in both head

& tail

both head & tail

rotate CW by 90°

![img-5.jpeg](img-5.jpeg)

.

# Addition of a pole

**

$$G(s)H(s) = \frac{1}{(1 + sT_1)(1 + sT_2)}$$

pole added to type-0/order-1
system but not at origin

$$GH(j\omega) = \frac{1}{(1+j\omega T_1)(1+j\omega T_2)}$$

$$M = \frac{1}{\sqrt{1+\omega^2 T_1^2} \sqrt{1+\omega^2 T_2^2}}$$

$$\phi = -\tan^{-1}\omega T_1 - \tan^{-1}\omega T_2$$

![img-6.jpeg](img-6.jpeg)

# Addition of a pole

$$G(s)H(s) = \frac{1}{(1 + sT_1)(1 + sT_2)}$$

**SN**

When a pole at origin is added st to GH, head & tail of polar plot both rotate by 90° in CW dirⁿ

- When a pole is added away from origin, only head rotates by 90° in Cw dir ⁿ.

# General shapes

$$G(s)H(s) = \frac{1}{1 + sT}$$

![img-7.jpeg](img-7.jpeg)

$$G(s)H(s) = \frac{1}{(1 + sT_1)(1 + sT_2)}$$

![img-8.jpeg](img-8.jpeg)

# General shapes

$$G(s)H(s) = \frac{1}{(1 + sT_1)(1 + sT_2)(1 + sT_3)} G(s)H(s) \frac{1}{(1 + sT_1)(1 + sT_2)(1 + sT_3)(1 + sT_4)}$$

one more pole added away

from origin

head moves to origin along -360° line

![img-9.jpeg](img-9.jpeg)

![img-10.jpeg](img-10.jpeg)

# General shapes

$$G(s)H(s) = \frac{1}{s}$$

$$GH(j\omega) = \frac{1}{j\omega} = \frac{1}{\omega} \angle -90^\circ$$

$$M = \frac{1}{\omega} \quad \phi = -90^\circ : fixed$$

$$\omega \to 0 \quad M \to \infty$$

$$\omega \to \infty \quad M \to 0$$

![img-11.jpeg](img-11.jpeg)

![img-12.jpeg](img-12.jpeg)

# General shapes

$$G(s)H(s) = \frac{1}{s(1 + sT_1)(1 + sT_2)}$$

$$G(s)H(s) = \frac{1}{s(1 + sT_1)(1 + sT_2)(1 + sT_3)}$$

pole added away from origin

one more pole added away from origin

![img-13.jpeg](img-13.jpeg)

![img-14.jpeg](img-14.jpeg)

# General shapes

$$G(s)H(s) = \frac{1}{s^2}$$
$$GH(j\omega) = \frac{1}{(j\omega)^2} = \frac{1}{\omega^2} \angle -180^\circ$$
$$\phi = -180^\circ : fixed$$

![img-15.jpeg](img-15.jpeg)

$$\omega \to 0 \quad M \to \infty \quad \omega \to \infty \quad M \to 0$$

$$\begin{array}{c} -180^\circ \\ \downarrow \\ \omega \to 0 \end{array} \quad \begin{array}{c} \omega \to \infty \\ \uparrow \\ \omega \to \infty \end{array} \quad \begin{array}{c} \uparrow \\ \text{Re(GH)} \end{array}$$

1 pole at origin added to
$$G(s)H(s) = \frac{1}{s^2(1+sT)}$$

# General shapes

$$G(s)H(s) = \frac{1}{s^2(1 + sT_1)(1 + sT_2)}$$

pole added away from origin

![img-16.jpeg](img-16.jpeg)

$$GH(j\omega) = 1/(j\omega)^3 = 1/\omega^2 \angle -270^\circ$$

$$G(s)H(s) = \frac{1}{s^3}$$

![img-17.jpeg](img-17.jpeg)

# General shapes

$$G(s)H(s) = \frac{1}{s^3(1 + sT)}$$

1 pole at origin added to $$\frac{1}{s^2(1+sT)}$$

![img-18.jpeg](img-18.jpeg)

# General shapes

$$G(s)H(s) = \frac{1}{s^4} = \frac{1}{(j\omega)^4} = \frac{1}{\omega^4} \angle 0^\circ$$

$$\omega \to 0 \quad M \to \infty$$

$$\omega \to \infty \quad M \to 0$$

![img-19.jpeg](img-19.jpeg)

# Type -01 , order- 03

$$G(s)H(s) = \frac{1}{s(1 + sT_1)(1 + sT_2)}$$

$$GH(j\omega) = \frac{1}{j\omega(1 + j\omega T_1)(1 + j\omega T_2)}$$

$$M = \frac{1}{\omega \sqrt{1 + \omega^2 T_1^2} \sqrt{1 + \omega^2 T_2^2}}$$

$$\phi = -90^\circ - \tan^{-1} \omega T_1 - \tan^{-1} \omega T_2$$

intersection of polar plot with
-ve real axis

$$\phi = -180$$

$$-180 = -90 - \tan^{-1} \omega T_1 - \tan^{-1} \omega T_2$$

$$\tan^{-1} \omega T_2 = 90 - \tan^{-1} \omega T_1$$

$$\omega T_2 = \tan(90 - \tan^{-1} \omega T_1)$$

$$= \frac{1}{\tan(\tan^{-1} \omega T_1)} = 1/\omega T_1$$

$$\omega^2 = \frac{1}{T_1 T_2} \quad \omega = \frac{1}{\sqrt{T_1 T_2}}$$

phase cross over freq.

corner freq: $\frac{1}{T_1}$ & $\frac{1}{T_2}$

phase cross over freq = $\frac{1}{\sqrt{T_1 T_2}}$
= GM of corner freq.

magnitude at this freq.

$$M = \frac{1}{\omega \sqrt{1 + \omega^2 T_1^2} \sqrt{1 + \omega^2 T_2^2}}$$
$$= \frac{\sqrt{T_1 T_2}}{\sqrt{1 + T_1/T_2} \sqrt{1 + T_2/T_1}} = \frac{T_1 T_2}{(T_1 + T_2)}$$

asymptote

$$GH(j\omega) = \frac{-j(1 - j\omega T_1)(1 - j\omega T_2)}{\omega(1 + \omega^2 T_1^2)(1 + \omega^2 T_2^2)}$$
$$= \frac{-j(1 - \omega^2 T_1 T_2) - j\omega(T_1 + T_2)}{\omega(1 + \omega^2 T_1^2)(1 + \omega^2 T_2^2)}$$
$$= \frac{-j(1 - \omega^2 T_1 T_2)}{\omega(1 + \omega^2 T_1^2)(1 + \omega^2 T_2^2)}$$
$$- \frac{(T_1 + T_2)}{(1 + \omega^2 T_1^2)(1 + \omega^2 T_2^2)}$$

at $\omega \to 0$
$Re = -T_1 + T_2$
$Im = -\infty$

![img-20.jpeg](img-20.jpeg)

$$\frac{1}{s(1+st_1)(1+st_2)}$$

$$\uparrow \hat{L}_m(GH)$$

$$\begin{array}{c} \text{**} \\ \text{SN} \end{array}$$

$$-(T_1+T_2)$$

$$\omega = \frac{1}{\sqrt{T_1 T_2}}$$

$$\frac{T_1 T_2}{T_1 + T_2}$$

$$\rightarrow Re(GH)$$

**
SN

o angle of tail = -90° (type of system)

o angle of head = -90° (P - Z)

(ω → ∞)

![img-21.jpeg](img-21.jpeg)

every pole every zero
contributes contributes
an angle of an angle of
-90° 90°

# Question-01

Sketch the polar plot for the transfer function given below

$$G(s) = \frac{1}{s^2(s+1)(2s+1)}$$

Type-02/order-4

angle of tail = -90 x type

$$= -180^\circ$$

angle of head = -90° x (P-Z)

$$= -90 (4-0)$$

$$= -360^\circ$$

![img-22.jpeg](img-22.jpeg)

# Question-02

$$M = \frac{\sqrt{4+\omega^2}}{\sqrt{1+\omega^2}\sqrt{16+\omega^2}} \quad \phi = \tan^{-1}\omega/2 \\ -\tan^{-1}\omega - \tan^{-1}\omega/4$$

Sketch the polar plot for the transfer function given below

$$G(s) = \frac{s+2}{(s+1)(s+4)}$$

angle of tail = $-90^\circ \times \text{type}$
$= 0^\circ$

angle of head = $-90^\circ \times (P-2)$
$= -90^\circ (2-1)$
$= -90^\circ$

$$G(j\omega) = \frac{(2+j\omega)}{(1+j\omega)(4+j\omega)}$$

![img-23.jpeg](img-23.jpeg)

We can check if plot cuts

-jw axis

at -ve img axis $\phi = -90$

$$-90 = \tan^{-1}w/2 - \tan^{-1}w/1 - \tan^{-1}w/y$$

$$90 + \tan^{-1}\frac{w}{2} = \tan^{-1}w + \tan^{-1}w/y$$

$$90 + \tan^{-1}\frac{w}{2} = \tan^{-1}\left(\frac{w+w/y}{1-w^2/y}\right)$$

$$-\cot(\tan^{-1}w/2) = \frac{5w/y}{1-w^2/y}$$
$$-2/w = \frac{5w/y}{1-w^2/y}$$

$$-2(4-w^2) = 5w^2$$

$$3w^2 = -8 \quad w: img.$$

$\therefore$ such $w$ does not exist

$\therefore$ graph does not intersect

-jw axis.

# Question-03

Figure shows the polar plot of a system. The transfer function of the system is

(a) 5(1 + 0.1 s)

(c) 5(1 + 10 s)

(b)(1+0.5 s)

(d) 5(1 + s)

at ω→0 Re = 5 Im→0

at ω→10 angle = 45°
Re = Im

5(1+0.1s)

5(1+0.1jω)

ω→0 5
ω=10 5(1+j) Re=Im

![img-24.jpeg](img-24.jpeg)

# Question-04

$$G(j\omega) = \frac{1 + j4\omega}{(j\omega)^2(1+j\omega)(1+j2\omega)} \rightarrow M = \frac{\sqrt{1+16\omega^2}}{\omega^2\sqrt{1+\omega^2}\sqrt{1+4\omega^2}}$$
$$\rightarrow \phi = \tan^{-1}4\omega - 180$$
$$- \tan^{-1}\omega - \tan^{-1}2\omega$$

Sketch the polar plot for the transfer function given below

$$G(s) = \frac{4s+1}{s^2(s+1)(2s+1)}$$

angle of tail = -90 x type

$$\begin{array}{l} = -90 \times 2 \\ = -180^\circ \end{array}$$

angle of head = -90(P-Z)

$$\begin{array}{l} = -90(4-1) \\ = -270^\circ \end{array}$$

intersection of curve with -ve real axis

$$\phi = -180$$

$$-180 = \tan^{-1}4\omega - 180 - \tan^{-1}\omega - \tan^{-1}2\omega$$

$$\begin{array}{l} \tan^{-1}4\omega = \tan^{-1}\omega + \tan^{-1}2\omega \\ = \tan^{-1}\frac{(\omega+2\omega)}{(1-2\omega^2)} \end{array}$$

$$4\omega = 3\omega / 1 - 2\omega^2$$

$$\omega = 0$$

$$4(1-2\omega^2) = 3$$

$$8\omega^2 = 1$$

$$\omega = \frac{1}{2}\sqrt{2} \leftarrow \text{phase cross over freq.}$$

cuts -ve real axis once at

$$\omega = \frac{1}{2}\sqrt{2}$$

|  ω | M | φ  |
| --- | --- | --- |
|  0 | ω | -180  |
|  ω | 0 | -270  |

![img-25.jpeg](img-25.jpeg)

# Mapping

each value of x is mapped to a particular value of y.

Both x & y can be individually plotted on a number line

$$f(x) = \sin x$$

![img-26.jpeg](img-26.jpeg)

![img-27.jpeg](img-27.jpeg)

# Mapping Between Rectangular Plane and Polar Plane

each value of x is mapped to a particular value of y.

Both x & y can be individually plotted on a number line

![img-28.jpeg](img-28.jpeg)

# Mapping

each value of x is mapped to a particular value of y.

Both x & y can be individually plotted on a number line

![img-29.jpeg](img-29.jpeg)

# Mapping Between Rectangular Plane and Complex Plane

• polar plot is mapping of f_m axis in s-plane to G(s)H(s) plane.

![img-30.jpeg](img-30.jpeg)

NOTE: "In this chapter mapping between Rectangular plane and polar has to be performed under predefined condition."

# Example-01

![img-31.jpeg](img-31.jpeg)

s-plane → closed curve in s-plane or Contour in s-plane or specified Region in s-plane

$$Q(s) = \frac{1}{s+2}$$

|  Point | S | Q(s)  |
| --- | --- | --- |
|  A | $$S = -4 + j$$ | $$-0.4 - j0.2$$  |
|  B | $$S = -2 + j$$ | $$-j$$  |
|  C | $$S = -1 + j$$ | $$0.5 - j0.5$$  |
|  D | $$S = -1 + j0$$ | $$1$$  |
|  E | $$S = -1 - j$$ | $$0.5 + j0.5$$  |
|  F | $$S = -2 - j$$ | $$j$$  |
|  G | $$S = -4 - j$$ | $$-0.4 + j0.2$$  |
|  H | $$S = -4$$ | $$-0.5$$  |
|  A | $$S = -4 + j$$ | $$-0.4 - j0.2$$  |

$$\frac{1}{-4+j+2} = -0.4 - j0.2$$
$$\frac{1}{-2+j+2} = -j$$

if we take $$s^*$$ in place of s
we get $$(Q(s))^*$$

**
SN

![img-32.jpeg](img-32.jpeg)

# Example -02

![img-33.jpeg](img-33.jpeg)

|  s | Q(s)  |
| --- | --- |
|  -2+j | -0.5-j 0.5  |
|  j | 0.5-j 0.5  |
|  0 | 1  |
|  -j | 0.5+j 0.5  |
|  -2-j | -0.5+j 0.5  |
|  -2 | -1  |

![img-34.jpeg](img-34.jpeg)

![img-35.jpeg](img-35.jpeg)

# Example -03

![img-36.jpeg](img-36.jpeg)

$$Q(s) = (s + 1)$$

Zero at s = -1

Zero inside

contour in

s-plane

![img-37.jpeg](img-37.jpeg)

**
SN

![img-38.jpeg](img-38.jpeg)

# Important observations

**
SN

1. Contour in s plane contains the m poles of Q(s) strictly inside it.

- Q(s) plot in Q(s) plane will encircle the origin (0,0)m times in opposite Sense

2. If the contour in s plane passes through one or more poles of Q(s) → Q(s)

- plot in the Q(s) plane remains an open curve, Hence the concept of encirclement is Invalid.

3. Contour in s plane contains the n zeroes of Q(s) strictly inside it.

- Q(s) plot in Q(s) plane will encircle the origin (0,0)n times in same sense

# Rule of Mapping from s plane to Q (s) Plane

** SN

#Rule of Mapping from S plane to Q(s) plane:

$$Q(s) = \frac{N(s)}{D(s)} \rightarrow P_C, Z_C$$

$$N = P_C - Z_C$$

$P_C =$ no. of poles of T.F. Q(s) inside C

$Z_C =$ no. of poles of T.F. Q(s) inside C

N = no. of encirclement of origin by Q(s) plot:

N = +ve if C and Q(c) are in opposite direction as contour
-ve if C and Q(c) are in same direction as contour

## Rule of Mapping from s plane to Q (s) Plane

### Limitation of Above Rule:

1) Pole of TF Q(s) should not lie on boundary of s plane contour.
2) Zero of TF Q(s) should not lie on boundary of s plane contour.

# Points to remember

# 1. Principle of Arguments:

$$Q(s) = \frac{N(s)}{D(s)}$$

If the contour in the $s$ plane contains $p$ poles and $z$ zeros inside it then $Q(s)$ plot in $Q(s)$ plane:

$P > Z$: $Q(s)$ plot in $Q(s)$ plane will encircle the origin $(0,0)(P - Z)$ times in the direction opposite to the contour in $S$ plane

![img-39.jpeg](img-39.jpeg)

if $Z > P$: $\mathcal{Q}(s)$ plot in $\mathcal{Q}(s)$ plane will encircle origin $(0, 0)$
$(Z - P)$ times in same dir$^n$ as contour in
s-plane.

eg: 1 pole of $\mathcal{Q}(s)$ inside $C$ but no zeroes

$$N = 1 - 0 = 1$$

1 encirclement of origin in $\mathcal{Q}(s)$ plane in
opp. sense.

if $C$ is CW, origin is encircled in ACW dir$^n$

# Relation Between Plot in Q(s) Plane

# Case -01

$Q(s)$ plot in $Q(s)$ plane is given plot: $KQ(s)$ plot in $KQ(s)$ plane

![img-40.jpeg](img-40.jpeg)

![img-41.jpeg](img-41.jpeg)

when Q(s) becomes KQ(s)

all points on the plot get

multiplied by K

![img-42.jpeg](img-42.jpeg)

# Case -02

Given: Q(s) plot in Q(s) plane

Plot: -Q(s) plot in -Q(s) plane.

by taking -Q(s), all points on

plot get multiplied by - sign.

when imag. part of a complex no. is multiplied by we take mirror image about real axis.
when real part becomes -ve we take mirror image about \(\hat{I}m\) axis.

![img-43.jpeg](img-43.jpeg)

when Q(s) is multiplied by
- sign then all points
are reflected to opp quad
or curve rotates ACW by
180°

graph is symmetric about

real as well as imag axis

& hence taking reflection

about any of these

axis does not impact

the graph.

![img-44.jpeg](img-44.jpeg)

# Case -03

Given: Q(s) plot in Q(s) plane

Plot: $Ke^{j\theta}Q(s)$ plot in $Ke^{j\theta}Q(s)$ plane.

constant K increases magnitude
of all points by a factor
of K.

multiplication by $e^{j\theta}$ rotates the
graph by $\theta$ in same sense as
original graph.

![img-45.jpeg](img-45.jpeg)

Im(ked°9(s))

Re(ked°9(s))

## Case -04

Given: Q(s) plot in Q(s) plane

Plot: 1 + Q(s) plot in 1 + Q(s) plane.

all points obtained for Q(s) using contour in s plane are added to 1 i.e. real value.

$$\therefore eg: \begin{array}{c} \frac{1+j}{2} \rightarrow \frac{3}{2} + \frac{j}{2} \\ -1 \rightarrow 0 \\ 1 \rightarrow 2 \end{array}$$

etc.

- whenever a real no. is added to a complex no., the complex no. shifts right or left

- when imaginary no. is added to a complex no. the complex no. shifts up or down.

- all no. have 1 added to them the curve shifts right by 1

![img-46.jpeg](img-46.jpeg)

EXAMID

# **Important Observation:**

** SN

If Q(s) plot in Q(s) is known for some contour in S plane.

$$Q_1(s) = (r_0 e^{j\theta_0})Q(s)$$

Then Q₂(s) plot in Q₁(s) plane for same contour will

(i) Have same sense of rotation.
(ii) Encirclement of origin does not change.
(iii) Plot of \( Q_{1}(s) \) is rotated by \( \theta_0 \) in same sense of rotation & scaled by \( r_0 \)

# Summary

- Mapping from s-plane to Q(s) plane

N = P - Z : encirclement of origin

N > 0 : encirclement of origin in opposite direction to contour in S-plane

N < 0 : encirclement of origin in same direction to contour in S-plane

P = no. of poles inside contour

Z = no. of zeroes inside contour

# Points to remember

**
SN

# P < Z → Q(s) plot in Q(s) plane encircle the origin (0,0)(Z - P) times in the same direction as contour in s plane

# P = Z → Q(s) plot in Q(s) plane does not encircle the origin

# P > Z → Q(s) plot in Q(s) plane encircle the origin (P-Z) times in opposite direction as contour in s-plane.

# Observations

**sN

Given Plot

Q(s) plot → -Q(s) plot → 180° Rotation in same sense

Q(s) plot → {1 + Q(s)} plot → Shift by 1 unit rightward

Q(s) plot → {Q(s) - 1} plot → Shift by 1 unit leftwards

Q(s) + K
K ∈ real
K > 0 : right shift by K units
K < 0 : left shift by K units

# Mapping of s-plane

# Summary

If contour in s-plane CW

- One pole of GH inside contour → one ACW encirclement of origin in GH plane
- One zero of GH inside contour → One CW encirclement of origin in GH plane

# Points to remember

# 2. Rule of Mapping:

(i) It is applicable to T.F. $$\rightarrow Q(s) = \frac{N(s)}{D(s)} N = P_c - Z_c$$

$$P_c$$ = No. of poles of Q(s) lying in side contour in s plane

$$Z_c$$ = No. of zeros of Q(s) lying inside contour in s plane

N = no. of encirclement of (0,0)

N $$\begin{cases}$$ +ve: sense of s and Q(s) opposite
-ve: sense of s and Q(s) is same

# Points to remember

** SN

3. T.F.: $$Q(s) = \frac{N(s) \rightarrow \text{zeros}}{D(s) \rightarrow \text{poles}}$$

T.F.: $$A + BQ(s) = A + \frac{BN(s)}{D(s)} = \frac{AD(s) + BN(s)}{D(s)}$$

poles of T.F. Q(s) and poles of $$A + BQ(s)$$ will be same

denominator is same

# **Points to remember**

**
S N

4) If $A + BQ(s)$ plot, encircles origin in $A + BQ(s)$ plane then:

$$A + BQ(s) = 0$$

$$Q(s) = -A/B$$

or $Q(s)$ plot in $Q(s)$ plane will encircle $(-A/B, 0)$ in $Q(s)$ plane.

![img-47.jpeg](img-47.jpeg)

point corresponding to origin
in (1+2 Q(s)) plane

# Points to remember (Nyquist)

** SN

Rule of mapping for nyquist N = Pc - Zc → T.F.

N = no. of encirclement of (0,0) by G(s)H(s) plot in G(s)H(s) plane.

N = +ve → N: ACW (opp. to contour)

N = -ve → N: CW (same dern as contour)

![img-48.jpeg](img-48.jpeg)

Pc = no. of poles of G(s)H(s) lying inside C=No. of poles of G(s)H(s) lying in R.H.P.

Zc = no. of zeros of T0 F0G(s)H(s) lying inside C = No. of zeros of T.F. G(s)H(s) lying in RHP

**

CASE 1: N.S.C. for G(s)H(s) = $$\frac{N(s)}{D(s)}$$

N = no. of encirclement of (0,0) by G(s)H(s) plot in G(s)H(s) plane

P+ = no. of poles of T.F. G(s)H(s) lying strictly in RHP

Z+ = no. of zeros of T.F. G(s)H(s) lying strictly in R.H.P.

![img-49.jpeg](img-49.jpeg)

$$N = P_+ - Z_+$$

$$N = \begin{cases} N > 0 & \text{ACW encirclement} \\ & \text{of origin} \\ N < 0 & \text{CW encirclement} \\ & \text{of origin} \end{cases}$$

**
SN

• for closed loop stability
we check no. of poles of CLTF
in RHP
i.e. roots of CE  $1+G(s)H(s)=0$
lying in RHP

∴ zeroes of  $1+G(s)H(s)$ =
closed loop poles.

$$CLTF: T(s) = \frac{G(s)}{1+G(s)H(s)}$$

poles:  $\text{deno}^r = 0$   $1+G(s)H(s) = 0$

* poles or  $\text{deno}^r$  of  $1+G(s)H(s)$
is same as  $\text{deno}^r$  of  $G(s)H(s)$

∴ poles of  $1+G(s)H(s)$
= poles of  $G(s)H(s)$

or open loop poles

eg. $G(s)H(s) = \frac{s+2}{s+5}$

OL pole: -5

OL zero: -2

$1 + G(s)H(s) = 1 + \frac{s+2}{s+5} = \frac{2s+7}{s+5}$

pole: $s = -5$ same as OL pole

zero: $2s + 7 = 0$ $s = -3.5$

represents a closed

loop poles.

Case 2: N.S.C. for T.F. 1 + G(s)H(s)

N = no. of encirclement of (0,0) by 1 + G(s)H(s)

Plot in (1 + G(s)H(s)) plane. 1 + G(s)H(s) = 0

or G(s)H(s) = -1

No. of encirclement of (-1,0) by G(s)H(s) plot in G(s)H(s) plane.

N = + ve N: ACW
N = -ve N: CW
nyquist contour: CW
N = P+ - Z+

P+ = no. poles of T.F. 1 + G(s)H(s) lying strictly in RHP or no. of poles of T.F.

G(s)H(s) lying strictly in RHP

Z+ = no. of zeros of T.F. 1 + G(s)H(s)

lying strictly in RHP or no. of poles of C.L.T.F. lying strictly in R.H.P.

• open loop system is stable if P+ = 0 (open loop pole in RHP)

• closed loop system is stable if Z+ = 0 (closed loop pole in RHP)

if Z+ = 0

N = P+ ≥ 0

(-1,0) point is encircled by nyquist plot

in ACW dirⁿ as many times as there

are OL poles in RHP.

• if N < 0 Z+ > P+

CL system is unstable

→ no. of encirclement of (-1,0)

• if N = 0 Z+ = P+

CL system is stable iff

Z+ = P+ = 0

no OL pole in RHP

## Question-01

Encirclement of origin of 1 + G(s) plane corresponds to encirclement of a point in the -1 + G(s) plane, given by

(a) 1 + j0

(b) -1 + j0

(c) 0 + j0

(d) -2 + j0

$$1 + G(s) = 0 \leftarrow \text{origin of } 1 + G(s)$$

$$G(s) = -1$$

$$\therefore -1 + G(s) = -1 + (-1) = -2$$

# Question-02

Find the number of origin encirclement in G(s)H(s) plane the if the following contour in s-plane are mapped to G(s)H(s) plane.

![img-50.jpeg](img-50.jpeg)

$$G(s)H(s) = \frac{1}{(s+2)(s+0.5)}$$

one pole lies inside contour (ACW)
pole gives encirclement of origin opp.
to contour
one encirclement in CW dir

# Question-03

Q.3. Find the number of origin encirclement in G(s)H(s) plane the if the following contour in s-plane are mapped to G(s)H(s) plane.

![img-51.jpeg](img-51.jpeg)

$$G(s)H(s) = \frac{1}{(s+2)(s+0.5)} \quad \leftarrow \text{poles: } -2, -0.5$$

contour : CW

2 poles inside contour

∴ 2 encirclement of origin
opp. to contour ie ACW

# Question-04

Find the number of origin encirclement in G(s)H(s) plane the if the following contours in s-plane are mapped to G(s)H(s) plane.

![img-52.jpeg](img-52.jpeg)

G(s)H(s) = (s + 2)(s + 0.5)

Contour: CW

2 zeroes inside contour

2 encirclement of origin in same sense as contour i.e. CW

# Question-05

Find the number of origin encirclement in G(s)H(s) plane the if the following contours in s-plane are mapped to G(s)H(s) plane.

![img-53.jpeg](img-53.jpeg)

G(s)H(s) = (s + 2)(s + 0.5)

no poles or zeroes inside

contour

∴ no encirclement of

origin.

# Question-06

The number and direction of encirclements around the point $(-1, 0)$ in the complex plane by the Nyquist plot of $G(s) = \frac{1-s}{4-2s}$ is

(a) Zero

(c) One, clockwise

OL pole: $4-2s = 0$ $s=2$

one OL pole in RHP

$1 + G(s) = 0$

$1 + \frac{(1-s)}{4-2s} = 0$ $\frac{5-3s}{4-2s} = 0$

(b) One, anti-clockwise

(d) Two, clockwise

$5-3s = 0$
$s = 5/3$ one CL pole in RHP

$N = P_+ - Z_+$
$= 1 - 1$
$= 0$

# Question-07

The number of times the Nyquist of will encircle the origin clockwise is...

$$G(s) = \frac{s-1}{s+1}$$

NSC for OL system

pole: s=-1 no OL pole in RHP (P)

zero: s=1 1 zero in RHP (Z)

$$N = P - Z = 0 - 1 = -1$$

N<0 CW encirclement (same as contour)

1 CW encirclement

# Question-08

If the s-plane contours enclose 3-zeros and 2-poles contour will encircle the origin of q (s) plane

(a) Once in clockwise direction

(b) Once in counter clockwise direction
(c) Thrice in clockwise direction
(d) Twice in counter clockwise direction

$$N = P - Z = 2 - 3 = -1 < 0$$

N < 0 same as contour (CW)

# Question-09

HW

Loop transfer function of a feedback system is $$G(s) = \frac{s+3}{s^2(s-3)}$$

Take the Nyquist contour in the clockwise direction. Then, the Nyquist plot of

G(s)H(s) encircles $$-1 + j0$$

(a) Once in clockwise direction
(c) Once in anticlockwise direction

(b) Twice in clockwise direction
(d) Twice in anticlockwise direction

# Question-10

HW

A unity feedback system has the open loop transfer function

$$G(s) = \frac{1}{(s-1)(s-2)(s+3)}$$

The Nyquist plot of G encircles the origin

(a) Never

(b) Once

(d) Twice

(d) Thrice

# Nyquist Contour

→ Closed path in s-plane that encloses the entire right half s-plane
→ When nyquist contour is mapped to G(s)H(s) plane then it becomes nyquist plot

![img-54.jpeg](img-54.jpeg)

o value of 's' lying on the boundary of
nyquist contour must be substituted
in G(s)H(s) to obtain value lying on
Nyquist Plot.

Nyquist contour
s-plane
$$\xrightarrow{G(s)H(s)}$$
Nyquist Plot-
G(s)H(s) plane

# Mapping of Nyquist Contour

**
SN

Curve 1: $$s = j\omega$$

$$\omega$$ varies from $$0^+ \to \infty$$: polar plot

Curve 2: $$s = -j\omega$$ $$\leftarrow$$ conjugate of $$j\omega$$

\(\rightarrow\) value of \(\mathrm{G(s)H(s)}\) is conjugate of the value obtained in curve - 1
\(\rightarrow\) we get mirror image of polar plot about real axis
\(\rightarrow\) Inverse polar plot

• Nyquist contour
cannot pass through
origin if there
are poles of G(s)H(s)
at origin.

![img-55.jpeg](img-55.jpeg)

# Mapping of Nyquist Contour

** SN

Curve 3: CW infinite semicircle

$$s = \lim_{R \to \infty} Re^{i\theta}$$

$$\theta: \pi/2 \text{ to } -\pi/2 \text{ rad}$$

$$90^\circ \text{ to } -90^\circ \text{ deg}$$

Curve 4: ACW small SC

only when there is a pole at

origin

$$s = \lim_{r \to 0} re^{i\theta}$$

$$\theta: -\pi/2 \text{ to } \pi/2 \text{ rad}$$

$$-90 \text{ to } 90^\circ$$

# Inverse Polar Plot

In Polar plot, $s = j\omega$

Inverse polar plot, $s = -j\omega \rightarrow$ conjugate of the polar plot

![img-56.jpeg](img-56.jpeg)

$$G(s)H(s) = \frac{1}{s(1+sT_1)(1+sT_2)} \leftarrow \text{Type-01/Order-03}$$

Polar Plot: $\frac{1}{j\omega(1+j\omega T_1)(1+j\omega T_2)}$

Inverse PP: $\frac{1}{-j\omega(1-j\omega T_1)(1-j\omega T_2)}$

Conjugate mirror image about Real axis

# Type of Nyquist Contour

To judge stability, we need to determine no. of poles in RHP so the Nyquist contour in the s-plane must encircle the entire right half plane. Must not pass through any pole.

![img-57.jpeg](img-57.jpeg)

# Type of Nyquist Contour

**SN

Nyquist contour should never pass through any pole of G(s)H(s)

$$G(s)H(s) = \frac{1}{1 + sT}$$

![img-58.jpeg](img-58.jpeg)

# Mapping of Nyquist Contour

$$G(s)H(s) = \frac{1}{s(1 + sT)}$$

** SN

$$G(s)H(s) = \frac{1}{s^2 + a^2}$$

![img-59.jpeg](img-59.jpeg)

![img-60.jpeg](img-60.jpeg)

# Question-01

due to (s-2) term

direct formula of $\angle tail$ & $\angle head$ is not applicable

$$G(s)H(s) = \frac{K(s+1)}{(s+0.5)(s-2)} \quad 0 < K < \infty \text{ Draw Nyquist Plot.}$$

Step-1: polar plot

$$s = j\omega$$

$$G(j\omega)H(j\omega) = \frac{K(1+j\omega)}{(0.5+j\omega)(-2+j\omega)}$$

$$M = \frac{K\sqrt{1+\omega^2}}{(\sqrt{0.25+\omega^2})(\sqrt{4+\omega^2})}$$

$$\begin{aligned} \phi &= \tan^{-1}\omega - \tan^{-1}\omega/0.5 - (180 - \tan^{-1}\omega/2) \\ &= -180 + \tan^{-1}\omega + \tan^{-1}\omega/2 - \tan^{-1}2\omega \end{aligned}$$

|  ω | M | φ  |
| --- | --- | --- |
|  0 | K | -180  |
|  ∞ | 0 | -90  | ← tail<br/>← head</table>

phase cross over freq.

$$\phi = -180$$

$$-180 = -180 + \tan^{-1} \omega + \tan^{-1} \omega / 2$$
$$- \tan^{-1} 2\omega$$

![img-61.jpeg](img-61.jpeg)

$$\tan^{-1} \left( \frac{\omega + \omega / 2}{1 - \omega^2 / 2} \right) = \tan^{-1} 2\omega$$

$$\frac{3\omega}{2 - \omega^2} = 2\phi$$

$$3 = 4 - 2\omega^2$$

$$2\omega^2 = 1$$

$$\omega = 1/\sqrt{2}$$

Since $$\omega =$$ finite for $$\phi = -180^\circ$$

$$\therefore$$ polar plot cuts $$-180^\circ$$ axis

no poles of $$G(s)H(s)$$ at origin

curve-3: $$S = \lim_{R \to \infty} Re^{j\theta}$$

$$\theta : +90 \text{ to } -90$$

$$G(s)H(s) = \lim_{R \to \infty} \frac{K(Re^{j\theta} + 1)}{(Re^{j\theta} + 0.5)(Re^{j\theta} - 2)}$$

$$= \lim_{R \to \infty} \frac{K Re^{j\theta}}{R^2 e^{j2\theta}}$$
$$= \lim_{R \to \infty} K/R e^{-j\theta}$$

equation of $$\delta C$$: radius: $$K/R \to 0$$

angle: $$-\theta$$ : $$-90$$ to $$90$$ (ACW)

## Question-01

$$G(s)H(s) = \frac{K(s+1)}{(s+0.5)(s-2)} \quad 0 < K < \infty \text{ Draw Nyquist Plot.}$$

one pole in RHP

no zeroes in RHP

$$N = P - Z = 1 - O = 1$$

1 encirclement of origin
in ACW dir^n

![img-62.jpeg](img-62.jpeg)

![img-63.jpeg](img-63.jpeg)

![img-64.jpeg](img-64.jpeg)

## Question-02

Draw Nyquist Plot.  $G(s)H(s) = \frac{(1-s)}{(1+s)}$

$$G(j\omega)H(j\omega) = \frac{1-j\omega}{1+j\omega}$$

$$M = \frac{\sqrt{1+\omega^2}}{\sqrt{1+\omega^2}} = 1$$

$$\begin{aligned} \phi &= -\tan^{-1}\omega - \tan^{-1}\omega \\ &= -2\tan^{-1}\omega \end{aligned}$$

|  ω | M | φ  |
| --- | --- | --- |
|  0 | 1 | 0  |
|  ∞ | 1 | -180  |

![img-65.jpeg](img-65.jpeg)

curve-2: $$S = \lim_{R \to \infty} Re^{j\theta}$$

$$\theta: \pi/2 \text{ to } -\pi/2$$

$$G(s)H(s) = \lim_{R \to \infty} \frac{(1 - Re^{+j\theta})}{(1 + Re^{j\theta})}$$
$$= -1 \text{ (point)}$$

one zero lies in RHP

no pole in RHP

$$N = P - Z$$

$$= 0 - 1 = -1$$

1 CW encirclement of

origin

![img-66.jpeg](img-66.jpeg)

![img-67.jpeg](img-67.jpeg)

# Question-03

![img-68.jpeg](img-68.jpeg)

$$T(s) = \frac{1}{(1+ST_1)(1+ST_2)}$$ Draw Nyquist Plot.

$$T(\jmath\omega) = \frac{1}{(1+\jmath\omega T_1)(1+\jmath\omega T_2)}$$

polar plot is already known.

∴ there is no pole at origin

∴ no need to bypass origin in Nyquist contour.

curve-2: $s = \lim_{R \to \infty} Re^{j\theta}$

$\theta: \pi/2 \text{ to } -\pi/2 \text{ (CW)}$

$G(s)H(s) = \lim_{R \to \infty} \frac{1}{(1+Re^{j\theta}T_1)(1+Re^{j\theta}T_2)}$

$= \lim_{R \to \infty} \frac{1}{R^2 T_1 T_2} e^{j2\theta}$

$= \lim_{R \to 0} \frac{1}{R^2 T_1 T_2} e^{-j2\theta}$

circle of radius: $\frac{1}{R^2 T_1 T_2} \to 0$

angle: $-2\theta : -\pi$ to $\pi$ i.e. $2\pi$ angle
(ACW) complete circle

no poles or zeroes
in RHP

$N = P - Z = 0$

no encirclement

of origin

![img-69.jpeg](img-69.jpeg)

![img-70.jpeg](img-70.jpeg)

no encirclement
of origin

# Question-04

Type-2

nyquist plot will

contain 2 ∞ sc

or 1 ∞ circle

Draw the Nyquist Plot for the function

$$G(s)H(s) = \frac{1}{s^2}$$

$$GH(j\omega) = \frac{1}{(j\omega)^2} = 1/\omega^2 \angle -180^\circ$$

polar plot is already known

2 poles at origin ∴ we must
by pass origin in Nyquist
contour.

![img-71.jpeg](img-71.jpeg)

curve-2

$$S = \lim_{R \to \infty} Re d^\theta \quad \theta: \pi/2 \text{ to } -\pi/2 \text{ (CW)}$$

$$G(s) = \lim_{R \to \infty} \frac{1}{(Re d^\theta)^2}$$

$$= \lim_{R \to \infty} \frac{1}{R^2} e^{-j2\theta}$$

circle of radius: $$1/R^2 \to 0$$

angle: $$-2\theta$$: $$-180$$ to $$180$$

complete circle (ACW)

due to -ve sign before $$\theta$$

curve-4

$$S = \lim_{r \to 0} re d^\theta \quad \theta: -\pi/2 \text{ to } \pi/2 \text{ (ACW)}$$

$$G(s) = \lim_{r \to 0} \frac{1}{(re d^\theta)^2}$$

$$= \lim_{r \to 0} \frac{1}{r^2} e^{-j2\theta}$$

circle of radius: $$1/r^2 \to \infty$$

angle: $$-2\theta$$: $$180$$ to $$-180$$ (CW)

due to -ve sign
in $$-2\theta$$

**SN

![img-72.jpeg](img-72.jpeg)

due to pole at
origin we get
CW infinite SC

Im(GH)

no. of CW infinite
SC = type

**
IN

Re(GH)

## Question-05

Draw the Nyquist Plot for the function

$$G(s)H(s) = \frac{1}{1+sT} \leftarrow \text{Type-0/order-1}$$

$$G(j\omega)H(j\omega) = \frac{1}{1+j\omega T}$$

polar plot is already known
no poles at origin so no need
to by pass origin in Nyquist
contour.

![img-73.jpeg](img-73.jpeg)

curve-2: $\lim_{R \to \infty} Re^{i\theta}$ $\theta: \pi/2 \text{ to } -\pi/2$ (CW)

no poles or zeroes in RHP

$G(s)H(s) = \lim_{R \to \infty} \frac{1}{1 + RT e^{i\theta}}$
$= \lim_{R \to \infty} \frac{1}{RT} e^{-i\theta}$

no encirclement of origin

circle of radius $= 1/RT \to 0$

angle $= -\theta : -\pi/2 \text{ to } \pi/2$
$\downarrow$ ACW

![img-74.jpeg](img-74.jpeg)

![img-75.jpeg](img-75.jpeg)

Im (GH)

IPP

no encirclement
of origin

ACW

⊥

Re (GH)

## Question-06

Draw the Nyquist Plot for the function

$$G(s)H(s) = \frac{1}{(1+s T_1)(1+s T_2)} \quad \leftarrow \text{already done}$$

EXAMIDOST

## Question-07

Consider the Nyquist plot shown in figure, which one of the following transfer functions represent this plot?

at $\omega = 0$  $M = 1/4 = dc$ gain

standard plot of type-0/order-2
system

![img-76.jpeg](img-76.jpeg)

(C) $\frac{1}{(s+2)^3}$
order-3

(D) $\frac{1}{(s+2)}$
order-1

**SN

1 circle of ω radius = 2 infinite semi circle

∴ type = 2

# Question-08

Which of the following is the transfer function of a system having the Nyquist

plot in figure?

$$\omega = 0^+ \quad \phi = -180 \quad (tail)$$

(A) $$\frac{K}{s(s+2)^2(s+5)}$$

$$\angle tail = -90 \times type$$

(B) $$\frac{K}{s^2(s+2)(s+5)} \quad p=4 \quad z=0$$

$$type = 2$$

(C) $$\frac{K(s+1)}{s^2(s+2)(s+5)} \quad p=4 \quad z=1$$

$$\omega \to \infty \quad \phi = -360^\circ \quad (head)$$

(D) $$\frac{K(s+1)(s+3)}{s^2(s+2)(s+5)}$$

$$\angle head = -90 \quad (P-Z) = -360$$

$$p=4 \quad z=2$$

$$p-z=4$$

![img-77.jpeg](img-77.jpeg)

$$\angle head$$ & $$\angle tail$$ valid for min in $$\phi$$ system

curve-2 : $S = \lim_{R \to \infty} Re d^\theta$ $\theta : \pi/2$ to $-\pi/2$ CW

$G(s) = \lim_{R \to \infty} \frac{K}{R^2 e^{j2\theta} (2+Re^{j\theta})(S+Re^{j\theta})}$
$= \lim_{R \to \infty} \frac{K}{R^4 e^{j4\theta}} = \lim_{R \to \infty} \frac{K}{R^4} e^{-j4\theta}$

$-4\theta : -2\pi$ to $2\pi : 4\pi$ 2 circles
$\hookrightarrow$ ACW

![img-78.jpeg](img-78.jpeg)

ICW
O encirclement

# Question-09

→ no zeroes

The Nyquist plot of an all-pole second order open-loop system is shown in figure. Obtain the transfer function of the system.

![img-79.jpeg](img-79.jpeg)

$$\begin{aligned} & \text{type-0/order-2} \\ & \frac{K}{(1+ST_1)(1+ST_2)} \\ & \text{at } \omega=0 \quad M=2 = \text{dc gain} \\ & \therefore K=2 \end{aligned}$$

$$G(s) = \frac{K}{s^2 + 2\xi\omega_n s + \omega_n^2} \leftarrow \text{type-0/order-2}$$

$$\omega_n^2 - \omega^2 = 0$$

$$\omega_n = \omega = 2$$

$$\text{dc gain} = K/\omega_n^2 = 2$$

$$G(j\omega) = \frac{K}{2j\xi\omega_n\omega}$$

$$G(j\omega) = \frac{K}{(\omega_n^2 - \omega^2) + 2j\xi\omega_n\omega}$$

$$\phi = -\tan^{-1} \frac{2\xi\omega_n\omega}{(\omega_n^2 - \omega^2)}$$

$$M = \frac{K}{2\xi\omega_n\omega} = 2$$

at $\omega=2$, plot intersects -ve

imaj axis at distance = 2

$$\phi = +90 = +\tan^{-1} \frac{2\xi\omega_n\omega}{\omega_n^2 - \omega^2}$$

$$\tan 90 = \infty = \frac{2\xi\omega_n\omega}{\omega_n^2 - \omega^2}$$

$$K = 4\xi\omega_n\omega$$

$$\omega_n = \omega = 2$$

$$\therefore K = 16\xi$$

$$K/\omega_n^2 = 2$$

$$\therefore \omega_n = 2 \quad K = 8$$
$$\xi = 0.5$$

$$G(s) = \frac{8}{(s^2 + 2s + 4)}$$

# Question-10

Open loop system is stable find stability of close loop system

$$G(s)H(s) = \frac{K(1+s)^2}{s^3}$$

Draw the Nyquist plot for this system.

$$G(j\omega)H(j\omega) = \frac{K(1+j\omega)^2}{(j\omega)^3}$$

$$M = \frac{K(1+\omega^2)}{\omega^3}$$

$$\phi = 2\tan^{-1}\omega - 270^\circ$$

|  ω | M | φ  |
| --- | --- | --- |
|  0 | ∞ | -270°  |
|  ∞ | 0 | -90°  |

phase crossover

$$\phi = -180$$

$$-180 = 2 \tan^{-1} \omega - 270$$

$$2 \tan^{-1} \omega = 90$$

$$\tan^{-1} \omega = 45$$

$$\omega = 1$$

$$M = \frac{K(1 + l^2)}{l^3} = 2K$$

![img-80.jpeg](img-80.jpeg)

$$G(j\omega) = \frac{K(1+j\omega)^2}{(j\omega)^3} = \frac{K(1-\omega^2+2j\omega)}{-j\omega^3}$$

$$= -2/\omega^2 + j \frac{K(1-\omega^2)}{\omega^3}$$

at $\omega \to 0$ Re $\to \infty$

Im $\to \infty$

EXAMIDOST

System is type-03

∴ 3 CW semicircle of

∞ radius.

curve-2: $$S = \lim_{R \to \infty} Re^{j\theta} \quad \theta : \frac{\pi/2}{CW} \to -\pi/2$$

$$G(s) = \frac{K(1+Re^{j\theta})^2}{(Re^{j\theta})^3}$$

$$= \frac{K R^2 e^{j2\theta}}{R^3 e^{j2\theta}} = \lim_{R \to \infty} K/R e^{-j\theta}$$

radius $$K/R \to 0$$ angle: $$-\theta : -\pi/2 \to +\pi/2$$ ACW

![img-81.jpeg](img-81.jpeg)

1CW encirclement

of origin

total encirclement

of origin = 0

# Summary for min$^{m}$ $\phi$ system ** SN

1. polar plot for all pole system is already known.
2. if system contains zeroes then
   pp has to be drawn conventionally.

$$\angle tail = -90 \times type$$

$$\angle head = -90 \times (P - z)$$

3. draw mirror image of PP about real axis but do not connect PP & $\angle PP$ at origin.

4 draw 0 radius ACW

SC around origin connecting

PP & $\angle PP$

no. of semicircle = $(P - z)$

P = total poles  Z = total zeroes

5 draw infinite radius

CW semicircle

no. of semicircle = type

# Question-11

Consider G(s)H(s) = $$\frac{5(s+3)}{s(s-1)}$$ ∝ non min m φ

Draw the Nyquist plot for this system.

$$G(j\omega) H(j\omega) = \frac{5(3+j\omega)}{j\omega(-1+j\omega)}$$

$$M = \frac{5\sqrt{9+\omega^2}}{\omega\sqrt{1+\omega^2}} \quad \begin{array}{l} \phi = \tan^{-1}\omega/3 - 90 \\ - (180 - \tan^{-1}\omega) \\ = \tan^{-1}\omega/3 + \tan^{-1}\omega - 270^\circ \end{array}$$

|  ω | M | φ  |
| --- | --- | --- |
|  0 | ω | -270°  |
|  ω | 0 | -90°  |

o phase cross over

$$\phi = -180$$

$$-270 + \tan^{-1} \omega + \tan^{-1} \omega / 3 = -180$$

$$\tan^{-1} \omega / 3 = 90 - \tan^{-1} \omega$$

$$\omega / 3 = 1 / \omega$$

$$\omega^2 = 3$$

$$\omega = \sqrt{3}$$

$$M = \frac{5\sqrt{(12)}}{\sqrt{3}\sqrt{4}} = 5$$

$$G(j\omega) = \frac{5(3+j\omega)(-1-j\omega)}{j\omega(1^2+\omega^2)}$$

$$= \frac{5(-3+\omega^2-4j\omega)}{j\omega(1+\omega^2)}$$

$$= \frac{-20}{1+\omega^2} - j \frac{5(\omega^2-3)}{\omega(1+\omega^2)}$$

$$\omega \to 0$$

$$Re = -20 \quad \text{£}m \to \infty$$

![img-82.jpeg](img-82.jpeg)

curve-2: $$s = \lim_{R \to \infty} Re^{j\theta} : \theta = \pi/2 \text{ to } -\pi/2$$
$$R \to \infty$$

$$G(s) = \lim_{R \to \infty} \frac{5(Re^{j\theta} + 3)}{Re^{j\theta}(Re^{j\theta} - 1)}$$

$$= \lim_{R \to \infty} \frac{s}{R} e^{-j\theta}$$

radius $$\to 0$$ $$-\theta : -\pi/2 \text{ to } \pi/2$$
(ACW)

curve-4: $$s = \lim_{r \to 0} re^{j\theta} \quad \theta : -\pi/2 \text{ to } \pi/2$$
$$r \to 0 \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad (ACW)$$

$$G(s) = \lim_{r \to 0} \frac{s(3 + re^{j\theta})}{re^{j\theta}(-1 + re^{j\theta})}$$

$$\begin{aligned} G(s) &= \lim_{r \to 0} -15/r e^{j\theta} \\ &= \lim_{r \to 0} 15/r e^{-j\theta} \cdot e^{j\pi} \\ &= \lim_{r \to 0} 15/r e^{j(\pi-\theta)} \end{aligned}$$

radius $\to \infty$

angle: $\pi-\theta$: $3\pi/2$ to $\pi/2$
(CW)
$\rightarrow$ due to $-\theta$

o one pole in RHP

$$\begin{aligned} N &= P-Z \\ &= 1-0=1 \end{aligned}$$

1 ACW encirclement

of origin

CW sc
of ∞ radius

![img-83.jpeg](img-83.jpeg)

![img-84.jpeg](img-84.jpeg)

# Question-12

Consider a ufb system whose open-loop transfer function is

$$G(s) = \frac{K}{s(s^2+2s+2)} \Leftarrow min^m \phi \quad type-1/order-3$$

Draw the Nyquist plot for this system.

$$P-Z=3$$

3 sc of 0 radius drawn ACW

type-1 1 sc of ∞ drawn CW

![img-85.jpeg](img-85.jpeg)

ACW
encirclement

total encirclement
of origin = 0
no P or Z in RHP

# Question-13

The open-loop transfer function of a feedback control system is

$$G(s)H(s) = \frac{-1}{2s(1-20s)} \leftarrow \text{non min}^m \phi$$

Draw the Nyquist plot for this system.

$$GH(j\omega) = \frac{-1}{2j\omega(1-20j\omega)}$$

$$M = \frac{1}{2\omega\sqrt{1+400\omega^2}} \quad \phi = 180 - 90 - (-\tan^{-1} 20\omega)$$
$$= 90 + \tan^{-1} 20\omega$$

|  ω | M | φ  |
| --- | --- | --- |
|  0 | ω | 90  |
|  ω | 0 | 180  |

$$GH(j\omega) = \frac{j(1+2\sigma j\omega)}{2\omega(1+400\omega^2)}$$
$$= \frac{-10}{1+400\omega^2} + \frac{j}{2\omega(1+400\omega^2)}$$

$$\omega \rightarrow 0 \quad Re = -10$$
$$\hat{I}_m \rightarrow \infty$$

![img-86.jpeg](img-86.jpeg)

curve-02: $$S = \lim_{R \to \infty} Re^{j\theta}$$
$$R \to \infty$$

$$\theta: \pi/2 \text{ to } -\pi/2 \text{ (CW)}$$

$$GH(s) = \lim_{R \to \infty} \frac{-1}{Re^{j\theta} (1-20 Re^{j\theta})}$$

$$= \lim_{R \to \infty} \frac{1}{20R^2} e^{-j2\theta}$$

radius $$\to 0$$

angle = $$-2\theta$$: $$-\pi \text{ to } \pi$$
circle (ACW)

curve-4: $$S = \lim_{r \to 0} re^{j\theta}$$

$$\theta: -\pi/2 \text{ to } +\pi/2 \text{ (ACW)}$$

$$GH(s) = \lim_{r \to 0} \frac{-1}{re^{j\theta} (1-20 re^{j\theta})}$$

$$= \lim_{r \to 0} \frac{-1}{r} e^{-j\theta}$$

$$= \lim_{r \to 0} \frac{1}{r} e^{j(\pi-\theta)}$$

radius: $$\frac{1}{r} \to \infty$$

angle: $$\pi-\theta \Rightarrow 3\pi/2 \text{ to } \pi/2$$

(CW)

![img-87.jpeg](img-87.jpeg)

- 1 ACW encirclement
of origin

due to 1 pole in RHP

** SN

# Enclosement & Encirclement

Enclosement : used with polar plot
Encirclement: used with Nyquist plot

![img-88.jpeg](img-88.jpeg)

- polar plot is not a closed plot that is it starts & ends at different points so we do not talk about encirclement but we talk about enclosement.
- When we walk on polar plot in the dir \( n \) of polar plot then a point lying on our right side is said to be enclosed by polar plot.
- A point lying inside a closed curve is said to be encircled by closed curve.

# ** Stability using Polar Plot

- valid only for minimum phase system but Nyquist criteria is applicable to all systems. G(s)H(s) has all poles & zeroes in LHP
- for CL stability, we check for enclosement of \((-1,0)\) point by polar plot of \(G(s)H(s)\).

system-1: (-1,0) point is not enclosed
↪ system is stable

system -2: (-1,0) point lies on polar plot
↪ system is marginally stable

system-3: (-1,0) point enclosed by polar plot
↪ unstable

![img-89.jpeg](img-89.jpeg)

# Multiplying Gain

If we want to multiply the gain

$$T_2(s) = KF(s) \rightarrow PLOT = ?$$

whenever we multiply constant $k > 0$ to a transfer function, then all point on polar or nyquist plot get multiplied by $k$.

* the magnitude of each point on graph becomes K times.

![img-90.jpeg](img-90.jpeg)

# Observation

** SN

(1)If \(\mathrm{TF}G(s)H(s) = KF(s)0 <   K <   \infty\)
(2) Coordinates on \( G(s)H(s) \) plane will be function of \( k \)
(3) As K varies \((-1,0)\) point varies \(\leftarrow\) with respect to Nyquist plot
(4) For different placing \((-1,0)\) different Range of \(K\) is identified.
(5) "EACH RANGE" belongs to Stable/ unstable Region of \(1 + G(s)H(s)\)
(6) NATURE of stability at transition point will be identified.

**
SN

![img-91.jpeg](img-91.jpeg)

assume OLTF is stable,
determine range of K
s.t. CLTF is stable.

P = 0 ; no OL poles in
RHP

Case-01:

$$-\frac{2}{3}K < -1$$

$$K > \frac{3}{2}$$

![img-92.jpeg](img-92.jpeg)

(-1,0) encircled once in ACW $\text{dist}^n$

$$N = 1$$

$$N = P - Z = O - Z$$

$$Z = -1 \text{ (impossible)}$$

if contour is reversed

$$N = -1 \text{ (ACW)}$$

$$Z = 1 \text{ (unstable)}$$

Case-02

![img-93.jpeg](img-93.jpeg)

-1 encircled once in CW dist*

N = -1 (CW)

P = 0

N = P - Z = -1

Z = 1

CL system is unstable

** SN

Case-03

![img-94.jpeg](img-94.jpeg)

-1 is not encircled

N = 0 ∴ P = 0 Z = 0

Z = 0 : no CL pole in RHP

CL system is stable

(K < 1)

# Nyquist plot with Transportation Lag

$$G(s) = \frac{e^{-sT}}{(1+s)}$$

$$G(j\omega) = \frac{e^{-j\omega T}}{1+j\omega}$$

$$M = \frac{1}{\sqrt{1+\omega^2}}$$

$$\phi = -\omega T - \tan^{-1}\omega$$
$$\downarrow$$
$$\text{radians}$$

Phase crossover freq.

$$\phi = -180^\circ$$

$$-180 = -\omega T - \tan^{-1}\omega$$

$$180 = \omega T + \tan^{-1}\omega$$

$$180 - \tan^{-1}\omega = \omega T$$

$$\tan(180 - \tan^{-1}\omega) = \tan\omega T$$

$$-\omega = \tan\omega T$$

non linear equation

infinite no. of

solution possible

nyquist plot cuts

-ve real axis co

no. of times so

nyquist plot

cannot be

drawn.

www.essay.com

# Effect of adding zeroes in Nyquist plot

$$G(s) = \frac{1}{s^2(1+s)(1+2s)}$$

type-2/order-4 function

all poles system

min$^m$ $\phi$ system

$\angle tail = -90 \times type = -180^\circ$

$\angle head = -90 \times (P-Z)$

$= -90 (4-0) = -360^\circ$

- curve-2: $\lim_{R \to \infty} Red^\theta$

$P-Z=4$

4 small ACW sc around origin

$\rightarrow$ 2 small ACW circle

- curve-4: type-2

2 infinite CW semicircle

![img-95.jpeg](img-95.jpeg)

![img-96.jpeg](img-96.jpeg)

CW encirclement

Re(GH)

- 360°

# Effect of adding zeroes in Nyquist plot

$$G(s)H(s) = \frac{1+4s}{s^2(1+s)(1+2s)}$$

polar plot

$$\begin{array}{l} \angle tail = -90 \times type = -90 \times 2 \\ = -180^\circ \end{array}$$

$$\begin{array}{l} \angle head = -90 \times (P-Z) \\ = -90 \times (4-1) = -270^\circ \end{array}$$

$$GH(j\omega) = \frac{1+j4\omega}{(j\omega)^2(1+j2\omega)(1+j\omega)}$$

$$\phi = \tan^{-1}4\omega - 180 - \tan^{-1}\omega - \tan^{-1}2\omega$$

phase crossover

$$\phi = -180$$

$$-180 = -180 + \tan^{-1}4\omega - \tan^{-1}\omega - \tan^{-1}2\omega$$

$$\begin{array}{l} \tan^{-1}4\omega = \tan^{-1}\omega + \tan^{-1}2\omega \\ = \tan^{-1} \frac{3\omega}{1-2\omega^2} \end{array}$$

$$4\omega = \frac{3\omega}{1-2\omega^2}$$

$$4-8\omega^2 = 3$$

$$8\omega^2 = 1$$

$$\omega = \frac{1}{2\sqrt{2}}$$

o Type-02: 2 CW infinite SC

o P-Z=3

3 ACW small SC centered
at origin

EXAMIDOST

![img-97.jpeg](img-97.jpeg)

$$\omega = \frac{1}{2\sqrt{2}}$$

# Question-01

Open loop system is stable find stability of close loop system

![img-98.jpeg](img-98.jpeg)

forward path TF = KG(s)

due to multiplication by K all intercepts become K-times.

![img-99.jpeg](img-99.jpeg)

Case-01: (-1,0) point lies inside

![img-100.jpeg](img-100.jpeg)

N = -1 1 CW encirclement

P = 0 OL system is stable

-1 = P - Z

Z = 1

1 CL pole in RHP

CL system: unstable

Case-02: (-1,0) lies outside

-2K > -1

K < 1/2

![img-101.jpeg](img-101.jpeg)

N = 0

∴ OL system: stable

∴ P = 0

Hence, Z = 0

CL system is stable

# Question-02

Comment on stability of the close loop system if OL system is stable.

![img-102.jpeg](img-102.jpeg)

due to multiplication by K

all intercepts of plot become

K- times.

![img-103.jpeg](img-103.jpeg)

![img-104.jpeg](img-104.jpeg)

$$N = -1$$

∴ OL system is stable

$$P = 0$$

$$N = P - Z$$

$$Z = 1$$

1 CL pole in RHP

unstable

if $K$ = large

intercepts are large

(-1,0) lies inside ← encircled once in
CW dir^n

## Question-03

The Nyquist stability criterion and the Routh criterion both are powerful analyst's tools for determining the stability of feedback controllers. Identify which of the following statements is FALSE:

- (a) Both the criteria provide information relative to the stable gain range of the system.
- (b) The general shape of the Nyquist plot is readily obtained from the Bode magnitude plot for all minimum-phase systems.

The Routh criterion is not applicable in the condition of transport lag, which can be readily handled by the Nyquist criterion.

- (d) The closed-loop frequency response for a unity feedback system cannot be obtained from the Nyquist plot.

# Question-04

The Nyquist plot for the open-loop transfer function $G(s)$ of a unity negative feedback system is shown in Figure. If $G(s)$ has no pole in the right half of s-plane, the number of roots of the system characteristic equation in the right half of s-plane is

![img-105.jpeg](img-105.jpeg)

(B) 1

(C) 2

(D) 3

![img-106.jpeg](img-106.jpeg)

encirclement of (-1,0) point

1CW & 1ACW

$$N = 0$$

∴ G(i) has no pole in

$$RHP$$

$$P = 0$$

$$N = P - Z$$

$$\therefore Z = 0$$

**SN**

## Question-05

no information about OL pole in RHP
but one OL zero in RHP
↪ check encirclement of origin

The complete Nyquist plot of the open-loop transfer function $G(s)H(s)$ of a feedback control system is shown in the figure.

If $G(s)H(s)$ has one zero in the right-half of the s plane, the number of poles that the closed-loop system will have in the right-half of the s-plane is

![img-107.jpeg](img-107.jpeg)

(a) 4

(b) 0

(c) 3

(d) 1

• origin is encircled twice
in CW duⁿ

$$N = -2$$

$$N = P - Z \rightarrow \text{OL zero in RHP}$$

$$-2 = P - 1$$

$$P = -1 \text{ (impossible)}$$

assume nyquist contour to be
ACW

$$N = 2 \quad (2 \text{ CW encirclement})$$

$$2 = P - 1$$

$$P = 3 \quad 3 \text{ OL pole in RHP}$$

• encirclement of  $(-1,0)$
$$N = 0 \quad (1ACW + 1CW)$

$$N = P - Z$$

$$0 = 3 - Z$$

$$Z = 3$$

3 CL pole in RHP

## Question-06

Consider the polar plot of two systems as shown below, Then,

![img-108.jpeg](img-108.jpeg)

for A,  $(-1,0)$ : not enclosed stable

for B,  $(-1,0)$ : on polar plot marginally stable

(A) A is unstable

(C) B is marginally stable

(B) A is stable

(D) B is unstable

# Question-07

Consider the Nyquist plot of an open loop system G(s) shown in the figure. It is known that G(s) has two unstable poles. The closed loop system shown with unity negative feedback system is

G(s) has 2 poles in RHP: P=2
encirclement of (-i,0): twice ACW N=2

(A) unstable with two poles in the right hand side of s-plane

(B) stable

(C) marginally stable

(D) unstable with 4 poles in the right hand side of s-plane.

$$N = P - Z$$

$$Z = 0 \text{ no CLP in RHP}$$

![img-109.jpeg](img-109.jpeg)

# Question-08

The loop transfer function of a negative feedback system is $$G(s)H(s) = \frac{1}{s(s-2)}$$. The Nyquist plot for the above system

(a) does not encircle \((-1 + j0)\) point direction
(c) encircles \((-1 + j0)\) point twice in the counterclockwise direction
(d) encircles \((-1 + j0)\) point once in the counterclockwise direction

one OL pole in RHP

$$P=1$$

$$CE: 1 + G(s)H(s) = 0$$

$$s^2 - 2s + 1 = 0$$

$$(s-1)^2 = 0$$

2 CL pole in RHP

$$Z=2$$

$$N = P - Z = -1$$

encircled $$(-1,0)$$ once

in CW dir

## Question-09

Nyquist plot of a certain stable system is given below. The acceleration error coefficient is

(a) 0

(b)  $\infty$

(c)  $-\infty$

(d)  $10^2$

2 infinite sc

&  $\angle tail = -180^\circ$

system is type-02

$K_a = finite$

![img-110.jpeg](img-110.jpeg)

# Lecture-43

# Question-06

The number and direction of encirclements around the point 1 + G (s) in the complex plane by the Nyquist plot of G(s) = (1-s)/(4-2s) is

a) Zero

(c) One, clockwise

(b) One, anti-clockwise

(d) Two, clockwise

$$\frac{1-s}{4-2s} ; \text{pole } s=2 \text{ RHP}$$
$$p=1$$

$$N = P - Z = 0$$

$$CE: 1 + G(s) = 0$$

$$4-2s + 1-s = 0$$

$$s = s/3 : \text{RHP}$$

$$Z = 1$$

# Question-07

The number of times the Nyquist of will encircle the origin clockwise is...

$$G(s) = \frac{s-1}{s+1}$$

→ OL zero in RHP Z=1

→ OL pole in LHP
P=0

$$N = P - Z = -1$$

one encirclement in CW dur

# Question-08

If the s-plane contours enclose 3-zeros and 2-poles contour will encircle the origin of q (s) plane

(a) Once in clockwise direction

(b) Once in counter clockwise direction
(c) Thrice in clockwise direction
(d) Twice in counter clockwise direction

$$N = \rho - z$$

$$= 2 - 3 = -1$$

# Question-09

Loop transfer function of a feedback system is $$G(s) = \frac{s+3}{s^2(s-3)}$$

Take the Nyquist contour in the clockwise direction. Then, the Nyquist plot of

$$G(s)H(s)$$ encircles $$-1 + j0 \rightarrow CLS$$

☑ (a) Once in clockwise direction

(c) Once in anticlockwise direction

(b) Twice in clockwise direction
(d) Twice in anticlockwise direction

$$N = P - Z = -1$$

$$G(s) = \frac{s+3}{s^2(s-3)}$$

one CL pole in RHP $$P=1$$

$$1+G(s) = 0$$

$$s^3 - 3s^2 + s + 3 = 0$$

$$s^3 \quad 1 \quad 1$$

$$s^2 \quad -3 \quad 3$$

$$s^1 \quad 2$$

$$s^0 \quad 3$$

2 sign change

2 CL pole in RHP

$$Z=2$$

# Question-10

A unity feedback system has the open loop transfer function

$$G(s) = \frac{1}{(s-1)(s-2)(s+3)} \rightarrow \begin{array}{l} 2 \text{ poles in RHP } P=2 \\ \text{no zeros in RHP } Z=0 \end{array}$$

The Nyquist plot of G encircles the origin

(a) Never

(b) Once

(c) Twice

(d) Thrice

$$N = P - Z = 2$$

## Gain Margin

** SN

1. Gain margin is calculated for C.L.S.
2. "It is the amount of gain (K₁) multiplied to O.L.T.F. G(s)H(s) such that corresponding C.L.S. becomes marginally stable."
3. It is the amount of gain (in dB) added to O.L.T.F. G(s)H(s) such that corresponding C.L.S. becomes marginally stable.

## Gain Margin

**CASE-1:** OLTF of a CLS is give

$$G(s)H(s) = \frac{K}{s(s+1)(s+3)} \leftarrow \text{min}^m \text{ phase}$$

Comment on the gain margin,

$$\sigma = \frac{(0-1-3)-0}{3-0} = -4/3$$

$$BP \cdot K = -(s^3 + 4s^2 + 3s)$$

$$dK/ds = -(3s^2 + 8s + 3) = 0$$

$$S = -0.45\sqrt{4}, -2.215$$

intersection with $I_{\text{max}}$

(marginally stable)

CE:

$$s^3 + 4s^2 + 3s + K = 0$$

$$IP = EP$$

$$4 \times 3 = K$$

$$K = 12$$

![img-111.jpeg](img-111.jpeg)

EXAM POST

$$G(s) = \frac{K}{s(s+1)(s+3)}$$

for $K = 12$

system becomes marginally

stable.

① $G(s) = \frac{2}{s(s+1)(s+3)}$

Gain margin = 6

$$GN(dB) = 20 \log 6 > 0 \text{ (stable)}$$

② $G(s) = \frac{12}{s(s+1)(s+3)}$

Gain margin = 1

$$GN(dB) = 20 \log 1 = 0 \text{ dB}$$

marginally stable

③ $G(s) = \frac{20}{s(s+1)(s+3)}$

$$GN(dB) = 20 \log 0.6 < 0 \text{ unstable}$$

# Gain Margin

CASE-2: OLTF of a C.L.S. is given:

$$G(s)H(s) = \frac{K(1-s)}{(s+1)(s+2)} = \frac{-K(s-1)}{(s+1)(s+2)}$$

0 < K < ∞ Comment on the gain margin

K > 0 but -K < 0 : CRL

CE : 1 + G(s)H(s) = 0

$$s^2 + (3-K)s + (2+K) = 0$$

intersection with Im axis

coeff of s' = 0

K = 3

$$s^2 + s = 0 \quad s = \pm j\sqrt{s}$$

non minᵐ phase with zeroes in RHP

(type-01)

non-minᵐ phase

Zeros in RHP

(type-01)

poles in RHP

(type-02)

K<3: poles in LHP

stable

K=3: poles on $\hat{L}$m axis

marginally stable

K>3: poles in RHP
unstable

![img-112.jpeg](img-112.jpeg)

$$G(s) = \frac{K(1-s)}{(s+1)(s+2)}$$

K < 3: stable

K = 3: marginally
stable

K > 3: unstable

② $$G(s) = \frac{(1-s)}{(s+1)(s+2)}$$

$$GM = 3$$

$$GM(dB) = 20 \log 3 > 0$$
stable

⑥ $$G(s) = \frac{3(1-s)}{(s+1)(s+2)}$$

$$GM = 1$$

$$GM(dB) = 0 \text{ dB} \quad \text{marginally stable}$$

© $$G(s) = \frac{6(1-s)}{(s+1)(s+2)}$$

$$GM = 3/6 = 0.5$$

$$GM(dB) = 20 \log 0.5 < 0 \text{ dB}$$
unstable

SIV

# NOTE: Observation for minimum phase or non-minimum phase system OTLF

# (Type-I) G(s)H(s) - Only zeroes in RHP

(1) "For C.L.S. to be stable" \(\leftrightarrow\) GM > 1 or GM > 0 dB
(2) "For C.L.S. to be marginally stable" \(\leftrightarrow\) GM = 1 or GM = 0 dB
(3) "For C.L.S. to be unstable" \(\leftrightarrow\) GM \(< 1\) or GM \(< 0\) dB

# Question-01

non min$^{m}$ phase with poles
in RHP (type-02)

$G(s) = \frac{K(1+s)}{(s-2)(s-3)}$ comment on gain margin?

CE:  $1 + G(s) = 0$

$s^2 + (K-s)s + (6+k) = 0$

intersection with $\hat{I}_m$ axis

$s' \text{ coeff} = 0$

$K = s$

$s^2 + 11 = 0 \quad s = \pm j\sqrt{11}$

$K < S$: poles in RHP

unstable

$K = S$: poles on $\hat{I}_m$ axis

marginally stable

$K > S$: poles in LHP

stable

![img-113.jpeg](img-113.jpeg)

EXAMEDIST

$$G(s)H(s) = \frac{K(s+1)}{(s-2)(s-3)}$$

K < S : unstable

K = S : marginally stable

K > S : stable

$$\textcircled{a} GH = \frac{4(s+1)}{(s-2)(s-3)}$$

$$GN = 5/4 > 1$$

$$GN(dB) = 20 \log 5/4$$

$$> 0 dB$$

unstable

$$\textcircled{b} GH = \frac{5(s+1)}{(s-2)(s-3)}$$

$$GN = 1$$

$$GN(dB) = 0 dB : marginally stable$$

$$\textcircled{c} GH = \frac{10(s+1)}{(s-2)(s-3)} \quad K > S : stable$$

$$GN = 5/10 = 0.5$$

$$GN(dB) = 20 \log 0.5 < 0 dB$$

SN

# NOTE: Observation for minimum phase system
OTLF

# (Type-II) G(s)H(s) - poles in RHP, zeroes in LHP

(1) For C.L.S. to be stable \(\leftrightarrow\) G.M. \(< 1\) or GM \(< 0\) dB
(2) For C.L.S. to be marginally stable \(\leftrightarrow\) G.M. = 1 or GM = 0 dB
(3) For C.L.S. to be unstable \(\leftrightarrow\) G.M. \(>1\) or GM \(>0\) dB

# Gain Margin from Routh Table

**SN

Shortcut to calculate G.M.:

(1) Given: \( G(s)H(s) = F(s) \)
(2) \(K_{1}G(s)H(s) = K_{1}F(s)\)

(3) $1 + K_1 G(s)H(s) = 1 + K_1 F(s) \rightarrow$ Roots on jω axis or single root at origin or Marginal Stable

determine $K_1$ ??

$K_1 =$ Gain Margin

# Gain Margin from Routh Table

** SN

In such cases, system can never

be marginally stable, Gain margin

Routh of $1 + K_1F(s)$

cannot be finite.

$GM = \begin{cases} \infty \text{ dB, always stable} \\ -\infty \text{ dB, always unstable} \end{cases}$

G.M. → "Absolute Stable + OLTF Nature."

1. Odd row never zero for \(0 < \mathrm{K}_1 < \infty\)
2. Odd row zero but \(K_{1} = -\mathrm{ve}\)
3. Odd row zero and \( K_{1} = +ve \) but roots of A.E. not on \( j\omega \) axis
4. Odd row zero and \( K_{1} = +ve \), root of A.E. on \( j\omega \) axis but repeated in nature

→ LAST row of Routh table ≠ 0 for $0 < K_1 < \infty$

(no pole at origin)

$s^3 + 3s^2 + 2s = 0$

$S(s+2)(s+1) = 0$

pole at origin

# Gain Margin from Routh table

If the odd row is zero $0 < K_1 < \infty$ and value of $K_1 = +ve$ And roots of A.E. $\rightarrow$ non

repeated on $j\omega$ axis $\leftarrow$ marginally stable (GM=finite)

$\rightarrow \pm j\omega = \pm j\omega_{pc}$ $\leftarrow$ roots on $I_m$ axis = phase cross over freq.

$\rightarrow K_1 = G.M. in ratio Or$

Last row of routh = 0 for $0 < K_1 < \infty$ $\leftarrow$ pole at origin : mar. stable

$K_1 = G.M. \omega_{pc} = 0$

## Question-02

$$G(s)H(s) = \frac{1}{(s+1)(s+2)} \Rightarrow \text{Find gain margin of system}$$

$$K_1 F(s) = \frac{K_1}{(s+1)(s+2)}$$

$$CE: 1 + K_1 F(s) = 0$$

$$s^2 + 3s + (2 + K_1) = 0$$

coeff of $s' \neq 0$

last row = 0

$$2 + K_1 = 0 \quad K_1 = -2$$

system can never become marginally stable

$$GM = \infty$$

$$GM = -\infty$$

$$CE: s^2 + 3s + (K_1 + 2) = 0$$

for $K_1 > 0$ all coeff > 0

2nd order : stable

$$\therefore GM = \infty \text{ dB}$$

always stable

# Important points

(i) Odd row is zero and last row non zero.
(ii) Odd row non zero and last row zero.
(i) Odd row non-zero and last row non-zero.
(ii) Odd row zero and last row zero.

→ G.M. → Infinite.

→ G.M. → finite

provided roots of AE are

non-repeated & on fw axis

## Question-03

Calculate Gain Margin of the system

$$G(s)H(s) = \frac{1}{s(s+1)(s+3)}$$

$$K_1 F(s) = \frac{K_1}{s(s+1)(s+3)}$$

CE:  $1 + K_1 F(s) = 0$

$$s^3 + 4s^2 + 3s + K_1 = 0$$

mar. stable:  $\hat{E}P = \hat{E}P$

$$K_1 = 12$$

$$GN = 20 \log_{12} 12 = 21.58 \text{ dB}$$
stable

** SN

# Mathematical Calculation

← Frequency domain

Step-1. Compute $\omega_{pc}$ → freq. at which polar plot & nyquist plot intersect -ve real axis

Step-2. Compute magnitude of GH(jω) at ωpc

Step-3. Gain Margin = $\frac{1}{|GH(j\omega)|_{\omega=\omega_p}}$

for marginally stable system, polar plot must pass through (-1,0) point

a=-1, (-1,0) not enclosed by PP (M<1) stable

b=-1, (-1,0) lies on boundary of PP mar. stable (M=1)

c=-1, (-1,0) enclosed by PP : unstable (M>1)

![img-114.jpeg](img-114.jpeg)

# Mathematical Calculation

o to make A mar. stable

↳ multiply by a factor of 2 so that
PP passes through (-1,0)

$$GN = 2 \quad GN(dB) = 20 \log 2 = 6dB \times 0$$

o B is already mar. stable

$$GN = 1 \quad GN(dB) = 0dB$$

o to make C mar. stable

↳ multiply by a factor of ½ so
that PP passes through (-1,0)

$$GN = \frac{1}{2} \quad GN(dB) = 20 \log \frac{1}{2}$$
$$= -6dB < 0$$

![img-115.jpeg](img-115.jpeg)

# Question-04

**
SN

polar plot never intersect -ve real axis

∴ system is always stable

$GN = \omega dB$

$\omega_{pc} \leftrightarrow \begin{pmatrix} 0 \\ \infty \\ \text{complex} \end{pmatrix}$

OLTF of C.L.S. with negative feedback. Calculate Gain Margin.

$$G(s)H(s) = \frac{1}{(s+1)(s+2)}$$

$$GH(j\omega) = \frac{1}{(1+j\omega)(2+j\omega)}$$

$$\phi = -\tan^{-1}\omega - \tan^{-1}\omega/2$$

$$\omega_{pc}: \phi = -180$$

$$-180 = -\tan^{-1}\omega_{pc} - \tan^{-1}\frac{\omega_{pc}}{2}$$

$$180 - \tan^{-1}\omega_{pc} = \tan^{-1}\omega_{pc}/2$$

$$-\omega_{pc} = \omega_{pc}/2$$

$$\omega_{pc} = 0$$

$$\text{at } \omega = 0$$

$$\phi = 0^\circ \text{ (+ve real axis)}$$

$$\hat{I}_m(GH)$$

$$\omega = 0 \quad Re(GH)$$

![img-116.jpeg](img-116.jpeg)

# Question-05

GM = ∞

G(s)H(s) = 10(s+3)
 s(s+1)(s+2) is OLTF of CLS. Calculate G.M.

$$GH(j\omega) = \frac{10(3+j\omega)}{j\omega(1+j\omega)(2+j\omega)}$$

$$\phi = \tan^{-1}\omega/3 - 90 - \tan^{-1}\omega - \tan^{-1}\omega/2$$

$$M = \frac{10(\sqrt{9+\omega^2})}{\omega\sqrt{1+\omega^2}\sqrt{4+\omega^2}}$$

$$\omega_{pc}: \phi = -180$$

$$-180 = -90 + \tan^{-1}\omega/3 - \tan^{-1}\omega - \tan^{-1}\omega/2$$

$$90 + \tan^{-1}\omega/3 = \tan^{-1}\omega + \tan^{-1}\omega/2$$

$$= \tan^{-1}\left(\frac{\omega + \omega/2}{1 - \omega^2/2}\right)$$

$$-\cot(\tan^{-1}\omega/3) = \frac{3\omega}{2-\omega^2}$$

$$-3/\omega = \frac{3\omega}{2-\omega^2}$$

$$\omega^2 - 2 = \omega^2 \quad \text{not possible}$$

$$\text{routh: } K_1 F(s) = \frac{10K_1(s+3)}{s(s+1)(s+2)}$$

$$CE: s^2 + 3s^2 + (2+10K_1)s + 30K_1 = 0$$

$$3(2+10K_1) = 30K_1$$

$$6 + 30K_1 = 30K_1$$

no such value of $K_i$ exist

$\therefore$ always stable

$$GM = \infty dB$$

## Question-06

The input-output transfer function of a plant $$H(s) = \frac{100}{s(s+10)^2}$$

The plant is placed in a unity negative feedback configuration as shown in the figure below.

The gain margin of the system under closed loop unity negative feedback is

(A) 0 dB

(B) 20 dB

(C) 26 dB

(D) 46 dB

![img-117.jpeg](img-117.jpeg)

$$H(s) = \frac{100}{s(s+10)^2}$$

$$H(j\omega) = \frac{100}{j\omega(10+j\omega)^2}$$

$$\phi = -90 - 2\tan^{-1}\omega/10$$

$$\text{at } \omega_{pc} \quad \phi = -180$$

$$-180 = -90 - 2\tan^{-1}\omega_{pc}/10$$

$$\omega_{pc} = 10$$

$$M = \frac{100}{\omega(100+\omega^2)} = \frac{100}{10 \times 200} = 0.05$$

$$GM = 1/M = 20$$

$$GM(dB) = 20 \log 20 = 26dB$$

# Question-07

Consider the feedback system

$$G(S) = \frac{K(s+4)}{s(s+1)},\ H(S) = \frac{1}{s+2}$$

The value of gain for which system is marginally stable is

(A) K = 4

$$CE: 1 + G(s)H(s) = 0$$

(B) K = 6

$$s(s+1)(s+2) + K(s+4) = 0$$

(C) K = 10

$$s^2 + 3s^2 + (2+K)s + 4K = 0$$

(D) K = 2

max. stable:  $EP = EP$

$$3(2+K) = 4K \quad 6 + 3K = 4K$$
$$K = 6$$

![img-118.jpeg](img-118.jpeg)

# Question-08

$$G(j\omega) = \frac{5}{j\omega(s+j\omega)(1s+j\omega)}$$

Calculate the gain margin of the system G(s) with unity feedback. Where G(s) is given as

$$\phi = -90 - \tan^{-1} \omega/5 - \tan^{-1} \omega/15$$

$$G(s) = \frac{5}{s(s+5)(s+15)}$$

$$\omega_{pc}: \phi = -180$$

$$-180 = -90 - \tan^{-1} \omega/5 - \tan^{-1} \omega/15$$

(A) \(20\log_{10}500\mathrm{dB}\)
(B) \(20\log_{10}300\mathrm{dB}\)
(C) \(20\log_{10}50\mathrm{dB}\)
(D) \(20\log_{10}100\mathrm{dB}\)

$$= \frac{1/15}{s(1+s/5)(1+s/15)}$$

$$k = 1/15 \quad T_1 = 1/5 \quad T_2 = 1/15$$

$$GM = \frac{T_1 + T_2}{k T_1 T_2} = \frac{4/15}{1/1125} = 300$$

$$90 - \tan^{-1} \omega/5 = \tan^{-1} \omega/15$$

$$\cot(\tan^{-1} \omega/5) = \omega/15$$

$$5/\omega = \omega/15$$

$$\omega^2 = 75$$

$$\omega_{pc} = \sqrt{75} \text{ r/s} = \text{Geometric mean of}$$
$$2 \text{ corner freq}$$
$$(5, 15)$$

$$M = \frac{S}{\omega \sqrt{2s+\omega^2} \sqrt{22s+\omega^2}}$$

$$= \frac{S}{\sqrt{75} \sqrt{100} \sqrt{300}}$$

$$= \frac{S}{150 \times 10} = S/1500$$

$$GM = 1/M = 300$$

$$GM(dB) = 20 \log 300$$

$$G(s) = \frac{K}{s(1+sT_1)(1+sT_2)}$$

$$\omega_{pc} = GM \text{ of corner freq}$$

$$= 1/\sqrt{T_1 T_2}$$

$$GM = \frac{(T_1 + T_2)}{KT_1 T_2}$$

**
S1

# Question-09

Consider the stable closed-loop system shown in the figure. The asymptotic Bode magnitude plot of G(s) has a constant slope of -20 dB/decade at least till 100rad/sec with the gain crossover frequency being 10rad/sec. The asymptotic Bode phase plot remains constant at -90° at least till ω = 10rad/sec. The steadystate error of the closed-loop system for a unit ramp input is

(rounded off to 2 decimal places).

![img-119.jpeg](img-119.jpeg)

# Important points of gain margin

1 GM range in ratio \(0 < \mathrm{GM} < +\infty\)
2 GM can never be exactly \( = 0 \) (in ratio)
3. \( \mathrm{GM} \rightarrow +\infty : \) "symbolic Representation of absolute stable system"
4 GM Range in dB(-∞)dB < GM < +∞(dB).

always unstable

always stable

# PHASE MARGIN

**
SN

"It is the amount of phase introduced (added) in the phase of OLTF such that C.L.S. reaches on the verge of instability."

![img-120.jpeg](img-120.jpeg)

G(s)H(s)

# PHASE MARGIN

Phase margin is calculated for C.L.S.

'It is the amount of phase (Angle) introduced in the phase of OLTF such that corresponding C.L.S. becomes Marginally stable.'

P.M. → in degree

computed for closed loop system using OLTF.

# Mathematical Calculation

**SN

$$T(j\omega) = G(j\omega)H(j\omega)$$

Step 1: put $$s = j\omega$$

Step 2: $$T(j\omega) = |T(j\omega)|e^{+\frac{1}{2}T(j\omega)}$$ $$\leftarrow$$ polar form

Step 3: $$|T(j\omega)| = 1 \rightarrow$$ possible gain crossover frequency. ($$\omega_{gc}$$) $$\omega_{gc} \rightarrow$$ Real and positive

Step 4: Valid Wgc
P.M. $$= < T(j\omega_{gc}) + 180^{\circ}$$

Step 5: Invalid $$\omega_{gc} \rightarrow$$ Absolute stability + Type of OTLF.
$$\rightarrow$$ P.M. $$= \pm \infty^0$$
$$\begin{cases} \infty: \text{absolutely stable} \\ -\infty: \text{always unstable} \end{cases}$$

# Gain Cross-Over Frequency

**SN

→ magnitude

The frequency at which the gain of the Transfer Function becomes unity is called as Gain Crossover Frequency.

- magnitude is distance of a point on polar plot from origin.
- $\omega_{gc}$ is the freq at which $mag=1$ or polar plot intersects unit circle.

![img-121.jpeg](img-121.jpeg)

# Limitations of Phase Margin

**SN

$\omega_{gc}$ must be real and positive to compute phase margin.

if $\omega_{gc}$ = complex or $\omega_{gc} < 0$

$\rightarrow$ PM = $\infty / -\infty$ based on table discussed.

$$\mathrm{PM} = 180 + \angle G(j\omega)H(j\omega)|_{\omega=\omega_{gc}}$$

For minimum $\phi$ system or non-minimum $\phi$ with zero in RHP (Type-01)

PM > 0 stable

PM < 0 unstable

non-min$^m$ $\phi$ with pole in RHP (Type-02)

PM < 0 : stable

PM > 0 : unstable

# Using Nyquist Plot

The point at which the polar plot intersects the negative real axis represents phase crossover frequency.

The point at unit distance from the origin on the polar plot represents the origin on the polar plot and represents the gain cross-over frequency.

o marginally stable system: PP must pass through (-1,0) i.e. 1/180°

o at ω = ωgc M = 1 unit
o PM is the angle by which this point must be rotated to make φ = 180°

![img-122.jpeg](img-122.jpeg)

# Using Nyquist Plot

**SN

if we rotate the

point at wgc in

CW dirn by an

angle equal to

PM, the

PP would wgc

pass through

(-1,0)

![img-123.jpeg](img-123.jpeg)

![img-124.jpeg](img-124.jpeg)

![img-125.jpeg](img-125.jpeg)

PM = 180 + φ < 0

# Question-01

$$T(s) = KG(s)H(s)$$
Calculate G.M. for K = 1

for gain K all intercept

get multiplied by K

intersection with -ve real axis = -K/4

for marginally stable system

$$-K/4 = -1 \quad K = 4$$

$$(GM)_{dB} = 20 \log 4 = 12 \text{ dB}$$

![img-126.jpeg](img-126.jpeg)

# PHASE MARGIN

![img-127.jpeg](img-127.jpeg)

# CASE 1:

![img-128.jpeg](img-128.jpeg)

$$M < 1$$

$$GM = \frac{1}{M} > 1$$

$$GM(dB) > 0 \text{ dB}$$

$$PN > 0$$

stable

$$\omega_{pc} > \omega_{gc}$$

## CASE 2:

![img-129.jpeg](img-129.jpeg)

polar plot passes through $(-1,0)$

system is marginally stable

$$GN = 0dB \quad PM = 0^\circ$$

$$\omega_{gc} = \omega_{pc}$$

because $N=1$ & $\phi = 180^\circ$

occur together

### CASE 3:

![img-130.jpeg](img-130.jpeg)

$$PM < 0$$

$$\text{at } \omega = \omega_{pc} \quad M > 1$$

$$GM = \frac{1}{M} < 1$$

$$GM(dB) = 20 \log \frac{1}{M} < 0 \text{ dB}$$

unstable

$$\omega_{pc} < \omega_{gc}$$

** ΣN

# Using Bode Plot

![img-131.jpeg](img-131.jpeg)

ωgc: ω at which gain = 1

Gain = 1 = 0 dB

Multiple magnitude plot have been obtained by varying K as K affects only magnitude and not phase.

If magnitude plot changes ωgc also varies

$$G(s) H(s) = \frac{K}{s(1+s/\omega_1)(1+s/\omega_2)}$$

ωpc: φ = -180° i.e. phase plot cuts -180°

# Using Bode Plot

** SN

Gain margin

* determine \(w_{pc}\) (point at which \(\phi = -180^{\circ}\))
* at \(w_{pc}\), determine mag. in \(dB\) from mag plot (\(mag = \alpha\))

$$M_{dB} = 20 \log \alpha$$

* $$GM = 20 \log \frac{1}{\alpha} = -20 \log \alpha = -M_{dB}$$

curve-1 (red) : $$\omega_{gc1} < \omega_{pc}$$ ; $$M_{dB} < 0$$ $$GM > 0$$ stable

curve-2 (black) : $$\omega_{gc2} = \omega_{pc}$$ $$M_{dB} = 0$$ $$GM = 0$$ mar. stable

curve-3 (blue) : $$\omega_{gc3} > \omega_{pc}$$ $$M_{dB} > 0$$ $$GM < 0$$ unstable

# Using Bode Plot

** SN

# Phase margin

→ determine $\omega_{gc}$ from mag. plot

i.e. $\omega$ at which $M = 0dB$

→ compute $\phi$ at this freq. from phase plot

→ $PM = 180 + \phi$

Curve-1 (red)

at $\omega_{gc1}$, $-180 < \phi < -90$

$PM = 180 + \phi > 0$ (stable)

Curve-2 (black)

at $\omega_{gc2}$, $\phi = -180$

$PM = 0^\circ$ (mar. stable)

Curve-3 (blue)

at $\omega_{gc3}$, $-270 < \phi < -180$

$PM = 180 + \phi < 0$

unstable

# Using Bode Plot

**SN

For minimum $\phi$ system

$\omega_{\mathrm{gc}} < \omega_{\mathrm{pc}}$ stable (GN>0, PN>0)

$\omega_{\mathrm{gc}} = \omega_{\mathrm{pc}}$ marginally stable (GN=0, PN=0)

$\omega_{\mathrm{gc}} > \omega_{\mathrm{pc}}$ unstable (GN<0, PN<0)

For minimum $\phi$ with zero in RHP

↓ non

(?y pc=0;)

# Summary

![img-132.jpeg](img-132.jpeg)

$$\omega_{pc} \angle G(j\omega) = -180$$

$$\omega_{gc} |G(j\omega)| = 1$$

Phase Margin = 180 + $$\angle G(j\omega)$$ | $$\omega_{gc}$$

Gain Margin = $$\frac{1}{|G(j\omega)|_{\omega_{pc}}}$$

Phase Margin = 180 + $$\angle G(j\omega)$$ | $$\omega_{gc}$$

# Summary

**
SN

|   |  | G.M. (indB) | P.M. (in) | C.L.S.  |
| --- | --- | --- | --- | --- |
|  K = K₁ | ωpc > ωgc | +ve | +ve | Stable  |
|  K = K₂ | ωpc = ωgc | 0 | 0 | M.S.  |
|  K = K₃ | ωpc < ωgc | -ve | -ve | Unstable  |

K₃ > K₂ > K₁

Minᵐ phase or Non-minᵐ φ with zero in RHP

# System with Transportation Lag

**sN

![img-133.jpeg](img-133.jpeg)

in freq. domain never

approximate $e^{-sT}$ as

$(1-sT)$

$$
\begin{array}{l} f(s) = e^{-sT} G(s) H(s) \\ = e^{-sT} T(s) \\ \end{array}
$$

$$
f(j\omega) = e^{-j\omega T} T(j\omega)
$$

$$
|f(j\omega)| = |T(j\omega)|
$$

$$
\angle f(j\omega) = -\omega T + \angle T(j\omega)
$$

# System with Transportation Lag

** SN

* phase crossover freq.

$$\angle F(j\omega) = -180$$

$$-\omega T + \angle T(j\omega) = -180^\circ$$

rad
$$\omega_{pc}$$ is diff. from $$\omega_{pc}$$ of $$T(j\omega)$$

* gain margin = $$\frac{1}{|F(j\omega)|_{\omega_{pc}}}$$

$$\therefore \omega_{pc}$$ changes
gain margin also changes

$$\omega T (deg) = \omega T \times 180 / \pi$$

# System with Transportation Lag

- gain crossover freq

$$|F(j\omega)| = 1$$

$$|T(j\omega)| = 1 \leftarrow \omega_{gc} \text{ is same as } \omega_{gc} \text{ of } T(j\omega)$$

$$* \phi = -\omega T + \angle T(j\omega) \Big|_{\omega=\omega_{gc}} \leftarrow \text{more-ve}$$

$$\rightarrow \text{diff. from } \angle T(j\omega)$$

$$PM = 180 + \phi : \text{diff. from } PM \text{ of } T(j\omega)$$

$$PM \downarrow \text{ transportation lag reduces stability}$$

* transportation lag affects $\omega_{pc}$ but not $\omega_{gc}$.

* transportation lag affects both GN & PM.

## Question - 01

$$G(s)H(s) = \frac{e^{-0.1s}}{s} \text{ Calculate } \omega_{pc} = ?$$

$$G(j\omega)H(j\omega) = \frac{e^{-j0.1\omega}}{j\omega}$$

$$\phi = -0.1\omega - \pi/2$$

$$\text{at } \omega_{pc} \quad \phi = -\pi$$

$$-0.1\omega - \pi/2 = -\pi$$

$$0.1\omega = \pi/2$$

$$\omega = 5\pi \text{ rad/s}$$

$$M = 1/\omega = 1/5\pi$$

$$GM = 5\pi$$

$$GM(dB) = 20 \log 5\pi \text{ dB}$$

# Question-02

$$G(s)H(s) = \frac{Ke^{-s}}{s}$$ Calculate K such that P.M. = $$30^{\circ}$$

$$\begin{array}{l} PM = 30 = 180 + \phi \\ \phi = -150^{\circ} \end{array}$$

$$\begin{array}{l} G(j\omega) H(j\omega) = \frac{Ke^{-j\omega}}{j\omega} \\ M = K/\omega \\ \phi = -150^{\circ} = -5\pi/6 \end{array}$$

$$\begin{array}{l} -5\pi/6 = -\omega - \pi/2 \\ \omega = \pi/3 \leftarrow \omega_{gc} \end{array}$$

$$\begin{array}{l} M = 1 \text{ at } \omega = \omega_{gc} \\ K/\omega_{gc} = 1 \\ K = \omega_{gc} = \pi/3 \end{array}$$

## Question-03

Calculate Gain and Phase Margin for the system whose frequency response is given below.

|  Angular Frequency | 2 | 3 | 4 | 5 | 6 | 8 | 10  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  Magnitude | 7.5 | 4.8 | 3.15 | 2.25 | 1.70 | 1 | 0.64  |
|  Phase | -118 | -130 | -140 | -150 | -157 | -170 | -180  |

at $\omega_{pc}$, $M = 0.64$

$$GM = 20 \log \frac{1}{0.64} = 3.876 dB$$

at $\omega_{gc}$ $\phi = -170^\circ$

$$PM = 180 + \phi = 10^\circ$$

# Question-04

Calculate Gain Margin for the system whose open loop transfer function is given

$$G(s)H(s) = \frac{1}{(s+2)(s+1)} \leftarrow \text{always stable}$$

$$GM = \infty \text{ dB}$$

# Common Data for Question 05, 06

The open loop transfer function of a unity feedback system is

given by

$$G(s) = \frac{3e^{-2s}}{s(s+2)}$$

$$G(j\omega) = \frac{3e^{-j2\omega}}{j\omega(2+j\omega)}$$

$$M = \frac{3}{\omega\sqrt{4+\omega^2}} \quad \phi = -2\omega - \pi/2 - \tan^{-1}\omega/2$$

$$\omega_{gc}: M=1$$

$$\frac{3}{\omega\sqrt{4+\omega^2}} = 1$$

$$g = 4\omega^2 + \omega^4$$

$$\omega^2 = 1.6055, -5.605$$

$$\omega_{gc} = \sqrt{1.6055}$$

$$= 1.267 \gamma/s$$

## Question-05

The gain and phase crossover frequencies rad/ sec are, respectively

- (A) 0.632 and 1.26
- (B) 0.632 and 0.485
- (C) 0.485 and 0.632
- (D) 1.26 and 0.632

$$\omega_{pc}: \phi = -\pi = -\frac{\pi}{2} - 2\omega - \tan^{-1}\omega/2$$

$$\frac{\pi}{2} - \tan^{-1}\omega/2 = 2\omega$$

$$\cot(\tan^{-1}\omega/2) = \tan 2\omega$$

$$\begin{array}{c} 2/\omega = \tan 2\omega \leftarrow \text{requires numerical} \\ \text{rad} \quad \text{technique} \end{array}$$

$$\begin{array}{l} 2/0.632 = 250/79 \quad \tan 2\omega = 3.1565 \\ = 3.164 \end{array}$$

## Question-06

Based on the above results, the gain and phase margins of the system will be

- (A) $-7.09$ dB and $87.5^\circ$
- (B) $7.09$ dB and $87.5^\circ$
- (C) $7.09$ dB and $-87.5^\circ$
- (D) $-7.09$ dB and $-87.5^\circ$

$$\text{at } \omega_{gc} = 1.267 \pi/s$$

$$\phi = -\pi/2 - 2\omega - \tan^{-1}\omega/2$$

$$= -90 - 2\omega \times 180/\pi - \tan^{-1}\omega/2$$

$$= -266.6$$

$$PM = 180 + \phi = -86.6^\circ < 0$$

unstable

GM must also

be -ve

$$\text{at } \omega_{pc} = 0.632$$

$$M = \frac{3}{\omega\sqrt{4+\omega^2}} = 2.263$$

$$M_{dB} = 20 \log 1/2.263 = -7.09 dB$$

# Question-07

The part of Nyquist plot for the open-loop transfer function of a feedback control system is shown in figure. The gain and phase margins are

(A) \(6 \mathrm{~dB}, 120^{\circ}\)
(B) \(2 \mathrm{~dB}, 60^{\circ}\)
(C) \(6 \mathrm{~dB} \cdot 30^{\circ}\)
(D) \(6 \mathrm{~dB}, 90^{\circ}\)

![img-134.jpeg](img-134.jpeg)

## Question-08

The forward path transfer function of a unity feedback system is given by

$$G(s) = \frac{1}{(1+s)^2}$$

What is the phase margin for this system?

(A) $-\pi$ rad

(B) 0 rad

(C) $\pi/2$ rad

(D) $\pi$ rad

$$G(j\omega) = \frac{1}{(1+j\omega)^2}$$

$$\phi = -2\tan^{-1}\omega$$

$$M = \frac{1}{1+\omega^2}$$

$$\omega_{gc}: M = 1$$

$$\omega_{gc} = 0$$

$$\phi = 0 \quad PM = 180 + \phi$$
$$= 180^\circ = \pi\text{ rad}$$

# Question-09

The loop transfer of a system is

$$G(s)H(s) = \frac{5}{(s+1)(2s+1)(3s+1)}$$

$$G(j\omega)H(j\omega) = \frac{5}{(1+j\omega)(1+j2\omega)(1+j3\omega)}$$

$$\text{at } f_c = 0.16 \text{ Hz} \quad \omega_c = 2\pi f_c = 1.0053 \text{ rad/s}$$

Which has the phase crossover frequency $f_c = 0.16$ Hz. The gain margin dB of the system is

(A) 6

(B) 4
(C) 2
(D) 0

$$M = \frac{5}{\sqrt{1+\omega^2} \sqrt{1+4\omega^2} \sqrt{1+9\omega^2}}$$

$$\text{at } \omega_{pc} \quad M = 0.4942$$

$$GM = 20 \log \frac{1}{0.4942}$$
$$= 6 \text{ dB}$$

# Question-10

The loop transfer function of a feedback control system is given by,

$$G(s)H(s) = \frac{1}{s(s+1)(9s+1)} \leftarrow \text{type-01/order-03}$$

Its phase crossover frequency (in rad/s), approximated to two decimal places, is

time constant $$(s+1) : T_1 = 1 \text{sec}$$

$$(9s+1) : T_2 : 9 \text{sec}$$

$$\omega_{pc} = \frac{1}{\sqrt{T_1 T_2}} = \frac{1}{3} \text{ r/s}$$

# Question-11

The phase margin (in degree) of the system

$$G(s) = \frac{10}{s(s+10)}$$

is

$$G(j\omega) = \frac{10}{j\omega(10+j\omega)}$$

$$M = \frac{10}{\omega\sqrt{100+\omega^2}} \quad \phi = -90 - \tan^{-1}\omega/10$$

$$\text{at } \omega_{gc} \quad M = 1 \quad \frac{10}{\omega\sqrt{100+\omega^2}} = 1$$

$$100 = \omega^4 + 100\omega^2$$

$$\omega^4 + 100\omega^2 - 100 = 0$$

$$\omega^2 = 0.9902, -100.9902^x$$

$$\omega = 0.995 \pi/s$$

$$\phi = -95.68^\circ$$

$$PM = 180 + \phi = 84.3^\circ$$

# Question-12

The phase margin of the transfer function

$$GH(s) = \frac{1}{s(s+1)}$$

In degree is

$$GH(j\omega) = \frac{1}{j\omega(1+j\omega)}$$

$$\phi = -90 - tan^{-1}\omega$$

$$\mu = \frac{1}{\omega\sqrt{1+\omega^2}}$$

$$\omega_{gc}: \mu = 1 \quad \frac{1}{\omega\sqrt{1+\omega^2}} = 1$$

$$\omega^4 + \omega^2 - 1 = 0$$

$$\omega^2 = 0.618, -1.618^x$$

$$\omega_{gc} = 0.786 \text{ rad/s}$$

$$\phi = -128.16^\circ$$

$$\rho_M = 180 + \phi$$

$$= 51.83^\circ$$

# Question-13

The open-loop transfer function of a unity feedback system is

$$G(s) = \frac{K}{s(s+5)}$$

The gain K that results in a phase margin of 45° is

$$\omega = \omega_{gc}; \quad M = 1$$

$$PM = 180 + \phi = 45 \quad \phi = -135^\circ$$

$$G(j\omega) = \frac{K}{j\omega(5+j\omega)} \quad M = \frac{K}{\omega\sqrt{25+\omega^2}}$$

$$\phi = -90 - \tan^{-1} \omega/5 = -135$$

$$\tan^{-1} \omega/5 = 45^\circ$$

$$\omega = 5 \leftarrow \omega_{gc}$$

$$M = 1$$

$$K = \omega\sqrt{25+\omega^2}$$

$$= 5\sqrt{50} = 25\sqrt{2}$$

$$= 35.35$$

# Question-14

The phase margin of a system with the open loop transfer function

$$G(s)H(s) = \frac{(1-s)}{(1+s)(2+s)}$$

(A) \(0^{\circ}\)
(B) \(63.4^{\circ}\)
(C) \(90^{\circ}\)

$$\textcircled{D} \infty$$

$$GH(j\omega) = \frac{(1-j\omega)}{(1+j\omega)(2+j\omega)}$$

$$M = \frac{\sqrt{1+\omega^2}}{\sqrt{1+\omega^2}\sqrt{4+\omega^2}} = \frac{1}{\sqrt{4+\omega^2}} = 1$$

$$4+\omega^2 = 1$$

$$\omega = \pm j\sqrt{3} : imag.$$

no $\omega_{gc}$ exists

# Question-15

$$\begin{array}{l} 1 - 2\omega^2 = -1 \\ 2\omega^2 = 2 \quad \omega = 1 \pi/s \end{array}$$

The phase crossover frequency for the open loop transfer function

$$G(s)H(s) = \frac{20}{(s+1)(s+\frac{1}{2})(s+\frac{1}{3})}, \text{ is}$$

(A) 1.0rad/sec
(B) 2.0rad/sec
(C) \(\sqrt{2}\) rad/sec
(D) \(\sqrt{3}\) rad/sec

$$GH(j\omega) = \frac{20}{(1+j\omega)(\frac{1}{2}+j\omega)(\frac{1}{3}+j\omega)}$$

$$\phi = -\tan^{-1}\omega - \tan^{-1}2\omega - \tan^{-1}3\omega = -180$$

$$180 - \tan^{-1}3\omega = \tan^{-1}\omega + \tan^{-1}2\omega$$

$$\begin{array}{l} \tan(180 - \tan^{-1}3\omega) = \tan(\tan^{-1}\frac{3\omega}{1-2\omega^2}) \\ -3\omega = 3\omega/1-2\omega^2 \end{array}$$

# Question-16

The gain margin and the phase margin of a feedback system With

$$G(s)H(s) = \frac{s}{(s+100)^3}$$ are

(A) \(0 \mathrm{~dB}, 0^{0}\)
(C) \(\infty, 0^0\)
(D) \(88.5 \mathrm{~dB}, \infty\)

$$G(j\omega)H(j\omega) = \frac{j\omega}{(100+j\omega)^3}$$

$$M = \omega / (10^4 + \omega^2)^{3/2} \quad \phi = 90 - 3 \tan^{-1} \omega / 100$$

$$\begin{array}{l} \omega_{pc}: \phi = -180 \\ -180 = 90 - 3 \tan^{-1} \omega / 100 \\ \tan^{-1} \omega / 100 = 90 \quad \omega \rightarrow \infty \\ M = 0 \quad GM = 20 \log 1/M = \infty \end{array}$$

$$\omega_{gc}: \quad M = 1$$

$$\omega^2 / (10^4 + \omega^2)^3 = 1$$

$$\omega^2 = 10^{12} + \omega^6 + 3 \times 10^4 \omega^4 + 3 \times 10^8 \omega^2$$

$$\omega^6 + 3 \times 10^4 \omega^4 + 3 \times 10^8 \omega^2 + 10^{12} = 0$$

$$(\omega^2 + 10^4)^3 = 0$$

$$\omega: \text{imag}$$

$$PM = \omega$$

# Question-17

$$\begin{array}{l} F(s) = K_{f/s} G(s) \quad F(j\omega) = K_{f/j\omega} G(j\omega) \\ \phi = \angle G(j\omega) - 90^\circ \end{array}$$

Consider the stable closed-loop system shown in the figure. The magnitude and phase values of the frequency response of $G(s)$ are given in the table. The value of the gain $K_1 (> 0)$ for a $50^\circ$ phase margin is ______ (rounded off to 2 decimal places). $\text{PM} = 50 \approx 180 + \phi$

|  ω in rad / sec | Magnitude in dB | Phase in degrees  |
| --- | --- | --- |
|  0.5 ✓ | -7 | -40  |
|  1.0 | -10 | -80  |
|  2.0 | -18 | -130  |
|  10.0 | -40 | -200  |

![img-135.jpeg](img-135.jpeg)

when $\angle G(j\omega) = -40^{\circ}$

$|G(j\omega)| = -7dB \quad \omega = 0.5$

$M = |F(j\omega)| = K_{f/\omega} |G(j\omega)|$

$M_{dB} = 20 \log K_{f} - 20 \log \omega$
$+ 20 \log |G(j\omega)|$

$^{\circ}$: at Phase margin, $\omega = \omega_{gc}$
$M = 1 = 0dB$

$20 \log K_{f} - 20 \log 0.5 - 7 = 0$

$20 \log K_{f} + 6 - 7 = 0$

$20 \log K_{f} = 1$

$\log K_{f} = 0.05$

$K_{f} = 10^{0.05} = 1.122$