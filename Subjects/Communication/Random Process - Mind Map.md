# Random Process - Mind Map

- **Random Process (RP)**
  - Collection of Random Variables changing with time
  - Also called Stochastic Process
  - Sample Functions: Multiple time-domain waveforms $$\{x_1(t), x_2(t), \dots, x_\infty(t)\}$$
  - Sampling at a time instant yields a Random Variable
    - $$x(t) \xrightarrow[t=t_1]{} x(t_1)$$ is an RV
  - **Deterministic vs Random Signal**
    - $$x(t) = A \cos(\omega t + \theta)$$ with fixed $$A, \omega, \theta$$ → deterministic
    - $$x(t) = A \cos(\omega t + \theta)$$ with $$A \sim U[0,2], \theta \sim U[0,2\pi]$$ → RP

- **Statistical Parameters of RP**
  - **Mean Function**
    - $$\mu_x(t) = E[x(t)]$$
    - May be function of time $$f(t)$$ or constant
  - **Mean Square Value (MSV)**
    - $$MSV[x(t)] = E[x^2(t)]$$ = Total Power of $$x(t)$$
  - **Variance**
    - $$Var[x(t)] = \sigma_x^2(t) = E[x^2(t)] - \{E[x(t)]\}^2$$
    - AC Power
  - **Total Power = AC Power + DC Power**
    - $$E[x^2(t)] = \sigma_x^2(t) + \{E[x(t)]\}^2$$
  - **Autocorrelation Function (ACF)**
    - $$R_{xx}(t_1, t_2) = E[x(t_1) \cdot x(t_2)]$$
    - $$R_{xx}(t, t+\tau) = E[x(t) \cdot x(t+\tau)]$$
  - **Covariance**
    - $$C_{xx}(t, t+\tau) = E[x(t) \cdot x(t+\tau)] - E[x(t)] \cdot E[x(t+\tau)]$$
    - $$= R_{xx}(t, t+\tau) - \mu_x(t) \cdot \mu_x(t+\tau)$$
  - **Cross-Correlation**
    - $$R_{xy}(t, t+\tau) = E[x(t) \cdot y(t+\tau)]$$
    - $$R_{xy}(t+\tau, t) = E[x(t+\tau) \cdot y(t)]$$
    - $$R_{yx}(t, t+\tau) = E[y(t) \cdot x(t+\tau)]$$
    - $$R_{yx}(t+\tau, t) = E[y(t+\tau) \cdot x(t)]$$

- **Wide Sense Stationary Random Process (WSSRP)**
  - **Conditions**
    - Mean is constant (not a function of time): $$\mu_x(t) = \text{constant}$$
    - ACF is function only of time difference: $$R_{xx}(t, t+\tau) = R_x(\tau)$$
  - **Properties of WSSRP**
    - $$E[x(t)] = \mu_x$$ (constant)
    - $$E[x(t)] = E[x(t+\tau)] = \mu_x$$
    - MSV is constant
    - Variance is constant
    - Covariance is function only of $$\tau$$: $$C_x(\tau) = R_x(\tau) - \mu_x^2$$
    - $$R_x(0) = E[x^2(t)] = \sigma_x^2 + \mu_x^2$$
    - $$R_x(0) \ge |R_x(\tau)|$$
    - $$R_x(\tau) = R_x(-\tau)$$ (even function)
    - If WSSRP + Periodic → $$R_x(\tau)$$ is periodic
    - If WSSRP + Aperiodic → $$R_x(\tau)$$ is aperiodic
  - **Cross-correlation properties for WSSRP**
    - $$R_{xy}(\tau) = E[x(t) \cdot y(t+\tau)]$$
    - $$R_{yx}(\tau) = E[y(t) \cdot x(t+\tau)]$$
    - $$R_{xy}(\tau) = R_{yx}(-\tau)$$
    - $$R_{xy}(-\tau) = R_{yx}(\tau)$$
    - $$R_{xy}(\tau) \neq R_{xy}(-\tau)$$ (not even generally)
  - **Transformations preserving WSSRP**
    - $$y(t) = ax(t) + b$$ → WSSRP, $$\mu_y = a\mu_x + b$$, $$\sigma_y^2 = a^2\sigma_x^2$$
    - $$y(t) = x(at+b)$$ → WSSRP, $$\mu_y = \mu_x$$, $$\sigma_y^2 = \sigma_x^2$$
    - $$y(t) = ax(t) + bx(t-T_0)$$ → WSSRP
      - $$\mu_y = (a+b)\mu_x$$
      - $$\sigma_y^2 = (a^2+b^2)\sigma_x^2 + 2ab C_x(T_0)$$
  - **Sum of two WSSRP**
    - $$w(t) = ax(t) + by(t)$$: $$R_w(\tau) = a^2 R_x(\tau) + b^2 R_y(\tau) + ab R_{xy}(\tau) + ab R_{yx}(\tau)$$
    - If orthogonal: $$R_w(\tau) = a^2 R_x(\tau) + b^2 R_y(\tau)$$

- **Ergodic Random Process**
  - Statistical averages = Time averages
  - Statistical Mean = Time Domain Mean: $$E[x(t)] = \lim_{T\to\infty} \frac{1}{T} \int_T x(t) dt$$
  - Statistical ACF = Time Domain ACF: $$R_x(\tau) = \lim_{T\to\infty} \frac{1}{T} \int_T x(t) x(t+\tau) dt$$
  - If ergodic → surely WSSRP
  - For aperiodic ergodic RP: $$\lim_{\tau \to \infty} R_x(\tau) = R_x(\infty) = \mu_x^2$$ (DC power)
  - $$R_x(0) = \lim_{T\to\infty} \frac{1}{T} \int_{-T/2}^{T/2} x^2(t) dt$$

- **I.I.D. Random Process (Independent & Identically Distributed)**
  - Independent: $$E[x_n x_{n+k}] = E[x_n] E[x_{n+k}]$$ for $$k \neq 0$$
  - Identical: All samples share same statistical properties
  - ACF of I.I.D. RP:
    $$R_{xx}(k) = \begin{cases} E[x_n^2] & ; k=0 \\ \{E[x_n]\}^2 & ; k \neq 0 \end{cases}$$
  - For zero-mean I.I.D. with values $$\pm 1$$: $$R_{xx}(k) = \delta(k)$$

- **Discrete Time Random Process**
  - $$X[n]$$: WSSRP
  - Properties similar to continuous case
  - Transformations: $$d[n] = X[n] - X[n-1]$$ → WSSRP

- **Strict Sense Stationary RP (SSSRP)**
  - All joint PDFs are invariant to time shifts
  - $$f_{x(t_1), x(t_2), \dots}(y_1, y_2, \dots) = f_{x(t_1+h), x(t_2+h), \dots}(y_1, y_2, \dots)$$
  - WSSRP conditions + all higher-order moments stationary
  - If Gaussian + WSSRP → SSSRP

- **Gaussian RP**
  - Uncorrelation ⇒ Independence (for Gaussian RP)
  - If Gaussian + WSSRP ⇒ SSSRP

- **Passing RP through LTI System**
  - $$y(t) = x(t) * h(t)$$
  - **Mean**: $$\mu_Y = \mu_X \cdot H(\omega)|_{\omega=0} = \mu_X \cdot H(0)$$
  - **ACF**: $$R_Y(\tau) = R_X(\tau) * h(\tau) * h(-\tau)$$
  - **Cross-correlation**:
    - $$R_{XY}(\tau) = R_X(\tau) * h(\tau)$$
    - $$R_{YX}(\tau) = R_X(\tau) * h(-\tau)$$
  - **Covariance**:
    - $$C_{XY}(\tau) = R_{XY}(\tau) - \mu_X \mu_Y$$
    - $$C_Y(\tau) = R_Y(\tau) - \mu_Y^2$$
  - **PSD Relations**:
    - $$S_Y(f) = S_X(f) \cdot |H(f)|^2$$
    - $$S_{XY}(f) = S_X(f) \cdot H(f)$$
    - $$S_{YX}(f) = S_X(f) \cdot H(-f)$$

- **Modulation and WSSRP**
  - $$y(t) = x(t) \cos(\omega t + \theta)$$
  - If $$\theta$$ is random with uniform phase $$U[0, 2\pi]$$ (or any $$2\pi$$ range):
    - $$y(t)$$ is WSSRP
    - $$R_Y(\tau) = \frac{E[A^2]}{2} R_X(\tau) \cos \omega \tau$$
  - If $$A$$ and $$\theta$$ both random: similar conclusion

- **Power Spectral Density (PSD)**
  - Defined only for WSSRP
  - **Wiener-Khinchin Theorem**:
    - $$S_x(\omega) = \int_{-\infty}^{\infty} R_x(\tau) e^{-j\omega\tau} d\tau$$
    - $$S_x(f) = \int_{-\infty}^{\infty} R_x(\tau) e^{-j2\pi f\tau} d\tau$$
    - $$R_x(\tau) = \frac{1}{2\pi} \int_{-\infty}^{\infty} S_x(\omega) e^{j\omega\tau} d\omega = \int_{-\infty}^{\infty} S_x(f) e^{j2\pi f\tau} df$$
  - **Properties**:
    - $$S_x(f) \ge 0$$, $$S_x(\omega) \ge 0$$ (always non-negative)
    - Even function: $$S_x(f) = S_x(-f)$$, $$S_x(\omega) = S_x(-\omega)$$
    - Total Power = MSV = $$E[x^2(t)] = \int_{-\infty}^{\infty} S_x(f) df = \frac{1}{2\pi} \int_{-\infty}^{\infty} S_x(\omega) d\omega$$
    - DC Power = $$\mu_x^2 = \int_{0^-}^{0^+} S_x(f) df = \frac{1}{2\pi} \int_{0^-}^{0^+} S_x(\omega) d\omega$$ (area under impulse at $$f=0$$)
    - Unit: Watt/Hz
    - PSD shows how power is distributed over frequency
  - **Valid PSD conditions**: $$S_x(\omega) \ge 0$$ and $$S_x(\omega) = S_x(-\omega)$$
  - **PSD of LTI output**: $$S_Y(f) = |H(f)|^2 S_X(f)$$
  - **PSD for sum of orthogonal processes**: $$S_Y(f) = S_\rho(f) + S_z(f)$$

- **White Noise**
  - $$S_x(f) = N_0/2$$ (constant PSD over all frequencies)
  - Total output power with LTI: $$\frac{N_0}{2} \int_{-\infty}^{\infty} |H(f)|^2 df = \frac{N_0}{2} \int_{-\infty}^{\infty} |h(t)|^2 dt$$
  - If white noise is Gaussian → SSSRP, independent samples
  - Bandlimited white noise: $$S_x(f) = \begin{cases} N_0/2 & |f| \le B \\ 0 & \text{otherwise} \end{cases}$$
  - ACF: $$R_x(\tau) = N_0 B \frac{\sin(2\pi B\tau)}{2\pi B\tau} = N_0 B \text{ sinc}(2B\tau)$$

- **Hilbert Transform**
  - LTI System: $$h(t) = \frac{1}{\pi t}$$
  - Frequency response: $$H(\omega) = -j \text{ sgn}(\omega)$$, $$H(f) = -j \text{ sgn}(f)$$
  - $$|H(f)| = 1$$, phase = $$-90^\circ$$ (all-pass $$90^\circ$$ phase shifter)
  - $$\cos(\omega_0 t) \xrightarrow{HT} \sin(\omega_0 t)$$
  - $$\sin(\omega_0 t) \xrightarrow{HT} -\cos(\omega_0 t)$$
  - Double Hilbert transform: $$\hat{\hat{x}}(t) = -x(t)$$
  - Properties:
    - Non-causal, unstable LTI system
    - HT of even function → odd function
    - HT of odd function → even function

- **Relations Summary**
  - $$R_x(\tau) \xrightarrow{FT} S_x(\omega)$$ or $$S_x(f)$$
  - $$S_x(\omega) \xrightarrow{IFT} R_x(\tau)$$
  - Total Power $$E[x^2(t)] = R_x(0) = \frac{1}{2\pi} \int_{-\infty}^{\infty} S_x(\omega) d\omega = \int_{-\infty}^{\infty} S_x(f) df$$
  - DC Power $$\mu_x^2 = \frac{1}{2\pi} \int_{0^-}^{0^+} S_x(\omega) d\omega = \int_{0^-}^{0^+} S_x(f) df$$
  - Variance $$\sigma_x^2 = E[x^2(t)] - \mu_x^2$$

- **Important Operations on WSSRP**
  - $$y(t) = x(t) \pm x(t+\tau)$$: $$E[y^2(t)] = 2R_x(0) \pm 2R_x(\tau)$$
  - $$R_x(0) \ge |R_x(\tau)|$$ follows from above
  - Covariance: $$C_x(\tau) = R_x(\tau) - \mu_x^2$$
  - $$C_x(0) = \sigma_x^2$$
  - For no offset in $$x(t)$$: constant term in $$R_x(\tau)$$ = DC power $$\mu_x^2$$
