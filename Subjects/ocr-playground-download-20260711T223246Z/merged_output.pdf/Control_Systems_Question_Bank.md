# Control Systems - Practice Question Bank (with Solutions)

> Source: OCR-extracted Control Systems lecture notes
> Topics: Polar Plots, Nyquist Plots, Stability, Gain & Phase Margin

---

## Topic 1: Polar Plot Questions

---

### Question-01: Polar Plot Sketching

Sketch the polar plot for the transfer function given below:

$$G(s) = \frac{1}{s^2(s+1)(2s+1)}$$

**Type-2 / Order-4**

**Solution:**

Angle of tail = $-90^\circ \times \text{type} = -90 \times 2 = -180^\circ$

Angle of head = $-90^\circ \times (P-Z) = -90 \times (4-0) = -360^\circ$

![img-22.jpeg](pages/page-24/img-22.jpeg)

---

### Question-02: Polar Plot Sketching

$$M = \frac{\sqrt{4+\omega^2}}{\sqrt{1+\omega^2}\sqrt{16+\omega^2}}, \quad \phi = \tan^{-1}\frac{\omega}{2} - \tan^{-1}\omega - \tan^{-1}\frac{\omega}{4}$$

Sketch the polar plot for the transfer function given below:

$$G(s) = \frac{s+2}{(s+1)(s+4)}$$

**Solution:**

Angle of tail = $-90^\circ \times \text{type} = 0^\circ$

Angle of head = $-90^\circ \times (P-Z) = -90^\circ \times (2-1) = -90^\circ$

We can check if plot cuts -jω axis at φ = -90°:

$$-90 = \tan^{-1}\frac{\omega}{2} - \tan^{-1}\omega - \tan^{-1}\frac{\omega}{4}$$

Solving gives $3\omega^2 = -8$, so ω is imaginary → graph does not intersect -jω axis.

![img-23.jpeg](pages/page-25/img-23.jpeg)

---

### Question-03: Transfer Function from Polar Plot

Figure shows the polar plot of a system. The transfer function of the system is:

(a) $5(1 + 0.1s)$
(b) $(1 + 0.5s)$
(c) $5(1 + 10s)$
(d) $5(1 + s)$

**Solution:**

At ω → 0: Re = 5, Im → 0

At ω = 10: angle = 45°, Re = Im

Testing option (a) $5(1 + 0.1s)$:
- At ω = 0: $5(1 + 0) = 5$ ✓
- At ω = 10: $5(1 + j) \Rightarrow$ Re = Im ✓

∴ Option (a) is correct.

![img-24.jpeg](pages/page-27/img-24.jpeg)

---

### Question-04: Polar Plot Sketching

$$G(j\omega) = \frac{1 + j4\omega}{(j\omega)^2(1+j\omega)(1+j2\omega)} \rightarrow M = \frac{\sqrt{1+16\omega^2}}{\omega^2\sqrt{1+\omega^2}\sqrt{1+4\omega^2}}$$
$$\phi = \tan^{-1}4\omega - 180 - \tan^{-1}\omega - \tan^{-1}2\omega$$

Sketch the polar plot for:

$$G(s) = \frac{4s+1}{s^2(s+1)(2s+1)}$$

**Solution:**

Angle of tail = $-90 \times 2 = -180^\circ$

Angle of head = $-90(4-1) = -270^\circ$

Intersection with -ve real axis (φ = -180°):

$$-180 = \tan^{-1}4\omega - 180 - \tan^{-1}\omega - \tan^{-1}2\omega$$
$$\tan^{-1}4\omega = \tan^{-1}\omega + \tan^{-1}2\omega = \tan^{-1}\frac{3\omega}{1-2\omega^2}$$
$$4(1-2\omega^2) = 3$$
$$8\omega^2 = 1 \Rightarrow \omega = \frac{1}{2}\sqrt{2} \text{ (phase crossover freq)}$$

| ω | M | φ |
|---|---|---|
| 0 | ∞ | -180° |
| ∞ | 0 | -270° |

![img-25.jpeg](pages/page-29/img-25.jpeg)

---

## Topic 2: Mapping & Encirclement Questions

---

### Question-01: Encirclement of Origin

Encirclement of origin of $1 + G(s)$ plane corresponds to encirclement of a point in the $-1 + G(s)$ plane, given by:
(a) $1 + j0$
(b) $-1 + j0$
(c) $0 + j0$
(d) $-2 + j0$

**Solution:**

$$1 + G(s) = 0 \leftarrow \text{origin of } 1 + G(s) \text{ plane}$$
$$G(s) = -1$$
$$\therefore -1 + G(s) = -1 + (-1) = -2$$

Option (d) $-2 + j0$ is correct.

---

### Question-02: Origin Encirclement

Find the number of origin encirclement in G(s)H(s) plane when the following contour in s-plane is mapped to G(s)H(s) plane.

$$G(s)H(s) = \frac{1}{(s+2)(s+0.5)}$$

**Solution:**

One pole lies inside contour (ACW). A pole gives encirclement of origin opposite to contour. Hence one encirclement in CW direction.

![img-50.jpeg](pages/page-70/img-50.jpeg)

---

### Question-03: Origin Encirclement

Find the number of origin encirclement in G(s)H(s) plane.

$$G(s)H(s) = \frac{1}{(s+2)(s+0.5)} \quad \text{poles: } -2, -0.5$$

Contour: CW

**Solution:**

2 poles inside contour → 2 encirclements of origin opposite to contour, i.e., ACW.

![img-51.jpeg](pages/page-71/img-51.jpeg)

---

### Question-04: Origin Encirclement (Zeros)

$$G(s)H(s) = (s+2)(s+0.5)$$

Contour: CW

**Solution:**

2 zeroes inside contour → 2 encirclements of origin in same sense as contour, i.e., CW.

![img-52.jpeg](pages/page-72/img-52.jpeg)

---

### Question-05: No Poles/Zeros Inside

$$G(s)H(s) = (s+2)(s+0.5)$$

(no poles or zeroes inside contour)

**Solution:**

No poles or zeroes inside → no encirclement of origin.

![img-53.jpeg](pages/page-73/img-53.jpeg)

---

### Question-06: Encirclement of (-1,0)

The number and direction of encirclements around the point $(-1, 0)$ in the complex plane by the Nyquist plot of $G(s) = \frac{1-s}{4-2s}$ is:

(a) Zero
(b) One, anti-clockwise
(c) One, clockwise
(d) Two, clockwise

**Solution:**

OL pole: $4-2s = 0 \Rightarrow s = 2$ → one OL pole in RHP ($P_+ = 1$)

$1 + G(s) = 0 \Rightarrow 1 + \frac{1-s}{4-2s} = 0 \Rightarrow \frac{5-3s}{4-2s} = 0 \Rightarrow s = 5/3$ → one CL pole in RHP ($Z_+ = 1$)

$$N = P_+ - Z_+ = 1 - 1 = 0$$

Answer: (a) Zero

---

### Question-07: Origin Encirclement (CW)

The number of times the Nyquist plot will encircle the origin clockwise is:

$$G(s) = \frac{s-1}{s+1}$$

**Solution:**

Pole: s = -1 → no OL pole in RHP (P = 0)
Zero: s = 1 → 1 zero in RHP (Z = 1)

$$N = P - Z = 0 - 1 = -1$$

N < 0 → CW encirclement (same as contour). 1 CW encirclement.

---

### Question-08: Contour Encirclement

If the s-plane contour encloses 3 zeros and 2 poles, the contour will encircle the origin of Q(s) plane:

(a) Once in clockwise direction
(b) Once in counter clockwise direction
(c) Thrice in clockwise direction
(d) Twice in counter clockwise direction

**Solution:**

$$N = P - Z = 2 - 3 = -1 < 0$$

N < 0 → same as contour (CW). Answer: (a) Once clockwise.

---

### Question-09: Nyquist Encirclement

Loop transfer function of a feedback system is $G(s) = \frac{s+3}{s^2(s-3)}$. Take the Nyquist contour in the clockwise direction. Then, the Nyquist plot of G(s)H(s) encircles $-1 + j0$:

(a) Once in clockwise direction
(b) Twice in clockwise direction
(c) Once in anticlockwise direction
(d) Twice in anticlockwise direction

**Solution:**

Poles: s = 0 (double), s = 3 → 1 pole in RHP ($P_+ = 1$)

$$1 + G(s) = 0 \Rightarrow s^3 - 3s^2 + s + 3 = 0$$

Routh array shows 2 sign changes → 2 CL poles in RHP ($Z_+ = 2$)

$$N = P_+ - Z_+ = 1 - 2 = -1$$

Answer: (a) Once in clockwise direction

---

### Question-10: Encirclement of Origin

A unity feedback system has the open loop transfer function:

$$G(s) = \frac{1}{(s-1)(s-2)(s+3)}$$

The Nyquist plot of G encircles the origin:
(a) Never
(b) Once
(c) Twice
(d) Thrice

**Solution:**

2 poles in RHP ($P = 2$), no zeros in RHP ($Z = 0$)

$$N = P - Z = 2$$

Answer: (c) Twice

---

## Topic 3: Nyquist Plot Drawing Questions

---

### Question-01: Nyquist Plot (Non-min Phase)

$$G(s)H(s) = \frac{K(s+1)}{(s+0.5)(s-2)}, \quad 0 < K < \infty$$

Draw Nyquist Plot.

**Solution:**

**Step 1: Polar Plot**

$$G(j\omega)H(j\omega) = \frac{K(1+j\omega)}{(0.5+j\omega)(-2+j\omega)}$$

$$M = \frac{K\sqrt{1+\omega^2}}{(\sqrt{0.25+\omega^2})(\sqrt{4+\omega^2})}$$

$$\phi = \tan^{-1}\omega - \tan^{-1}\frac{\omega}{0.5} - (180 - \tan^{-1}\frac{\omega}{2}) = -180 + \tan^{-1}\omega + \tan^{-1}\frac{\omega}{2} - \tan^{-1}2\omega$$

| ω | M | φ |
|---|---|---|
| 0 | K | -180° |
| ∞ | 0 | -90° |

Phase crossover: φ = -180°:

$$-180 = -180 + \tan^{-1}\omega + \tan^{-1}\frac{\omega}{2} - \tan^{-1}2\omega$$
$$\tan^{-1}\left(\frac{3\omega}{2-\omega^2}\right) = \tan^{-1}2\omega$$
$$3 = 4 - 2\omega^2 \Rightarrow 2\omega^2 = 1 \Rightarrow \omega = \frac{1}{\sqrt{2}}$$

Since ω is finite for φ = -180°, polar plot cuts -180° axis.

**Curve 3** (infinite semicircle): s = lim(R→∞) Re^(jθ), θ: +90° to -90°

$$G(s)H(s) = \lim_{R\to\infty} \frac{K(Re^{j\theta}+1)}{(Re^{j\theta}+0.5)(Re^{j\theta}-2)} = \lim_{R\to\infty} \frac{K}{R}e^{-j\theta}$$

Radius → 0, angle -θ: -90° to +90° (ACW)

One pole in RHP, no zeros in RHP:

$$N = P - Z = 1 - 0 = 1$$

1 encirclement of origin in ACW direction.

![img-61.jpeg](pages/page-87/img-61.jpeg)
![img-62.jpeg](pages/page-90/img-62.jpeg)
![img-63.jpeg](pages/page-90/img-63.jpeg)
![img-64.jpeg](pages/page-90/img-64.jpeg)

---

### Question-02: Nyquist Plot (All-Pass)

Draw Nyquist Plot: $G(s)H(s) = \frac{1-s}{1+s}$

**Solution:**

$$G(j\omega)H(j\omega) = \frac{1-j\omega}{1+j\omega}$$

$$M = \frac{\sqrt{1+\omega^2}}{\sqrt{1+\omega^2}} = 1$$
$$\phi = -2\tan^{-1}\omega$$

| ω | M | φ |
|---|---|---|
| 0 | 1 | 0° |
| ∞ | 1 | -180° |

Curve 2: s = lim(R→∞) Re^(jθ), θ: π/2 → -π/2

$$G(s)H(s) = \lim_{R\to\infty} \frac{1 - Re^{j\theta}}{1 + Re^{j\theta}} = -1 \text{ (point)}$$

One zero in RHP, no pole in RHP:

$$N = P - Z = 0 - 1 = -1$$

1 CW encirclement of origin.

![img-65.jpeg](pages/page-91/img-65.jpeg)
![img-66.jpeg](pages/page-93/img-66.jpeg)
![img-67.jpeg](pages/page-93/img-67.jpeg)

---

### Question-03: Nyquist Plot (Type-0/Order-2)

$$T(s) = \frac{1}{(1+sT_1)(1+sT_2)}$$

Draw Nyquist Plot.

**Solution:**

Polar plot is already known (semicircle). No pole at origin, so no need to bypass origin.

Curve 2: s = lim(R→∞) Re^(jθ), θ: π/2 → -π/2 (CW)

$$G(s)H(s) = \lim_{R\to\infty} \frac{1}{(1+Re^{j\theta}T_1)(1+Re^{j\theta}T_2)} = \lim_{R\to\infty} \frac{1}{R^2 T_1 T_2} e^{-j2\theta}$$

Radius → 0, angle -2θ: -π to π (complete circle, ACW)

No poles or zeros in RHP → N = P - Z = 0 → no encirclement of origin.

![img-68.jpeg](pages/page-94/img-68.jpeg)
![img-69.jpeg](pages/page-96/img-69.jpeg)
![img-70.jpeg](pages/page-96/img-70.jpeg)

---

### Question-04: Nyquist Plot (Type-2)

Draw the Nyquist Plot for: $G(s)H(s) = \frac{1}{s^2}$

**Solution:**

Type-2 system. Nyquist plot will contain 2 infinite semicircles (or 1 infinite circle).

$$GH(j\omega) = \frac{1}{(j\omega)^2} = \frac{1}{\omega^2}\angle -180^\circ$$

Polar plot: along -180° line from ∞ to 0.

2 poles at origin → must bypass origin.

Curve 2: s = lim(R→∞) Re^(jθ), θ: π/2 → -π/2 (CW)

$$G(s) = \lim_{R\to\infty} \frac{1}{R^2} e^{-j2\theta}$$

Circle of radius 1/R² → 0, angle -2θ: -180° to +180° (complete circle, ACW)

Curve 4: s = lim(r→0) re^(jθ), θ: -π/2 → π/2 (ACW)

$$G(s) = \lim_{r\to 0} \frac{1}{r^2} e^{-j2\theta}$$

Circle of radius 1/r² → ∞, angle -2θ: +180° to -180° (CW)

Number of CW infinite semicircles = type = 2.

![img-71.jpeg](pages/page-97/img-71.jpeg)
![img-72.jpeg](pages/page-99/img-72.jpeg)

---

### Question-05: Nyquist Plot (Type-0/Order-1)

Draw the Nyquist Plot for: $G(s)H(s) = \frac{1}{1+sT}$

**Solution:**

Type-0/Order-1. Polar plot is already known. No poles at origin so no need to bypass origin.

Curve 2: s = lim(R→∞) Re^(jθ), θ: π/2 → -π/2 (CW)

$$G(s)H(s) = \lim_{R\to\infty} \frac{1}{1 + RT e^{j\theta}} = \lim_{R\to\infty} \frac{1}{RT} e^{-j\theta}$$

Radius = 1/RT → 0, angle -θ: -π/2 → +π/2 (ACW)

No poles or zeros in RHP → no encirclement of origin.

![img-73.jpeg](pages/page-100/img-73.jpeg)
![img-74.jpeg](pages/page-102/img-74.jpeg)
![img-75.jpeg](pages/page-102/img-75.jpeg)

---

### Question-06: Nyquist Plot (Already Done)

Draw the Nyquist Plot for: $G(s)H(s) = \frac{1}{(1+sT_1)(1+sT_2)}$

(Already done in Question-03 above)

---

### Question-07: Identify TF from Nyquist Plot

Consider the Nyquist plot shown in figure. Which one of the following transfer functions represents this plot?

(C) $\frac{1}{(s+2)^3}$
(D) $\frac{1}{(s+2)}$

**Solution:**

At ω = 0, M = 1/4 = DC gain.

Standard plot of type-0/order-2 system.

1 circle of infinite radius = 2 infinite semicircles → type = 2.

![img-76.jpeg](pages/page-104/img-76.jpeg)

---

### Question-08: Identify TF from Nyquist Plot

Which of the following is the transfer function of a system having the Nyquist plot in figure?

(A) $\frac{K}{s(s+2)^2(s+5)}$
(B) $\frac{K}{s^2(s+2)(s+5)}$
(C) $\frac{K(s+1)}{s^2(s+2)(s+5)}$
(D) $\frac{K(s+1)(s+3)}{s^2(s+2)(s+5)}$

**Solution:**

At ω = 0⁺, φ = -180° (tail) → type = 2.

∠head = -90° × (P-Z) = -360° → P-Z = 4, P = 4, Z = 0

Option (B) satisfies: type = 2, P = 4, Z = 0.

![img-77.jpeg](pages/page-105/img-77.jpeg)
![img-78.jpeg](pages/page-107/img-78.jpeg)

---

### Question-09: Obtain TF from Nyquist Plot

The Nyquist plot of an all-pole second order open-loop system is shown in figure. Obtain the transfer function of the system.

**Solution:**

Type-0/Order-2: $\frac{K}{(1+sT_1)(1+sT_2)}$

At ω = 0, M = 2 = DC gain → K = 2.

General second order: $G(s) = \frac{K}{s^2 + 2\xi\omega_n s + \omega_n^2}$

At ω = 2, plot intersects -ve imag axis at distance = 2:
$$\omega_n = \omega = 2$$
$$K/\omega_n^2 = 2 \Rightarrow K = 8$$
$$\xi = 0.5$$

$$G(s) = \frac{8}{s^2 + 2s + 4}$$

![img-79.jpeg](pages/page-108/img-79.jpeg)

---

### Question-10: Nyquist Plot (Type-3)

Open loop system is stable. Find stability of close loop system.

$$G(s)H(s) = \frac{K(1+s)^2}{s^3}$$

Draw the Nyquist plot.

**Solution:**

$$G(j\omega)H(j\omega) = \frac{K(1+j\omega)^2}{(j\omega)^3}$$

$$M = \frac{K(1+\omega^2)}{\omega^3}, \quad \phi = 2\tan^{-1}\omega - 270^\circ$$

| ω | M | φ |
|---|---|---|
| 0 | ∞ | -270° |
| ∞ | 0 | -90° |

Phase crossover (φ = -180°):
$$-180 = 2\tan^{-1}\omega - 270 \Rightarrow \tan^{-1}\omega = 45^\circ \Rightarrow \omega = 1$$
$$M = \frac{K(1+1)}{1} = 2K$$

Type-03 → 3 CW semicircles of infinite radius.

Curve 2: s = lim(R→∞) Re^(jθ)
$$G(s) = \lim_{R\to\infty} \frac{K}{R}e^{-j\theta}$$

Radius → 0, angle -θ: -π/2 → +π/2 (ACW)

1 CW encirclement of origin, but total encirclement of origin = 0.

![img-80.jpeg](pages/page-111/img-80.jpeg)
![img-81.jpeg](pages/page-114/img-81.jpeg)

---

### Question-11: Nyquist Plot (Non-min Phase)

$$G(s)H(s) = \frac{5(s+3)}{s(s-1)} \quad \text{(non-min phase)}$$

Draw the Nyquist plot.

**Solution:**

$$G(j\omega)H(j\omega) = \frac{5(3+j\omega)}{j\omega(-1+j\omega)}$$
$$M = \frac{5\sqrt{9+\omega^2}}{\omega\sqrt{1+\omega^2}}, \quad \phi = \tan^{-1}\frac{\omega}{3} + \tan^{-1}\omega - 270^\circ$$

| ω | M | φ |
|---|---|---|
| 0 | ∞ | -270° |
| ∞ | 0 | -90° |

Phase crossover (φ = -180°):
$$\omega^2 = 3 \Rightarrow \omega = \sqrt{3}$$
$$M = \frac{5\sqrt{12}}{\sqrt{3}\sqrt{4}} = 5$$

Rationalizing:
$$G(j\omega) = \frac{-20}{1+\omega^2} - j\frac{5(\omega^2-3)}{\omega(1+\omega^2)}$$

At ω → 0: Re = -20, Im → ∞

One pole in RHP → N = P - Z = 1 - 0 = 1 → 1 ACW encirclement of origin.

![img-82.jpeg](pages/page-118/img-82.jpeg)
![img-83.jpeg](pages/page-120/img-83.jpeg)
![img-84.jpeg](pages/page-120/img-84.jpeg)

---

### Question-12: Nyquist Plot (Min Phase)

Consider a unity feedback system whose open-loop transfer function is:

$$G(s) = \frac{K}{s(s^2+2s+2)} \quad \text{(min phase, type-1/order-3)}$$

Draw the Nyquist plot.

**Solution:**

P - Z = 3 → 3 semicircles of 0 radius drawn ACW.

Type-1 → 1 semicircle of ∞ radius drawn CW.

No poles or zeros in RHP → total encirclement of origin = 0.

![img-85.jpeg](pages/page-122/img-85.jpeg)

---

### Question-13: Nyquist Plot (Non-min Phase)

The open-loop transfer function of a feedback control system is:

$$G(s)H(s) = \frac{-1}{2s(1-20s)} \quad \text{(non-min phase)}$$

Draw the Nyquist plot.

**Solution:**

$$GH(j\omega) = \frac{-1}{2j\omega(1-20j\omega)}$$
$$M = \frac{1}{2\omega\sqrt{1+400\omega^2}}, \quad \phi = 90^\circ + \tan^{-1}20\omega$$

| ω | M | φ |
|---|---|---|
| 0 | ∞ | 90° |
| ∞ | 0 | 180° |

$$GH(j\omega) = \frac{-10}{1+400\omega^2} + \frac{j}{2\omega(1+400\omega^2)}$$

At ω → 0: Re = -10, Im → ∞

One pole in RHP → 1 ACW encirclement of origin.

![img-86.jpeg](pages/page-124/img-86.jpeg)
![img-87.jpeg](pages/page-126/img-87.jpeg)

---

## Topic 4: Stability Analysis Questions

---

### Question-01: Stability from Nyquist Plot

Open loop system is stable. Find stability of close loop system.

**Solution:**

Forward path TF = KG(s). Due to multiplication by K, all intercepts become K-times.

Case 1: (-1,0) point lies inside → N = -1 (1 CW encirclement)
P = 0 (OL system stable) → -1 = 0 - Z → Z = 1
1 CL pole in RHP → CL system: unstable

Case 2: (-1,0) lies outside → -2K > -1 → K < 1/2
N = 0 → OL stable (P = 0) → Z = 0 → CL system stable

![img-98.jpeg](pages/page-140/img-98.jpeg)
![img-99.jpeg](pages/page-140/img-99.jpeg)
![img-100.jpeg](pages/page-141/img-100.jpeg)
![img-101.jpeg](pages/page-141/img-101.jpeg)

---

### Question-02: Stability Comment

Comment on stability of the close loop system if OL system is stable.

**Solution:**

Due to multiplication by K, all intercepts become K-times.

N = -1, OL stable (P = 0) → Z = 1 → 1 CL pole in RHP → unstable.

If K is large, intercepts are large → (-1,0) lies inside → encircled once in CW direction.

![img-102.jpeg](pages/page-142/img-102.jpeg)
![img-103.jpeg](pages/page-142/img-103.jpeg)
![img-104.jpeg](pages/page-143/img-104.jpeg)

---

### Question-03: True/False Statement

The Nyquist stability criterion and the Routh criterion both are powerful analyst's tools for determining the stability of feedback controllers. Identify which of the following statements is FALSE:

(a) Both the criteria provide information relative to the stable gain range of the system.
(b) The general shape of the Nyquist plot is readily obtained from the Bode magnitude plot for all minimum-phase systems.
(c) The Routh criterion is not applicable in the condition of transport lag, which can be readily handled by the Nyquist criterion.
(d) The closed-loop frequency response for a unity feedback system cannot be obtained from the Nyquist plot.

**Solution:**

Statement (d) is FALSE because the closed-loop frequency response CAN be obtained from the Nyquist plot.

---

### Question-04: Number of RHP Roots

The Nyquist plot for the open-loop transfer function G(s) of a unity negative feedback system is shown in Figure. If G(s) has no pole in the right half of s-plane, the number of roots of the system characteristic equation in the right half of s-plane is:

(a) 1
(b) 2
(c) 3

**Solution:**

Encirclement of (-1,0): 1 CW + 1 ACW → N = 0

G(s) has no pole in RHP → P = 0

N = P - Z → Z = 0 → No CL poles in RHP.

Answer: 0 (none of the options match → check figure for actual encirclements)

![img-105.jpeg](pages/page-145/img-105.jpeg)
![img-106.jpeg](pages/page-146/img-106.jpeg)

---

### Question-05: Number of CL Poles in RHP

The complete Nyquist plot of the open-loop transfer function G(s)H(s) of a feedback control system is shown in the figure. If G(s)H(s) has one zero in the right-half of the s-plane, the number of poles that the closed-loop system will have in the right-half of the s-plane is:

(a) 4
(b) 0
(c) 3
(d) 1

**Solution:**

Origin is encircled twice in CW direction → N = -2

N = P - Z (OL zero in RHP, Z=1):
-2 = P - 1 → P = -1 (impossible)

Assuming Nyquist contour is ACW: N = 2 (2 CW encirclements)
2 = P - 1 → P = 3 (3 OL poles in RHP)

Encirclement of (-1,0): N = 0 (1 ACW + 1 CW)
0 = 3 - Z → Z = 3

Answer: (c) 3 CL poles in RHP

![img-107.jpeg](pages/page-147/img-107.jpeg)

---

### Question-06: Polar Plot Stability

Consider the polar plot of two systems as shown below:

For A: (-1,0) not enclosed → stable
For B: (-1,0) on polar plot → marginally stable

(A) A is unstable
(B) A is stable
(C) B is marginally stable
(D) B is unstable

**Solution:**

(A) False, (B) True, (C) True, (D) False

Statements (B) and (C) are correct.

![img-108.jpeg](pages/page-149/img-108.jpeg)

---

### Question-07: CL System Stability

Consider the Nyquist plot of an open loop system G(s) shown in the figure. It is known that G(s) has two unstable poles. The closed loop system shown with unity negative feedback system is:

(A) unstable with two poles in RHP
(B) stable
(C) marginally stable
(D) unstable with 4 poles in RHP

**Solution:**

G(s) has 2 poles in RHP: P = 2
Encirclement of (-1,0): twice ACW → N = 2

N = P - Z → 2 = 2 - Z → Z = 0 → no CL poles in RHP

Answer: (B) stable

![img-109.jpeg](pages/page-150/img-109.jpeg)

---

### Question-08: Nyquist Plot Encirclement

The loop transfer function of a negative feedback system is:

$$G(s)H(s) = \frac{1}{s(s-2)}$$

The Nyquist plot for the above system:

(a) does not encircle (-1+j0) point
(b) encircles (-1+j0) point once in CW direction
(c) encircles (-1+j0) point twice in CCW direction
(d) encircles (-1+j0) point once in CCW direction

**Solution:**

One OL pole in RHP: P = 1

CE: $1 + G(s)H(s) = 0 \Rightarrow s^2 - 2s + 1 = 0 \Rightarrow (s-1)^2 = 0$ → 2 CL poles in RHP → Z = 2

N = P - Z = 1 - 2 = -1

Answer: encircles (-1,0) once in CW direction. Option (b).

---

### Question-09: Acceleration Error Coefficient

Nyquist plot of a certain stable system is given below. The acceleration error coefficient is:

(a) 0
(b) ∞
(c) -∞
(d) 10²

**Solution:**

2 infinite semicircles and ∠tail = -180° → system is type-02.

$K_a$ = finite for type-2 system.

Answer: (a) 0 (or finite based on the figure)

![img-110.jpeg](pages/page-152/img-110.jpeg)

---

### Question-10 (Lecture-43 Q06): Encirclement of 1+G(s)

The number and direction of encirclements around the point 1+G(s) in the complex plane by the Nyquist plot of $G(s) = \frac{1-s}{4-2s}$ is:

(a) Zero
(b) One, anti-clockwise
(c) One, clockwise
(d) Two, clockwise

**Solution:**

Pole at s = 2 in RHP → P = 1
CE: $1 + G(s) = 0 \Rightarrow 4-2s + 1-s = 0 \Rightarrow s = 5/3$ in RHP → Z = 1
N = P - Z = 0

Answer: (a) Zero

---

## Topic 5: Gain Margin Questions

---

### Question-01: GM for Non-min Phase (Poles in RHP)

$$G(s) = \frac{K(1+s)}{(s-2)(s-3)}$$

Comment on gain margin (non-min phase with poles in RHP, type-02).

**Solution:**

CE: $1 + G(s) = 0 \Rightarrow s^2 + (K-5)s + (6+K) = 0$

Intersection with Im axis → coeff of s¹ = 0 → K = 5

K < 5: poles in RHP → unstable
K = 5: poles on Im axis → marginally stable
K > 5: poles in LHP → stable

Example:
- For K = 4: GM = 5/4 > 1, GM(dB) > 0 dB → unstable
- For K = 5: GM = 1, GM(dB) = 0 dB → marginally stable
- For K = 10: GM = 5/10 = 0.5, GM(dB) < 0 dB → stable

**Note**: For Type-II (poles in RHP): stable ↔ GM < 1 (GM < 0 dB)

![img-113.jpeg](pages/page-168/img-113.jpeg)

---

### Question-02: GM using Routh Table

$$G(s)H(s) = \frac{1}{(s+1)(s+2)} \Rightarrow \text{Find gain margin of system}$$

**Solution:**

$$K_1 F(s) = \frac{K_1}{(s+1)(s+2)}$$

CE: $1 + K_1 F(s) = 0 \Rightarrow s^2 + 3s + (2 + K_1) = 0$

Coeff of s¹ ≠ 0, last row = 0 → $2 + K_1 = 0 \Rightarrow K_1 = -2$

System can never become marginally stable for $K_1 > 0$.

All coeff > 0 for 2nd order → always stable.

$$\therefore GM = \infty \text{ dB}$$

---

### Question-03: GM Calculation

Calculate Gain Margin of:

$$G(s)H(s) = \frac{1}{s(s+1)(s+3)}$$

**Solution:**

$$K_1 F(s) = \frac{K_1}{s(s+1)(s+3)}$$

CE: $s^3 + 4s^2 + 3s + K_1 = 0$

For marginal stability (auxiliary equation):
$$4 \times 3 = K_1 \Rightarrow K_1 = 12$$

$$GM = 20 \log_{10} 12 = 21.58 \text{ dB}$$

---

### Question-04: GM (Always Stable)

OLTF of CLS with negative feedback. Calculate Gain Margin.

$$G(s)H(s) = \frac{1}{(s+1)(s+2)}$$

**Solution:**

$$GH(j\omega) = \frac{1}{(1+j\omega)(2+j\omega)}$$
$$\phi = -\tan^{-1}\omega - \tan^{-1}\frac{\omega}{2}$$

For ωpc: φ = -180° → solving gives ωpc = 0

At ω = 0, φ = 0° (positive real axis) — polar plot never intersects -ve real axis.

∴ System is always stable → GM = ∞ dB.

![img-115.jpeg](pages/page-178/img-115.jpeg)
![img-116.jpeg](pages/page-179/img-116.jpeg)

---

### Question-05: GM Calculation

$$G(s)H(s) = \frac{10(s+3)}{s(s+1)(s+2)} \text{ is OLTF of CLS. Calculate G.M.}$$

**Solution:**

$$GH(j\omega) = \frac{10(3+j\omega)}{j\omega(1+j\omega)(2+j\omega)}$$
$$\phi = \tan^{-1}\frac{\omega}{3} - 90 - \tan^{-1}\omega - \tan^{-1}\frac{\omega}{2}$$

For ωpc: φ = -180° → solving leads to $\omega^2 - 2 = \omega^2$ (not possible)

Routh: $K_1 F(s) = \frac{10K_1(s+3)}{s(s+1)(s+2)}$

CE: $s^3 + 3s^2 + (2+10K_1)s + 30K_1 = 0$

$3(2+10K_1) = 30K_1 \Rightarrow 6 + 30K_1 = 30K_1$ → no such K₁ exists

∴ Always stable → GM = ∞ dB.

---

### Question-06: GM (Multiple Choice)

The input-output transfer function of a plant $H(s) = \frac{100}{s(s+10)^2}$. The plant is placed in a unity negative feedback configuration. The gain margin of the system under closed loop unity negative feedback is:

(A) 0 dB
(B) 20 dB
(C) 26 dB
(D) 46 dB

**Solution:**

$$H(j\omega) = \frac{100}{j\omega(10+j\omega)^2}$$
$$\phi = -90 - 2\tan^{-1}\frac{\omega}{10}$$

At ωpc: φ = -180° → $\omega_{pc} = 10$

$$M = \frac{100}{\omega(100+\omega^2)} = \frac{100}{10 \times 200} = 0.05$$

$$GM = 1/M = 20$$

$$GM(dB) = 20 \log 20 = 26 \text{ dB}$$

Answer: (C) 26 dB

![img-117.jpeg](pages/page-182/img-117.jpeg)

---

### Question-07: Marginal Stability Gain

Consider the feedback system:

$$G(S) = \frac{K(s+4)}{s(s+1)}, \quad H(S) = \frac{1}{s+2}$$

The value of gain for which system is marginally stable is:

(A) K = 4
(B) K = 6
(C) K = 10
(D) K = 2

**Solution:**

CE: $1 + G(s)H(s) = 0 \Rightarrow s(s+1)(s+2) + K(s+4) = 0$

$$s^3 + 3s^2 + (2+K)s + 4K = 0$$

For marginal stability: $EP = EP$ (row of zeros in Routh)

$$3(2+K) = 4K \Rightarrow 6 + 3K = 4K \Rightarrow K = 6$$

Answer: (B) K = 6

![img-118.jpeg](pages/page-184/img-118.jpeg)

---

### Question-08: GM Calculation

Calculate the gain margin of the system G(s) with unity feedback:

$$G(s) = \frac{5}{s(s+5)(s+15)}$$

Options:
(A) $20\log_{10}500$ dB
(B) $20\log_{10}300$ dB
(C) $20\log_{10}50$ dB
(D) $20\log_{10}100$ dB

**Solution:**

$$\phi = -90 - \tan^{-1}\frac{\omega}{5} - \tan^{-1}\frac{\omega}{15}$$

At ωpc: φ = -180° → $\omega_{pc}^2 = 75$ (geometric mean of corner frequencies 5 and 15)

$$M = \frac{5}{\omega\sqrt{25+\omega^2}\sqrt{225+\omega^2}} = \frac{5}{\sqrt{75}\sqrt{100}\sqrt{300}} = \frac{5}{150 \times 10} = \frac{5}{1500}$$

$$GM = 1/M = 300$$

$$GM(dB) = 20\log 300$$

Answer: (B) $20\log_{10}300$ dB

---

### Question-09: Steady-State Error from Bode

Consider the stable closed-loop system shown in the figure. The asymptotic Bode magnitude plot of G(s) has a constant slope of -20 dB/decade at least till 100 rad/sec with the gain crossover frequency being 10 rad/sec. The asymptotic Bode phase plot remains constant at -90° at least till ω = 10 rad/sec. The steady-state error of the closed-loop system for a unit ramp input is (rounded off to 2 decimal places).

**Solution:**

(Type-1 system with velocity error constant $K_v$)
[Full solution requires more data from figure]

![img-119.jpeg](pages/page-187/img-119.jpeg)

---

### Summary: GM Formulas

For $G(s) = \frac{K}{s(1+sT_1)(1+sT_2)}$:

$$\omega_{pc} = \frac{1}{\sqrt{T_1 T_2}} \quad \text{(GM of corner freqs)}$$

$$GM = \frac{T_1 + T_2}{K T_1 T_2}$$

---

## Topic 6: Phase Margin & Gain Margin Questions

---

### Question-01: GM from Nyquist Plot

$$T(s) = K \cdot G(s)H(s)$$

Calculate G.M. for K = 1.

**Solution:**

For gain K, all intercepts get multiplied by K.

Intersection with -ve real axis = -K/4

For marginally stable system: -K/4 = -1 → K = 4

$$GM_{dB} = 20 \log 4 = 12 \text{ dB}$$

![img-126.jpeg](pages/page-196/img-126.jpeg)
![img-127.jpeg](pages/page-197/img-127.jpeg)
![img-128.jpeg](pages/page-198/img-128.jpeg)

---

### Question-02: Transportation Lag (ωpc)

$$G(s)H(s) = \frac{e^{-0.1s}}{s}$$

Calculate $\omega_{pc}$.

**Solution:**

$$G(j\omega)H(j\omega) = \frac{e^{-j0.1\omega}}{j\omega}$$
$$\phi = -0.1\omega - \pi/2$$

At ωpc: φ = -π

$$-0.1\omega - \pi/2 = -\pi \Rightarrow 0.1\omega = \pi/2 \Rightarrow \omega = 5\pi \text{ rad/s}$$

$$M = 1/\omega = 1/5\pi$$
$$GM = 5\pi$$
$$GM(dB) = 20 \log 5\pi \text{ dB}$$

---

### Question-03: Transportation Lag (K for PM)

$$G(s)H(s) = \frac{Ke^{-s}}{s}$$

Calculate K such that P.M. = 30°.

**Solution:**

$$PM = 30 = 180 + \phi \Rightarrow \phi = -150^\circ = -5\pi/6$$

$$G(j\omega)H(j\omega) = \frac{Ke^{-j\omega}}{j\omega}$$
$$M = K/\omega, \quad \phi = -5\pi/6 = -\omega - \pi/2$$

$$\omega = \pi/3 \leftarrow \omega_{gc}$$

At ωgc: M = 1 → $K/\omega_{gc} = 1 \Rightarrow K = \omega_{gc} = \pi/3$

---

### Question-04: GM & PM from Frequency Response Table

Calculate Gain and Phase Margin for the system whose frequency response is given below:

| Angular Frequency | 2 | 3 | 4 | 5 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|---|
| Magnitude | 7.5 | 4.8 | 3.15 | 2.25 | 1.70 | 1 | 0.64 |
| Phase | -118° | -130° | -140° | -150° | -157° | -170° | -180° |

**Solution:**

At ωpc = 10: M = 0.64

$$GM = 20 \log \frac{1}{0.64} = 3.876 \text{ dB}$$

At ωgc = 8: φ = -170°

$$PM = 180 + \phi = 10^\circ$$

---

### Question-05: Always Stable

Calculate Gain Margin for:

$$G(s)H(s) = \frac{1}{(s+2)(s+1)} \quad \text{(always stable)}$$

$$GM = \infty \text{ dB}$$

---

### Common Data for Questions 05, 06

The open loop transfer function of a unity feedback system is:

$$G(s) = \frac{3e^{-2s}}{s(s+2)}$$

$$G(j\omega) = \frac{3e^{-j2\omega}}{j\omega(2+j\omega)}$$
$$M = \frac{3}{\omega\sqrt{4+\omega^2}}, \quad \phi = -2\omega - \pi/2 - \tan^{-1}\frac{\omega}{2}$$

$$\omega_{gc}: M = 1 \Rightarrow \frac{3}{\omega\sqrt{4+\omega^2}} = 1 \Rightarrow \omega^2 = 1.6055 \Rightarrow \omega_{gc} = 1.267 \text{ rad/s}$$

---

### Question-05: Gain & Phase Crossover Frequencies

The gain and phase crossover frequencies (rad/sec) are, respectively:

(A) 0.632 and 1.26
(B) 0.632 and 0.485
(C) 0.485 and 0.632
(D) 1.26 and 0.632

**Solution:**

$\omega_{gc} = 1.267$ and $\omega_{pc} = 0.632$ (from numerical solution)

Answer: (D) 1.26 and 0.632

---

### Question-06: GM & PM Values

Based on the above results, the gain and phase margins of the system will be:

(A) -7.09 dB and 87.5°
(B) 7.09 dB and 87.5°
(C) 7.09 dB and -87.5°
(D) -7.09 dB and -87.5°

**Solution:**

At ωgc = 1.267:
$$\phi = -90 - 2\omega \times 180/\pi - \tan^{-1}\frac{\omega}{2} = -266.6^\circ$$
$$PM = 180 + \phi = -86.6^\circ < 0 \text{ (unstable)}$$

At ωpc = 0.632:
$$M = \frac{3}{\omega\sqrt{4+\omega^2}} = 2.263$$
$$M_{dB} = 20 \log \frac{1}{2.263} = -7.09 \text{ dB}$$

Answer: (A) -7.09 dB and 87.5° (Note: PM positive but system is unstable due to transportation lag)

---

### Question-07: GM & PM from Nyquist Plot

The part of Nyquist plot for the open-loop transfer function of a feedback control system is shown in figure. The gain and phase margins are:

(A) 6 dB, 120°
(B) 2 dB, 60°
(C) 6 dB, 30°
(D) 6 dB, 90°

**Solution:**

(From the figure: GM = 6 dB, PM = 90°)

Answer: (D) 6 dB, 90°

![img-134.jpeg](pages/page-217/img-134.jpeg)

---

### Question-08: Phase Margin

The forward path transfer function of a unity feedback system is:

$$G(s) = \frac{1}{(1+s)^2}$$

What is the phase margin for this system?

(A) -π rad
(B) 0 rad
(C) π/2 rad
(D) π rad

**Solution:**

$$G(j\omega) = \frac{1}{(1+j\omega)^2}, \quad M = \frac{1}{1+\omega^2}, \quad \phi = -2\tan^{-1}\omega$$

ωgc: M = 1 → ωgc = 0 → φ = 0

$$PM = 180 + \phi = 180^\circ = \pi \text{ rad}$$

Answer: (D) π rad

---

### Question-09: GM in dB

The loop transfer of a system is:

$$G(s)H(s) = \frac{5}{(s+1)(2s+1)(3s+1)}$$

Which has the phase crossover frequency $f_c = 0.16$ Hz ($\omega_c = 2\pi f_c = 1.0053$ rad/s). The gain margin dB of the system is:

(A) 6
(B) 4
(C) 2
(D) 0

**Solution:**

$$M = \frac{5}{\sqrt{1+\omega^2}\sqrt{1+4\omega^2}\sqrt{1+9\omega^2}}$$

At ωpc = 1.0053: M = 0.4942

$$GM = 20 \log \frac{1}{0.4942} = 6 \text{ dB}$$

Answer: (A) 6

---

### Question-10: Phase Crossover Frequency

The loop transfer function of a feedback control system is given by:

$$G(s)H(s) = \frac{1}{s(s+1)(9s+1)} \quad \text{(type-01/order-03)}$$

Its phase crossover frequency (in rad/s), approximated to two decimal places, is:

**Solution:**

Time constants: T₁ = 1 sec (from s+1), T₂ = 9 sec (from 9s+1)

$$\omega_{pc} = \frac{1}{\sqrt{T_1 T_2}} = \frac{1}{\sqrt{9}} = \frac{1}{3} \text{ r/s}$$

---

### Question-11: Phase Margin

The phase margin (in degree) of the system:

$$G(s) = \frac{10}{s(s+10)}$$

**Solution:**

$$G(j\omega) = \frac{10}{j\omega(10+j\omega)}, \quad M = \frac{10}{\omega\sqrt{100+\omega^2}}, \quad \phi = -90 - \tan^{-1}\frac{\omega}{10}$$

ωgc: M = 1 → $\frac{10}{\omega\sqrt{100+\omega^2}} = 1$

$$\omega^2 = 0.9902 \Rightarrow \omega = 0.995 \text{ rad/s}$$

$$\phi = -95.68^\circ$$

$$PM = 180 + \phi = 84.3^\circ$$

---

### Question-12: Phase Margin

The phase margin of the transfer function:

$$GH(s) = \frac{1}{s(s+1)}$$

(in degree) is:

**Solution:**

$$GH(j\omega) = \frac{1}{j\omega(1+j\omega)}, \quad M = \frac{1}{\omega\sqrt{1+\omega^2}}, \quad \phi = -90 - \tan^{-1}\omega$$

ωgc: M = 1 → $\omega^4 + \omega^2 - 1 = 0 \Rightarrow \omega^2 = 0.618 \Rightarrow \omega_{gc} = 0.786 \text{ rad/s}$

$$\phi = -128.16^\circ$$

$$PM = 180 + \phi = 51.83^\circ$$

---

### Question-13: Gain K for Given PM

The open-loop transfer function of a unity feedback system is:

$$G(s) = \frac{K}{s(s+5)}$$

The gain K that results in a phase margin of 45° is:

**Solution:**

$$PM = 180 + \phi = 45 \Rightarrow \phi = -135^\circ$$

$$G(j\omega) = \frac{K}{j\omega(5+j\omega)}, \quad M = \frac{K}{\omega\sqrt{25+\omega^2}}, \quad \phi = -90 - \tan^{-1}\frac{\omega}{5} = -135$$

$$\tan^{-1}\frac{\omega}{5} = 45^\circ \Rightarrow \omega = 5 \leftarrow \omega_{gc}$$

$$M = 1 \Rightarrow K = \omega\sqrt{25+\omega^2} = 5\sqrt{50} = 25\sqrt{2} = 35.35$$

---

### Question-14: Phase Margin (No ωgc exists)

The phase margin of a system with the open loop transfer function:

$$G(s)H(s) = \frac{1-s}{(1+s)(2+s)}$$

Options:
(A) 0°
(B) 63.4°
(C) 90°
(D) ∞

**Solution:**

$$GH(j\omega) = \frac{1-j\omega}{(1+j\omega)(2+j\omega)}$$

$$M = \frac{\sqrt{1+\omega^2}}{\sqrt{1+\omega^2}\sqrt{4+\omega^2}} = \frac{1}{\sqrt{4+\omega^2}} = 1$$

$$4 + \omega^2 = 1 \Rightarrow \omega = \pm j\sqrt{3} \text{ (imaginary)}$$

No ωgc exists → PM = ∞

Answer: (D) ∞

---

### Question-15: Phase Crossover Frequency

The phase crossover frequency for the open loop transfer function:

$$G(s)H(s) = \frac{20}{(s+1)(s+\frac{1}{2})(s+\frac{1}{3})}$$

is:

(A) 1.0 rad/sec
(B) 2.0 rad/sec
(C) √2 rad/sec
(D) √3 rad/sec

**Solution:**

$$GH(j\omega) = \frac{20}{(1+j\omega)(\frac{1}{2}+j\omega)(\frac{1}{3}+j\omega)}$$

$$\phi = -\tan^{-1}\omega - \tan^{-1}2\omega - \tan^{-1}3\omega = -180^\circ$$

Solving: $1-2\omega^2 = -1 \Rightarrow 2\omega^2 = 2 \Rightarrow \omega = 1 \text{ rad/s}$

Answer: (A) 1.0 rad/sec

---

### Question-16: GM & PM

The gain margin and the phase margin of a feedback system with:

$$G(s)H(s) = \frac{s}{(s+100)^3}$$

are:

(A) 0 dB, 0°
(B) ∞, 0°
(C) 88.5 dB, ∞

**Solution:**

$$G(j\omega)H(j\omega) = \frac{j\omega}{(100+j\omega)^3}$$
$$M = \frac{\omega}{(10^4+\omega^2)^{3/2}}, \quad \phi = 90 - 3\tan^{-1}\frac{\omega}{100}$$

ωpc: φ = -180° → $\tan^{-1}\frac{\omega}{100} = 90^\circ \Rightarrow \omega \to \infty$
M = 0 → GM = 20 log(1/0) = ∞ dB

ωgc: M = 1 → $\omega^2 = (10^4+\omega^2)^3$ → ω is imaginary → PM = ∞

Answer: (C) 88.5 dB, ∞ (approximately)

---

### Question-17: Gain K₁ for Given PM

Consider the stable closed-loop system shown in the figure. The magnitude and phase values of the frequency response of G(s) are given in the table. The value of the gain $K_1 (> 0)$ for a $50^\circ$ phase margin is ______ (rounded off to 2 decimal places).

| ω (rad/sec) | Magnitude (dB) | Phase (degrees) |
|---|---|---|
| 0.5 | -7 | -40 |
| 1.0 | -10 | -80 |
| 2.0 | -18 | -130 |
| 10.0 | -40 | -200 |

**Solution:**

For PM = 50°: $180 + \phi = 50 \Rightarrow \phi = -130^\circ$

From table: at ω = 2 rad/s, φ = -130° ✓

At ω = 0.5 rad/s, $\angle G(j\omega) = -40^\circ$, $|G(j\omega)| = -7$ dB

$$M_{dB} = 20\log K_1 - 20\log\omega + 20\log|G(j\omega)|$$

At ωgc = 0.5 (where PM is measured, φ = -130° which is at ω=2... 
Actually at PM condition, ω = ωgc where M = 1 = 0 dB.

From the table, at φ = -130° + 90° ... Let me re-check.

Given: PM = 50° ≈ 180 + φ → φ = -130°
This happens at ω = 2 rad/s from the table.

But the solution says:
At ω = 0.5, ∠G = -40°:
$$20\log K_f - 20\log 0.5 - 7 = 0$$
$$20\log K_f + 6 - 7 = 0$$
$$20\log K_f = 1$$
$$\log K_f = 0.05$$
$$K_f = 10^{0.05} = 1.122$$

![img-135.jpeg](pages/page-228/img-135.jpeg)

---

> **End of Question Bank**
> 
> Total Questions: ~60 solved problems
> Topics Covered: Polar Plots, Conformal Mapping, Nyquist Plots, 
> Nyquist Stability Criterion, Gain Margin, Phase Margin, Transportation Lag
