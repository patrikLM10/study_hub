# Random Variable - Mind Map

- **1. Random Variable (RV)**
  - A function mapping sample space to real numbers: $X: S \to \mathbb{R}$
  - **Types**
    - **Discrete RV (DRV)** — takes countable values (e.g., $\{0,1,2\}$)
    - **Continuous RV (CRV)** — takes uncountable values in an interval (e.g., $[30,60]$)
    - **Mixed RV** — combination of discrete points + continuous intervals (e.g., $x \in \{1,2\} + [3,6]$)
    - Key difference: For CRV, $P(X=a) = 0$ always

- **2. Probability Functions**
  - **PMF (DRV only)**: $p_X(x) = P(X=x)$
    - $\sum_i p_X(x_i) = 1$
  - **PDF (CRV only)**: $f_X(x) = \frac{d}{dx}F_X(x)$
    - $f_X(x) \ge 0$, $\int_{-\infty}^{\infty} f_X(x)\,dx = 1$
  - **CDF (both)**: $F_X(x) = P(X \le x)$
    - Properties: $0 \le F_X(x) \le 1$, non-decreasing, $F_X(-\infty)=0$, $F_X(\infty)=1$
    - Right-continuous: $F_X(a^+) = F_X(a)$
    - $P(a < X \le b) = F_X(b) - F_X(a)$
    - $P(X=a) = F_X(a) - F_X(a^-)$ (jump at discontinuity)
  - **For CRV**: $F_X(x) = \int_{-\infty}^{x} f_X(t)\,dt$
  - **Relationship**: $f_X(x) = \frac{d}{dx}F_X(x)$

- **3. Joint Distributions (2D RV)**
  - **Joint CDF**: $F_{XY}(x,y) = P(X \le x, Y \le y)$
  - **Joint PDF**: $f_{XY}(x,y) = \frac{\partial^2}{\partial x \partial y}F_{XY}(x,y)$
  - **Marginal PDF**: $f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x,y)\,dy$, $f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x,y)\,dx$
  - **Conditional PDF**: $f_{X|Y}(x|y) = \frac{f_{XY}(x,y)}{f_Y(y)}$, $f_{Y|X}(y|x) = \frac{f_{XY}(x,y)}{f_X(x)}$
  - **Rectangle Probability**: $P(a<X\le b, c<Y\le d) = F_{XY}(b,d) + F_{XY}(a,c) - F_{XY}(a,d) - F_{XY}(b,c)$

- **4. Expectation & Statistical Parameters**
  - **Expectation Operator** $E[\cdot]$
    - DRV: $E[X] = \sum_i x_i P(X=x_i)$
    - CRV: $E[X] = \int_{-\infty}^{\infty} x f_X(x)\,dx$
    - $E[g(X)] = \int g(x) f_X(x)\,dx$ or $\sum g(x_i) p_X(x_i)$
    - **Properties**: $E[aX \pm bY] = aE[X] \pm bE[Y]$, $E[c] = c$
  - **Mean**: $\mu_X = E[X]$ (1st moment about origin)
  - **Mean Square Value**: $E[X^2]$ (2nd moment about origin) — Total Power
  - **Variance**: $\sigma_X^2 = E[(X-\mu_X)^2] = E[X^2] - \mu_X^2$ — AC Power
  - **Total Power**: $E[X^2] = \sigma_X^2 + \mu_X^2$
  - **Standard Deviation**: $\sigma_X = \sqrt{\sigma_X^2}$
  - **n-th Moment about origin**: $E[X^n]$
  - **n-th Moment about mean**: $E[(X-\mu_X)^n]$

- **5. Two-Dimensional Statistical Parameters**
  - **Joint Moment (correlation)**: $R_{XY} = E[XY] = \iint xy\,f_{XY}(x,y)\,dx\,dy$
  - **Covariance**: $\sigma_{XY} = C_{XY} = E[XY] - E[X]E[Y] = R_{XY} - \mu_X\mu_Y$
  - **Correlation Coefficient**: $\rho_{XY} = \frac{\sigma_{XY}}{\sigma_X \sigma_Y} \quad (-1 \le \rho \le 1)$

- **6. Relations Between Two RVs**
  - **Independent**: $f_{XY}=f_Xf_Y$, $F_{XY}=F_XF_Y$, $E[g(X)h(Y)] = E[g(X)]E[h(Y)]$
  - **Uncorrelated**: $E[XY] = E[X]E[Y]$ $\Rightarrow$ $\sigma_{XY}=0$
  - **Orthogonal**: $E[XY] = 0$
  - **Ladder**: Independent $\Rightarrow$ Uncorrelated (converse false except Gaussian)
  - **If Gaussian + Uncorrelated $\Rightarrow$ Independent**

- **7. Linear Transformations**
  - $Y = aX + b$ preserves distribution type (Uniform→Uniform, Gaussian→Gaussian)
    - $\mu_Y = a\mu_X + b$, $\sigma_Y^2 = a^2\sigma_X^2$
  - $W = aX + bY$ (two RVs)
    - $\mu_W = a\mu_X + b\mu_Y$
    - $\sigma_W^2 = a^2\sigma_X^2 + b^2\sigma_Y^2 + 2ab\sigma_{XY}$
    - If independent: $\sigma_W^2 = a^2\sigma_X^2 + b^2\sigma_Y^2$

- **8. Standard Distributions**
  - **Uniform** $X \sim U[a,b]$
    - $f_X(x) = \frac{1}{b-a},\ a<x<b$
    - $\mu = \frac{a+b}{2}$, $\sigma^2 = \frac{(b-a)^2}{12}$
    - Symmetric about 0: $U[-\alpha,\alpha]$ → $\mu=0$, $\sigma^2=\alpha^2/3$
  - **Gaussian (Normal)** $X \sim N(\mu,\sigma^2)$
    - $f_X(x) = \frac{1}{\sqrt{2\pi}\sigma}e^{-(x-\mu)^2/2\sigma^2}$
    - $\mu$ = mean, $\sigma^2$ = variance
    - $P(X > a) = Q\!\left(\frac{a-\mu}{\sigma}\right)$
    - $P(a<X<b) = Q\!\left(\frac{a-\mu}{\sigma}\right) - Q\!\left(\frac{b-\mu}{\sigma}\right)$
    - $F_X(\mu) = 0.5$, symmetric about $\mu$
  - **Q-function**: $Q(x) = \frac{1}{\sqrt{2\pi}}\int_x^\infty e^{-t^2/2}dt$
    - $Q(-x) = 1-Q(x)$, $Q(0)=0.5$, $Q(\infty)=0$
    - Relation to error function: $Q(x) = \frac12\text{erfc}(x/\sqrt{2})$
  - **Other distributions**: Exponential, Rayleigh, Gamma, Laplacian, Chi-square, Cauchy, Triangular, Bernoulli, Binomial, Poisson

- **9. Transformation of Random Variables**
  - **Linear**: $Y = aX+b$ → distribution type preserved
  - **Non-linear (CRV→CRV)**: Use CDF Method
    1. $F_Y(y) = P(g(X) \le y)$
    2. Solve inequality for $X$
    3. Express using $F_X$ or integral of $f_X$
    4. $f_Y(y) = \frac{d}{dy}F_Y(y)$
  - **DRV→DRV**: Map each $x_i$ to $y=g(x_i)$, sum probabilities for duplicate $y$ values
  - **CRV→DRV (quantization)**: PDF of $Y$ is impulses at quantized levels with weights = probability of each quantization interval
  - **Joint transformation**: $Z = aX+bY$, use convolution for sum of independent RVs: $f_Z = f_X * f_Y$

- **10. Max & Min of Independent RVs**
  - $P(\max(X,Y) > t) = 1 - P(X<t)P(Y<t)$
  - $P(\max(X,Y) < t) = P(X<t)P(Y<t)$
  - $P(\min(X,Y) > t) = P(X>t)P(Y>t)$
  - $P(\min(X,Y) < t) = 1 - P(X>t)P(Y>t)$
  - For $n$ i.i.d. RVs: $P(X_1\text{ is largest}) = 1/n$

- **11. Central Limit Theorem (CLT)**
  - Sum of $n$ i.i.d. RVs (with finite $\mu,\sigma$) → Gaussian as $n\to\infty$
  - Applies even if individual RVs are not Gaussian
  - Used to approximate probabilities of sums/averages

- **12. I.I.D. Random Process**
  - Independent & Identically Distributed RP $\{X_n\}$
  - $R_{XX}(k) = \begin{cases} E[X_n^2], & k=0 \\ (E[X_n])^2, & k\ne 0 \end{cases}$
  - $R_{XX}(k) = \delta(k)$ for zero-mean, unit-variance I.I.D.
  - $C_{XX}(k) = R_{XX}(k)$ when $\mu=0$