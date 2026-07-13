# Random Variable - Practice Problems

## 1. Random Variable Basics (Page 1-3)

### Problem 1.1
Tossing a fair coin twice. $x$ is a random variable representing the number of heads appearing when two coins are tossed simultaneously.

Find:
$$P(x=0), \quad P(x=1), \quad P(x=2), \quad P(|x| \le 1)$$

### Problem 1.2
$Y$ is a random variable that represents the number of heads appearing when three coins are tossed simultaneously.

Find:
$$P(Y \le 3)$$

Also find:
$$P(Y^2 + 2 \le 6)$$

### Problem 1.3
You roll a fair dice. $S = \{1, 2, 3, 4, 5, 6\}$. Random variable $X$: (number appearing on the dice)$^2 - 6$.

Find:
$$P\left[\left(\frac{X^2+4}{2} - 10\right) > 0\right]$$

### Problem 1.4
A group of students typically take 30 min to 60 min to solve a Quiz. A random variable $X$ is defined such that it represents the time taken by a randomly selected student to solve the Quiz.

(a) What all values can $X$ take?
(b) Find $P(X = 35)$ and $P(X = 43.5)$.

### Problem 1.5
Tossing 3 coins simultaneously. $x$: number of heads appearing. Draw the PMF of R.V. $x$.

### Problem 1.6
$x$: number of heads appearing when 3 coins are tossed simultaneously. Draw the CDF of R.V. $x$.

Find:
$$F_x(0.5), \quad F_x(1), \quad F_x(-1), \quad F_x(1.5), \quad F_x(-0.5), \quad F_x(0), \quad F_x(3)$$

---

## 2. CDF and Probability Calculations (Page 4-6)

### Problem 2.1
CDF of R.V. $x$ is given. Find:

(a) $P(-1 < x \le 4)$
(b) $P(-1 < x < 4)$
(c) $P(-1 \le x < 4)$
(d) $P(-1 \le x \le 4)$
(e) $P(x = 2)$
(f) $P(x = 4)$

### Problem 2.2
Find which of the following CDF is valid. (Check properties: non-decreasing, $F_x(-\infty)=0$, $F_x(\infty)=1$, $F_x(a^+)=F_x(a)$)

### Problem 2.3
CDF of a R.V. $X$ is shown. $X$: Mixed R.V.

Find:
$P(X=1)$, $P(X=2)$, $P(X=-2)$, $P(-1 < X \le 3)$, $P(1 \le X < 4)$

---

## 3. PDF, Mixed R.V., and Valid PDF (Page 6-9)

### Problem 3.1
$x$: number of heads appearing when 3 coins are tossed simultaneously. Draw PMF, PDF & CDF of R.V. $x$.

### Problem 3.2
$x$: Mixed R.V. PDF of R.V. $x$ is shown.

(a) Find $\alpha$.
(b) Find $P(x=1)$.
(c) Find $P(x=3/2)$.
(d) Find $P(1 \le x < 3/2)$.

### Problem 3.3
Valid PDF = ? (Identify which of the given functions can be a valid PDF)

### Problem 3.4
PDF of RV $x$ is given:
$$f_x(x) = k e^{-3|x|}; \quad -\infty < x < \infty$$
Find the value of $k$.

### Problem 3.5
PDF of RV $x$ is shown. Find the CDF.

### Problem 3.6
PDF: $f_x(x) = a e^{-b|x|}$; $b > 0$, $a > 0$. Find CDF for $x > 0$ and for $x \le 0$.

### Problem 3.7
Find the following probabilities in terms of CDF and PDF:

(a) $P(x < 2)$
(b) $P(x > 2)$
(c) $P(x \ge 2)$
(d) $P(|x| > 2)$
(e) $P(|x| \le 2)$

---

## 4. Symmetry of R.V. (Page 10)

### Problem 4.1
A R.V. $x$ is called symmetrical about 0 if $\forall x \in \mathbb{R}$:
$$P[X \ge x] = P[X \le -x]$$
$F_x(x)$ is CDF of $x$ where $x$ is symmetrical about 0.

Find:
(i) $P\{|x| \le x\}$ is:
  (a) $1 - 2F_x(x)$ \quad (b) $1 + 2F_x(x)$ \quad (c) $2F_x(x) - 1$ \quad (d) $F_x(x) - 1$

(ii) $P\{|x| > x\}$ is:
  (a) $2[1 - F_x(x)]$ \quad (b) $2[1 + F_x(x)]$ \quad (c) $1 - F_x(x)$ \quad (d) $1 + F_x(x)$

(iii) $P\{x = x\}$ is:
  (a) $F_x(x) - F_x(-x) - 1$ \quad (b) $F_x(x) + F_x(-x) + 1$
  (c) $F_x(x) - F_x(-x) + 1$ \quad (d) $F_x(x) + F_x(-x) - 1$

---

## 5. Conditional Probability & Bayes' Theorem (Page 11-12)

### Problem 5.1
A die is rolled. What is the probability that the number is even, given that it is greater than 2?

### Problem 5.2
Suppose:
- 1% of people have a disease: $P(D) = 0.01$, $P(\text{No }D) = 0.99$
- Test is 99% accurate:
  - $P(\text{Positive} \mid D) = 0.99$
  - $P(\text{Positive} \mid \text{No }D) = 0.01$

What is the probability that a person actually has the disease given their test is positive?

### Problem 5.3
CDF of RV $Y$ is given as:
$$F_Y(y) = (1 - e^{-y})U(y)$$
Find:
$$P\left[\frac{Y < 2}{Y > -1}\right]$$

### Problem 5.4
Let sample space $S = \{s_i\}_{i=1}^4$.
$$P(s_1) = \frac{1}{6}, \quad P(s_2) = \frac{1}{3}, \quad P(s_3) = \frac{1}{3}, \quad P(s_4) = \frac{1}{6}$$
R.V. $X(s_i)$ is defined such that $X(s_i) = i - 2$; $1 \le i \le 4$. Draw PMF.

---

## 6. Double Integrals over Regions (Page 13-14)

### Problem 6.1
Draw region $R$: $x > 0$, $y > 0$, $x + y \le 2$.
Find:
$$\iint_R dx \cdot dy, \qquad \iint_R xy \, dx \, dy$$

### Problem 6.2
Draw region $R'$: $x > 0$, $y > 0$, $x + y \le 2$, $x + y \ge 1$.
Find:
$$\iint_{R'} dx \cdot dy, \qquad \iint_{R'} xy \, dx \, dy$$

---

## 7. Joint Distributions - 2D Random Variables (Page 15-23)

### Problem 7.1
$x$ and $y$ are two R.V. such that $x \in \{0, 1, 2\}$ (DRV), $y \in \{1, 2, 3\}$ (DRV).

Joint PMF $P(x=x, y=y)$:

|   | y=1 | y=2 | y=3 |
|---|-----|-----|-----|
| x=0 | 0.15 | 0.05 | 0.1 |
| x=1 | 0.1 | 0.03 | 0.17 |
| x=2 | 0.05 | 0.25 | 0.1 |

Find:
$$P(0 < x \le 2, \; 1 < y \le 3)$$
Also find $P(y=2)$.

### Problem 7.2
$$f_{XY}(x,y) = \begin{cases} b e^{-(x+y)} & ; \ 0 < x < 2 \text{ and } 0 < y < \infty \\ 0 & ; \text{ otherwise} \end{cases}$$

(i) Find $b = ?$
(ii) $P(X + Y < 1) = ?$
(iii) $P(X + Y = 1) = ?$

### Problem 7.3
Joint CDF of $x$ and $y$:
$$F_{xy}(x,y) = \begin{cases} \frac{5}{4} \left[ \frac{x + e^{-(x+1)y^2}}{x+1} - e^{-y^2} \right]; & 0 \le x \le 4, \ y \ge 0 \\ 0 & ; x < 0 \text{ and } y < 0 \\ 1 + \frac{1}{4} e^{-5y^2} - \frac{5}{4} e^{-y^2} & ; x \ge 4 \text{ and } y \ge 0 \end{cases}$$

Find:
$$P[2 < x \le 3], \qquad P[2 < x \le 3, \; 1 < y \le 4]$$

### Problem 7.4
The joint PDF of $X$ and $Y$ is given by:
$$f_{xy}(x,y) = xy e^{-(x^2+y^2)/2} u(x) u(y)$$

(a) Find the marginal PDFs $f_x(x)$ and $f_y(y)$, and the conditional PDFs $f_{x|y}(x|y)$ and $f_{y|x}(y|x)$.
(b) Are $X$ and $Y$ independent?

### Problem 7.5
Let the joint probability density function of random variables $X$ and $Y$ be given by:
$$f_{X,Y}(x,y) = \begin{cases} kxy & 0 < x < 1, \ 0 < y < x \\ 0, & \text{otherwise} \end{cases}$$

1. Find the value of $K$.
2. Compute the conditional probability:
$$P\left(y < \frac{1}{8} \mid x < \frac{1}{2}\right)$$

### Problem 7.6
$$f_{xy}(x,y) = cx(x-y); \quad 0 < x < 2; \quad -x < y < x$$
Find:
$$P[0 < Y < 2] = ?$$

### Problem 7.7
Consider the joint PDF of two random variables $X$ and $Y$:
$$f_{X,Y}(x,y) = \begin{cases} 8xy, & 0 \le x \le y \le 1 \\ 0, & \text{otherwise} \end{cases}$$
Determine the conditional PDF:
$$f_{Y|X}(y \mid x = \tfrac{1}{2})$$

### Problem 7.8
The joint PMF is given as:
$$P(x,y) = K(2x+3y); \quad x \in \{0, 1, 2\}, \ y \in \{1, 2, 3\}$$

Find:
(i) $P(y=1)$, $P(y=2)$, $P(y=3)$, $P(x=0)$, $P(x=1)$, $P(x=2)$
(ii) $P\left(\frac{x \ge 1}{y \le 1}\right)$, $P(x+y > 3)$

### Problem 7.9
Joint PDF of R.V. $X$ and $Y$ is given as:
$$f_{xy}(x,y) = \begin{cases} 3xy; & x > 0, \ y > 0, \ x+y \le 2 \\ 0; & \text{otherwise} \end{cases}$$
Find:
$$P[x+y \ge 1] = ?$$

---

## 8. Expectation, Mean, Variance, Moments (Page 24-28)

### Problem 8.1
A random variable $X$ represents the number of chocolates a child gets when spinning a wheel. Find $E[X]$, given:
- $P(X = 1) = 0.2$
- $P(X = 2) = 0.5$
- $P(X = 3) = 0.3$

### Problem 8.2
Let $X$ be a continuous random variable with PDF:
$$f_X(x) = 2x \quad \text{for } x \in [0, 1], \quad f_X(x) = 0 \text{ otherwise}$$
Find $E[X]$.

### Problem 8.3
A random variable $Y$ is defined as $Y = aX + b$, where $a$ and $b$ are constants. Find $E[Y]$ given that $X$ is a R.V. whose PDF is $f_X(x)$.

### Problem 8.4
A R.V. $x$ is given. Another R.V. $y$ is defined as $y = \sin x$. Find the mean of random variable $y$. PDF of R.V. $x$ is given as $f_x(x)$.

### Problem 8.5
The PDF of R.V. is shown (uniform from -1 to 3). Find its mean and variance.

### Problem 8.6
A R.V. $Y$ is defined as $Y = aX + b$. Find mean and variance of $Y$ in terms of mean and variance of $X$.

### Problem 8.7
$Y = -2X + 3$, $\mu_X = 3$, $\sigma_X^2 = 4$. Find $\sigma_Y^2$ and $\mu_Y$.

### Problem 8.8
A R.V. $X$ takes values from 1 to 5 with probabilities as shown:

| x | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| P(x=x) | 0.1 | 0.2 | 0.4 | 0.2 | 0.1 |

Find $E[X]$, $E[X^2]$, and $\sigma_X^2$.

### Problem 8.9
PDF of a R.V. is given:
$$f_x(x) = \frac{1}{2}|x|e^{-|x|}; \quad -\infty < x < \infty$$
Find mean, variance and $11^{\text{th}}$ order moment about origin.

### Problem 8.10
Let the R.V. $x$ represent the number of times a dice needs to be thrown till 3 is observed for the first time. Find expectation of $x$.

---

## 9. Joint Moments, Covariance, Correlation (Page 29-34)

### Problem 9.1
$w = ax + by$. Find mean, MSV and variance of $w$.

### Problem 9.2
$w = 3x - 2y$. Given $\bar{x} = 1/2$, $\bar{y} = 2$, $\overline{x^2} = 5/2$, $\overline{y^2} = 19/2$, $C_{xy} = -\frac{1}{2\sqrt{3}}$.

(i) Find mean, MSV and variance of $w$.
(ii) Find correlation coefficient of R.V. $x$ and $y$.

### Problem 9.3
$$f_{xy}(x,y) = \begin{cases} \frac{xy}{9}; & 0 < x < 2 \text{ and } 0 < y < 3 \\ 0; & \text{otherwise} \end{cases}$$
Find covariance of $x$ and $y$. Check independency, orthogonality and un-correlation.

### Problem 9.4
$z = -8x + 4y$. Find variance of R.V. $z$ when:
(a) R.V. $x$ and $y$ are uncorrelated.
(b) R.V. $x$ and $y$ are orthogonal.
(c) R.V. $x$ and $y$ are independent.

### Problem 9.5
DRV $x \in \{-1, 0, 1\}$; $P(x=-1) = P(x=0) = P(x=1) = 1/3$. $y = x^2$.

Find $E[x]$, $E[y]$, $E[xy] = ?$
Comment on independency, orthogonality and uncorrelation.

### Problem 9.6
If $f_x(x) = f_x(-x)$ (PDF of R.V. $x$ is even), find $E[x]$.

### Problem 9.7
$$f_{xy}(x,y) = \begin{cases} \frac{6}{\pi}(x^2+y^2); & x^2+y^2 \le 1 \\ 0; & \text{otherwise} \end{cases}$$
Comment on orthogonality, independency and un-correlation.

### Problem 9.8
$$f_{xy}(x,y) = \begin{cases} 6(1-y); & 0 \le x \le y \le 1 \\ 0; & \text{otherwise} \end{cases}$$
Are $x$ and $y$ independent?

### Problem 9.9
$x$ and $y$ are two R.V.; $\bar{x} = 1$, $\bar{y} = 2$, $\sigma_x^2 = 6$, $\sigma_y^2 = 9$. $\rho_{xy} = -2/3$.
Find covariance and correlation.

### Problem 9.10
Correct statement?
(a) If $x$ and $y$ are orthogonal then $\sigma_{xy} = -\mu_x \mu_y$.
(b) If $x$ and $y$ are uncorrelated then $R_{xy} = \mu_x \mu_y$.
(c) If $x$ and $y$ are orthogonal then $R_{xy} = 0$.
(d) If $x$ and $y$ are uncorrelated then $\sigma_{xy} = 0$.

---

## 10. Q-Function and Error Function (Page 34-35)

### Problem 10.1
Your answer came out to be $Q(0.4)$ but all the options are mentioned in terms of $P(x)$ where:
$$P(x) = \int_0^x e^{-t^2} dt$$
Write $Q(0.4)$ in terms of $P(x)$.

Options:
(a) $\frac{1}{2} - \frac{1}{\sqrt{\pi}} P\left(\frac{0.4}{\sqrt{2}}\right)$
(b) $\frac{1}{2} + \frac{1}{\sqrt{\pi}} P\left(\frac{0.4}{\sqrt{2}}\right)$
(c) $\frac{1}{2} - \frac{1}{\sqrt{\pi}} P(0.2)$
(d) $\frac{1}{2} + \frac{1}{\sqrt{\pi}} P(0.2)$

---

## 11. Standard Distributions: Uniform (Page 35-36)

### Problem 11.1
$x \sim U[-1, 3]$; find mean, MSV and variance.

### Problem 11.2
A R.V. $x = 3\cos\theta$, where R.V. $\theta \sim U[0, 2\pi]$. Find variance of R.V. $x$.

---

## 12. Standard Distributions: Gaussian / Normal (Page 37-40)

### Problem 12.1
$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$
Find:
$$\int_{-\infty}^{\infty} e^{-(x-2)^2} dx = ?$$

### Problem 12.2
$$I = \int_{-\infty}^{\infty} x^2 \exp\left[-\frac{(x-2)^2}{4}\right] dx$$
Find $I = ?$

### Problem 12.3
$$I = \int_0^{\infty} x e^{-x^2} dx$$

### Problem 12.4
$$f_x(x) = k e^{-x^2/2}$$
Find $k = ?$

### Problem 12.5
$$I = \int_2^{\infty} e^{-(x-2)^2/30} dx$$

### Problem 12.6
$$x \sim N(\mu_x, \sigma_x^2)$$
Find $P(x > a) = ?$ Express in terms of $Q$-function.

### Problem 12.7
$$x \sim N(\mu_x, \sigma_x^2)$$
Find $P(a < x \le b)$, $P(a \le x < b)$, $P(a \le x \le b)$ in terms of $Q$-function.

---

## 13. Other Distributions (Page 41-42)

### Problem 13.1
$x \sim \Delta(-1, 2, 4)$ (Triangular distribution).
$$f_x(x) = \begin{cases} \frac{2}{15}(x+1); & -1 \le x \le 2 \\ -\frac{x}{5} + \frac{4}{5}; & 2 \le x \le 4 \\ 0; & \text{otherwise} \end{cases}$$

(i) Find mean of $x$.
(ii) $P(0 < x \le 2) = ?$
(iii) $E[x] = ?$

### Problem 13.2
$$f_x(x) = \begin{cases} \frac{x}{3} e^{-x^2/6} & ; x > 0 \\ 0 & ; \text{otherwise} \end{cases}$$
Find mean.

### Problem 13.3
$$I = \int_{-\infty}^{\infty} (x+3)^2 e^{-3(x+3)^2} dx = ?$$

### Problem 13.4
$$f_X(x) = \frac{1}{\sqrt{\pi}} e^{-(x-0.5)^2}$$
Given that $P(X > L) = 0.16$.

Find:
(a) $P(0.5 < X < L)$
(b) $P(X < 0.5)$
(c) $P(X \le 0)$
(d) $F_X(L)$
(e) $P(|X - 0.5| < 0.5)$

---

## 14. Linear Transformation of Random Variables (Page 43-44)

### Problem 14.1
$x \sim U[-2, 3]$. $Y = 2x - 3$.

(i) Find the PDF of $Y$.
(ii) Find $E[Y]$.
(iii) Find $P[Y > 2]$.

### Problem 14.2
$x \sim N(2, 4)$. Another R.V. $Y$ is defined by the relation $Y = -x + 3$.

(i) Find PDF of $Y$.
(ii) Find $P(-1 < Y < 8)$.

### Problem 14.3
$$f_x(x) = \begin{cases} x & ; \ 0 \le x < 1 \\ 2-x & ; \ 1 \le x \le 2 \\ 0 & ; \text{otherwise} \end{cases}$$
$Y = 3x - 1$.

(a) Sketch $f_Y(y)$ and define it.
(b) Find $E[Y]$.

---

## 15. DRV Transformation & Binary R.V. (Page 45-47)

### Problem 15.1
Let $x \in \{0, 1\}$ represent a binary R.V. indicating the bit sent in a digital communication system.
$$P_x(0) = 0.7, \quad P_x(1) = 0.3$$
Let the modulator signal be $S = 2x - 1$. $N \sim N(0, 1)$. Received signal $R = S + N$.

(a) Find the PMF of $S$.
(b) Find the expected value of $R$.

### Problem 15.2
$x \in \{-2, -1, 0, 1, 2\}$, $P_X(x) = 1/5$ for each $x$.
R.V. $Y$ is defined as $Y = x^2$.

(a) Find the PMF of $Y$.
(b) Find variance of $Y$.

### Problem 15.3
Let $x, z \in \{0, 1\}$ be independent DRVs with:
$$P_x(0) = 0.6, \quad P_x(1) = 0.4$$
$$P_z(0) = 0.7, \quad P_z(1) = 0.3$$
$Y = x \oplus z$ (XOR).

(a) Find PMF of $Y$.
(b) Find $E[Y]$.

### Problem 15.4
Let $x \in \{1, 2, 3, 4\}$ with $P(x=1) = 3/8$, $P(x=2) = 1/4$, $P(x=3) = 1/8$, $P(x=4) = 1/4$.
$$Y = \begin{cases} x & ; \text{ even} \\ 5 - x & ; \text{ odd} \end{cases}$$
Find $F_Y(4) - F_Y(2)$.

### Problem 15.5
Let $x_1, x_2 \in \{1, 2, 3\}$ be i.i.d. random variables with:
$$P(x) = \begin{cases} 0.2 & ; x=1 \\ 0.5 & ; x=2 \\ 0.3 & ; x=3 \end{cases}$$
Define $M = \max(x_1, x_2)$ and $m = \min(x_1, x_2)$.

(a) Find PMF of $M$ and $m$.
(b) Are $M$ and $m$ independent?
(c) Find $P(M = 3 / m = 3)$.

---

## 16. CRV to DRV Transformation (Page 48-49)

### Problem 16.1
$x \sim U[0, 5]$. Another R.V. $Y$ is defined by a quantization mapping (given in figure).

(i) Find the expression of $f_Y(y)$.
(ii) Find $E[Y]$.

### Problem 16.2
A uniformly distributed random variable $X$ with PDF:
$$f_X(x) = \frac{1}{10}(u(x+5) - u(x-5))$$
where $u(\cdot)$ is the unit step function, is passed through a transformation (given in figure).
The PDF of the transformed random variable $Y$ would be:

Options:
(A) $f_Y(y) = \frac{1}{5}(u(y+2.5) - u(y-2.5))$
(B) $f_Y(y) = 0.5\delta(y) + 0.5\delta(y-1)$
(C) $f_Y(y) = 0.25\delta(y+2.5) + 0.25\delta(y-2.5) + 0.5\delta(y)$
(D) $f_Y(y) = 0.25\delta(y+2.5) + 0.25\delta(y-2.5) + \frac{1}{10}(u(y+2.5) - u(y-2.5))$

### Problem 16.3
$x \sim N(0, 1)$.
$$Y = \begin{cases} 0 & ; -1 < x < 1 \\ 1 & ; x > 2 \\ -1 & ; x < -2 \\ x-1 & ; 1 < x < 2 \\ x+1 & ; -2 < x < -1 \end{cases}$$
Find $f_Y(y)$.

---

## 17. Order Statistics & i.i.d. R.V. (Page 50-52)

### Problem 17.1
4 R.V. $x, y, z, w$ are i.i.d. R.V.
(a) $P(X \text{ is largest}) = ?$
(b) $P(X > Y > Z > W) = ?$

### Problem 17.2
Given that $\max(x, y) > z$, which of the following statement is true?
(a) $x > z, y < z$ \quad (b) $x < z, y > z$ \quad (c) $x > z, y > z$ \quad (d) all

### Problem 17.3
Given that $\max(x, y) < z$, which of the following statement is true?
(a) $x < z, y < z$ \quad (b) $x > z, y < z$ \quad (c) $x < z, y > z$ \quad (d) $x > z, y > z$

### Problem 17.4
$x$ and $Y$ are two independent CRV.
$P(x > t_{1/2}) = 0.3$, $P(Y > t_{1/2}) = 0.4$.
Find $P[\max(x, Y) > t_{1/2}]$.

### Problem 17.5
Given that $\min(x, y) > z$, which of the following statement is true?
(a) $x > z, y < z$ \quad (b) $x < z, y > z$ \quad (c) $x > z, y > z$ \quad (d) $x < z, y < z$

### Problem 17.6
Given that $\min(x, y) < z$, which of the following statement is true?
(a) $x < z, y < z$ \quad (b) $x > z, y < z$ \quad (c) $x < z, y > z$ \quad (d) all

### Problem 17.7
$x$ and $Y$ are two independent CRV.
$P(x > t_{1/2}) = 0.3$, $P(Y > t_{1/2}) = 0.4$.
Find $P[\min(x, Y) < t_{1/2}]$.

### Problem 17.8
$x \sim U[-2, 4]$; $y \sim U[-1, 3]$; $x$ and $y$ are independent R.V.
$M = \max(x, y)$, $m = \min(x, y)$.
Find:
(a) $P(m < 0)$
(b) $P(M > 0)$
(c) $P(-1 < m < 2)$
(d) $P(-1 < M < 2)$
(e) $P(-1 < m < 0 < M < 2)$

---

## 18. Sum of Independent R.V. and CLT (Page 53-57)

### Problem 18.1
$x \sim U[-2, 2]$, $y \sim U[-3, 3]$. $x$ and $y$ are independent R.V.

Find:
$$P[x + y \le 2], \quad P[x + 2y - 3 < 2], \quad P[|x + y| \le 2]$$

### Problem 18.2
$x \sim N(2, 4)$; $y \sim N(3, 2)$; $x$ and $y$ are independent.
Find:
$$P\left(x > \frac{3y}{2}\right)$$

### Problem 18.3
$x \sim N(0, 4)$; $y \sim N(0, 9)$; $\sigma_{xy} = 3$.
Find:
$$P(|x - y| > 2)$$

### Problem 18.4
$x \sim N(1, 4)$; $y \sim N(2, 9)$; $z \sim N(3, 4)$; $x, y, z$ are independent.
Find:
$$P(3x - 2y > 3z + 6)$$

### Problem 18.5
$x$ and $y$ are two independent R.V.
$$f_x(x) = 2e^{-2x}u(x), \quad f_y(y) = 3e^{-3y}u(y)$$
Another R.V. $z$ is defined as $z = x + y$.

(a) Find $P(z > 1)$.
(b) Find PDF of $z$.

### Problem 18.6
$u, v, w, x, y$ are 5 i.i.d. R.V. $\sim U[0, 1]$.
$$Z = U + 2V - W + x - 2Y$$
Find $P(Z > 1) = ?$

Options: (a) 0.5 \quad (b) 0.3 \quad (c) 0.8 \quad (d) 1

---

## 19. Non-Linear Transformation of R.V. (Page 58-59)

### Problem 19.1
$$f_x(x) = 2e^{-2x}U(x)$$
$$Y = \ln(x+1)$$
Find PDF of $Y$.

### Problem 19.2
$x \sim U[0, 2]$
$$Y = \frac{1}{x}$$
Find PDF of $Y$.

### Problem 19.3
$x \sim U[-1, 1]$
$$Y = x^2$$
Find PDF of $Y$.

### Problem 19.4
$x \sim U[0, \pi]$
$$Y = \cos x$$
Find PDF of $Y$.

### Problem 19.5
$x \sim U[-\pi, \pi]$
$$Y = \cos x$$
Find PDF of $Y$.

---

## 20. Miscellaneous (Page 60-62)

### Problem 20.1
$U$ and $V$ are i.i.d. R.V. with zero mean. CDF of $U$ and $2V$ are $F(x)$ and $G(x)$ respectively.
Correct statement for all values of $x$:
(a) $F(x) - G(x) \le 0$
(b) $F(x) - G(x) \ge 0$
(c) $[F(x) - G(x)] \cdot x \le 0$
(d) $[F(x) - G(x)] \cdot x \ge 0$

### Problem 20.2
Let $x_1, x_2, x_3$ i.i.d. R.V. $\sim U[0, 1]$. (GATE 2014)

Find:
(a) $P(x_1 + x_2 + x_3 \le 1)$
(b) $P(x_1 + x_2 + x_3 \le 2)$
(c) $P(x_1 + x_2 + x_3 \le 3)$
(d) $P(x_1 + x_2 < x_3)$
