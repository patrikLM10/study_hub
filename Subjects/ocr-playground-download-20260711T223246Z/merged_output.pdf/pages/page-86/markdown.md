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