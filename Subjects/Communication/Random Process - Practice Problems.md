# Random Process — Practice Problems

## 1. Sample Functions / Introduction

**Q1.** A time domain signal $x(t)$ is defined as,

$$
x(t) = At + B \quad ; \quad A \in \{1, 2, 3\} \quad \text{and} \quad B \in \{-1, 0, 1\}
$$

Plot all the possible sample functions of $x(t)$.

---

**Q2.** 

$$
x(t) = A \cos\left(\frac{\pi}{2} t\right) \quad ; \quad A \sim U[0, 2]
$$

Plot all the sample functions of $x(t)$.

---

## 2. Mean Function

**Q3.** 

$$
x(t) = A \cos \omega t \quad ; \quad A \sim U[0, L], \quad \omega = \text{constant}
$$

Find the mean function. Also find $E[x(2)]$.

---

**Q4.** 

$$
x(t) = A \cos(\omega t + \theta) \quad ; \quad A \text{ and } \omega \to \text{constant}, \quad \theta \sim U[0, \pi]
$$

Find the mean function.

---

**Q5.** 

$$
x(t) = \begin{cases} A & ; \quad 0 < t < 2 \\ B & ; \quad 2 \le t < 3 \end{cases}
$$

$$
A \sim U[-3, 2] \quad ; \quad B \sim N[3, 4]
$$

Find the mean function.

---

**Q6.** 

$$
x(t) = \begin{cases} 1 & ; \text{probability} = p \\ -1 & ; \text{probability} = 1-p \end{cases}
$$

Find the mean function.

---

## 3. Auto-Correlation Function (ACF)

**Q7.** 

$$
x(t) = A \sin(\omega t + \phi)
$$

$$
A \sim \text{(some distribution with mean 2, variance 4)} \quad ; \quad \omega \text{ and } \phi \text{ are constant.}
$$

Find A.C.F. of $x(t)$. Also find $E[x(2) \cdot x(3)]$.

---

**Q8.** 

$$
x(t) = A \cos(\omega t + \theta) \quad ; \quad \theta \sim U[0, 2\pi]
$$

Find A.C.F. of $x(t)$.

---

**Q9.** 

$$
x(t) = A \cos(\omega t + \theta) \quad ; \quad A \sim N(2, 4), \quad \theta \sim U[0, 2\pi]
$$

$A, \theta$ are mutually independent. Find ACF of $x(t)$.

---

## 4. Statistical Parameters (Mean, MSV, Variance, ACF, Covariance)

**Q10.** 

$$
x(t) = 2A \cos(\omega t + \theta) + B
$$

$$
A \sim N(0, 2), \quad B \sim U[-1, 1], \quad \theta \sim U[0, 2\pi]
$$

$A$, $B$ and $\theta$ are mutually independent.

(i) Find $\text{Mean}[x(t)]$, $\text{MSV}[x(t)]$, $\text{Var}[x(t)]$, $\text{ACF}[x(t)]$, $\text{COV}[x(t)]$.

(ii) Find $\text{Mean}[x(t+2)]$, $\text{Mean}[x(4)]$, $E[x(3)x(5)]$, $E[x(5)x(3)]$, $E[x^2(2)]$.

---

## 5. WSSRP Properties

**Q11.** For a WSSR Process, state whether the following are true:
- Mean is constant.
- ACF is only a function of the sampling time period.
- MSV and Variance are constant.
- Covariance is only a function of the sampling time period.
- ACF and Covariance are constant.

---

**Q12.** 

$$
y(t) = x(t) \pm x(t+\tau) \quad ; \quad x(t) \text{ is WSSRP}
$$

Find $E[y^2(t)]$. Hence show that $R_x(0) \ge |R_x(\tau)|$.

---

**Q13.** For a random process $X(t)$, the ACF is given by:

$$
R_X(\tau) = 3 + 2 \cos(3\tau) + 4 [\sin(2\pi \tau)]^2
$$

Given that $X(t)$ has no offset and is WSSRP, determine:

- Mean of $X(t)$
- Total DC power of $X(t)$
- Total power of $X(t)$
- $R_X(0)$
- Whether $R_X(-\tau) = R_X(\tau)$

---

**Q14.** 

$$
X(t) = A \cos(\omega t + \theta) \quad ; \quad \theta \sim U[0, 2\pi] \quad (\text{WSSRP})
$$

$$
Y(t) = B \sin(\omega t + \theta) \quad ; \quad \theta \sim U[0, 2\pi]
$$

(a) Is $X(t)$ WSSRP?
(b) Is $Y(t)$ WSSRP?
(c) Find $R_{XY}(t, t+\tau)$ and $R_{YX}(t, t+\tau)$ (cross-correlation functions).

---

**Q15.** $x(t)$ is WSSRP with ACF $R_x(\tau) = E[x(t) x(t+\tau)]$. Evaluate:

$$
\begin{aligned}
&E[x(2) x(4)] \\
&E[x(t-2) x(t+4)] \\
&E[x(4) x(2)] \\
&E[x(2t+3) x(2t-7)] \\
&E[x(2t+3) x(t-3)]
\end{aligned}
$$

---

**Q16.** $x(t)$ is WSSRP with $E[x(t)] = \mu_x$ and ACF $R_x(\tau)$. Comment on whether the following are WSSRP:

(a) $y(t) = 2x(t) - 3$
(b) $y(t) = 2x(t) + 3x(t-2)$
(c) $y(t) = x(2t+3)$

---

## 6. Ergodic Random Process

**Q17.** 

$$
X(t) = A \sin(\omega t + \theta) \quad ; \quad \theta \sim U[0, 2\pi]
$$

(a) Find the statistical mean of $X(t)$.
(b) Find the time-averaged mean of $X(t)$.
(c) Find the statistical auto-correlation of $X(t)$.
(d) Find the time-averaged auto-correlation of $X(t)$.

---

**Q18.** For a stationary ergodic process $x(t)$,

$$
R_x(\tau) = \frac{\tau^2}{25 + 9\tau^2}
$$

Find the magnitude of the mean.

---

**Q19.** 

$$
x(t) = 6 e^{At} \quad ; \quad A \sim U[0, 2]
$$

Find $R_x(t_1, t_2)$. Is $x(t)$ WSSRP?

---

**Q20.** $x(t)$ is WSSRP with $R_x(\tau) = 0.5 e^{-|\tau|/2}$.

$$
y(t) = x(t) - 6a \, x(t-0.5)
$$

Find the value of $a$ that minimizes the mean square value of $y(t)$.

---

**Q21.** $x(t)$ is WSSRP with average power $P_x$ and zero mean.

$$
y(t) = A \, x(t) \cos\left(\frac{\pi}{3} t + \theta\right) \quad ; \quad \theta \sim U[0, 2\pi]
$$

$\theta$ and $x(t)$ are independent.

(a) Find $E[y(t)]$ (average of $y(t)$).
(b) Find $E[y^2(t)]$ (average power of $y(t)$).

---

**Q22.** 

$$
x(t) = A \cos \omega t \quad ; \quad A \sim U[0, 1]
$$

$$
y(t) = \frac{2\pi}{T} \int_{t}^{t+T/2} x(\alpha) \, d\alpha \quad ; \quad \omega = \frac{2\pi}{T}
$$

Find the maximum possible value of $E[y(t)]$.

---

**Q23.** $x(t)$ is an Ergodic R.P. with $E[x(t) x(t+\tau)] = R_x(\tau)$.

(a) Find the mean, variance, MSV, and covariance.
(b) Find $\displaystyle \alpha = \lim_{T \to \infty} \frac{1}{T} \int_{-T/2}^{T/2} x^2(t) \, dt$.
(c) The process is sampled at frequency $f_s$. What should be the maximum value of $f_s$ such that:
    - (i) successive samples are uncorrelated.
    - (ii) successive samples are orthogonal.
    - (iii) successive samples are independent.
    - (iv) covariance of successive samples is $12.5$.
    - (v) correlation of successive samples is $40$.
(d) $E[x^2(200)] = ?$
(e) $E[x(101) x(36)] = ?$
(f) $E[x(100)] = ?$
(g) $\text{cov}[x(7) x(9)] = ?$
(h) $Y = x(2) - x(4)$; find variance of $Y$.

---

## 7. Discrete-Time Random Process

**Q24.** A discrete-time R.P. $X[n]$ is zero-mean and stationary. Another R.P. is defined as:

$$
d[n] = X[n] - X[n-1]
$$

$d[n]$ is WSSRP and $\sigma_{d[n]}^2 = \dfrac{\sigma_{X[n]}^2}{10}$. If $R_{xx}(k)$ is the ACF of $x[n]$, find:

$$
\left. \frac{R_{xx}(k)}{\sigma_x^2} \right|_{k=1}
$$

---

**Q25.** An independent and identically distributed (I.I.D.) R.P. $\{x_n\}_{n=-\infty}^{\infty}$ takes values $-1$ and $1$ with equal probabilities.

(a) Find the mean, variance, MSV, ACF, and covariance of $x_n$.

(b) R.P. $Y_n$ and $Z_n$ are defined by:

$$
Y_n = 3x_n + 2x_{n-1} \quad (\text{WSSRP})
$$

$$
Z_n = x_n - 2x_{n-2} \quad (\text{WSSRP})
$$

(i) Find all statistical parameters of $Y_n$ and $Z_n$, also find the cross-correlation functions $R_{YZ}$ and $R_{ZY}$.
(ii) Find $E[Y_3 Z_5]$.

---

## 8. Cross-Correlation

**Q26.** $x(t)$ and $y(t)$ are WSSRP.

$$
w(t) = a x(t) + b y(t) \quad (\text{WSSRP})
$$

$$
z(t) = a x(t) - b y(t)
$$

(a) Find $\text{ACF}[w(t)]$ and $\text{ACF}[z(t)]$.
(b) If $x(t)$ and $y(t)$ are orthogonal, find $\text{ACF}[w(t)]$ and $\text{ACF}[z(t)]$.

---

## 9. WSSRP with Modulated Signals

**Q27.** Given $x(t)$ is WSSRP.

$$
p(t) = A \cos(\omega t + \theta)
$$

$$
y(t) = x(t) \cdot p(t)
$$

Comment on the nature of $y(t)$ (WSSRP or not) when:

(a) $p(t)$ is a deterministic signal.
(b) $A \sim U[0, 2]$ (amplitude random, phase constant).
(c) $\theta \sim U[0, 2\pi]$ or $\theta \sim U[-\pi, \pi]$ (phase random, amplitude constant).
(d) $A \sim U[0, 2]$ and $\theta \sim U[0, 2\pi]$.

Take $A$, $\theta$, and $x(t)$ mutually independent.

---

## 10. Random Process through LTI Systems

**Q28.** For an LTI system with impulse response $h(t)$ and input $x(t)$ (WSSRP), find expressions for:

$$
R_{xy}(\tau), \quad R_{yx}(\tau), \quad C_{xy}(\tau), \quad C_{yx}(\tau), \quad C_y(\tau)
$$

in terms of $R_x(\tau)$ and $h(t)$.

---

**Q29.** For the given system (WSSRP input $x(t)$ with given $R_x(\tau)$ and $h(t) = 2\delta(t-1)$):

(a) Find mean, MSV, variance, $R_Y(\tau)$, $C_Y(\tau)$.
(b) Find $R_{XY}(\tau)$, $R_{YX}(\tau)$, $C_{XY}(\tau)$, $C_{YX}(\tau)$.

---

**Q30.** 

$$
y(t) = \frac{d}{dt}\big[x(t) + x(t-0.5)\big]
$$

Given $S_x(f) > 0$, find the frequencies for which $S_y(f) = 0$.

---

## 11. Hilbert Transform

**Q31.** Find the Hilbert transform of:

(a) $x(t) = \cos 2t$
(b) $x(t) = \sin 2t$

---

## 12. Power Spectral Density (PSD)

**Q32.** 

$$
R_x(\tau) = 4 + 2 \cos 4\tau + \frac{4 \sin 2\tau}{\pi \tau}
$$

$x(t)$ is WSSRP with no offset.

(a) Find the mean, variance, and MSV of $x(t)$.
(b) Draw the PSD $S_x(\omega)$.

---

**Q33.** Determine whether each of the following is a valid PSD:

(a) $\displaystyle S_x(\omega) = \frac{2}{9 + \omega^2}$

(b) $S_x(\omega) = e^{-\omega^2} \cos^2 \omega$

(c) $\displaystyle S_x(\omega) = \begin{cases} 1 & ; \; 0 < \omega < 2 \\ -1 & ; \; -2 < \omega < 0 \end{cases}$

(d) $\displaystyle S_x(\omega) = \begin{cases} 1 & ; \; 0 < \omega < 2 \\ 0 & ; \; \text{otherwise} \end{cases}$

---

**Q34.** 

$$
Y(t) = -3x(t) - 2z(t)
$$

$x(t)$ and $z(t)$ are orthogonal. Find the PSD of $Y(t)$ in terms of $S_x(f)$ and $S_z(f)$.

---

**Q35.** $x(t)$ is WSSRP with

$$
S_x(f) = \begin{cases} \dfrac{1}{\omega} & ; \; |f| \le \omega \\ 0 & ; \; \text{otherwise} \end{cases}
$$

Find $\displaystyle E\left[\pi \, x(t) \, x\!\left(t - \frac{1}{4\omega}\right)\right]$.

---

**Q36.** 

$$
y(t) = x(2t - 1)
$$

Find $S_y(f)$ in terms of $S_x(f)$.

---

**Q37.** For the RC circuit with WSSRP input $x(t)$, find $\mu_Y$, $R_Y(\tau)$, and $S_Y(\omega)$ in terms of input parameters.

---

## 13. White Noise through LTI Systems

**Q38.** $S_x(f) = N_0/2$ (zero-mean white Gaussian noise) is passed through an LTI filter $h(t)$. $\mu_x = 0$.

Find the variance of the filtered noise at $t = 4$ sec.

---

**Q39.** 

$$
S_N(f) = 0.5 \text{ W/Hz}, \quad h(t) = 0.5 e^{-t^2/2}
$$

Find the output power.
