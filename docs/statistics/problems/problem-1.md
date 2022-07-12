# Problem 1

Let $X_{1}, \ldots, X_{n}$ be independent identically distributed random variables. Find the maximum likelihood estimators of the parameter $\theta$ for the following distributions. (In each case $r$ is a known positive integer.)
- $X_i$ has a binomial distribution with parameters $r$ and $\theta$.
- $X_i$ has a negative binomial distribution with probability mass function

$$
f(x ; \theta)=\left(\begin{array}{c}
r+x-1 \\
x
\end{array}\right) \theta^{r}(1-\theta)^{x}, \quad x=0,1,2, \ldots
$$

- $X_i$ has a gamma distribution with probability density function

$$
f(x ; \theta)=\frac{\theta^{r}}{(r-1) !} x^{r-1} e^{-\theta x}, \quad x>0
$$

## Solution

### Subproblem 1
The likelihood function is,

$$
L(\theta)=f\left(X_{1}\right) * \ldots * f\left(X_{n}\right)=\left(\begin{array}{c}
r \\
X_{1}
\end{array}\right) \theta^{X_{1}}(1-\theta)^{r-X_{1}} * \ldots *\left(\begin{array}{c}
r \\
X_{n}
\end{array}\right) \theta^{X_{n}}(1-\theta)^{r-X_{n}}
$$

$$
L(\theta)=\prod_{i=1}^{n}\left(\begin{array}{c}
r \\
X_{i}
\end{array}\right) \theta^{\sum_{i=1}^{n} X_{i}}(1-\theta)^{n r-\sum_{i=1}^{n} X_{i}}
$$

The log-likelihood funciton is,

$$
l(\theta)=\ln L(\theta)=\sum_{i=1}^{n} \ln \left(\begin{array}{c}
r \\
X_{i}
\end{array}\right)+\sum_{i=1}^{n} X_{i} \ln (\theta)+\left(n r-\sum_{i=1}^{n} X_{i}\right) \ln (1-\theta)
$$

For maximum likelihood estimate,

$$
\begin{aligned}
&\frac{\partial}{\partial \theta} l(\theta)=0 \\
&\sum_{i=1}^{n} X_{i} / \theta-\left(n r-\sum_{i=1}^{n} X_{i}\right) /(1-\theta)=0 \\
&\sum_{i=1}^{n} X_{i} / \theta=\left(n r-\sum_{i=1}^{n} X_{i}\right) /(1-\theta) \\
&1 / \theta-\theta / \theta=\left(n r-\sum_{i=1}^{n} X_{i}\right) / \sum_{i=1}^{n} X_{i} \\
&1 / \theta=n r / \sum_{i=1}^{n} X_{i} \\
&\theta=\sum_{i=1}^{n} X_{i} / n r
\end{aligned}
$$

The maximum likelihood estimate for $\theta$ is,

$$
\hat{\theta}=\sum_{i=1}^{n} X_{i} / n r
$$

### Subproblem 2

The likelihood function is,

$$
\begin{aligned}
&L(\theta)=f\left(X_{1}\right) * \ldots * f\left(X_{n}\right) \\
&L(\theta)=\left(\begin{array}{c}
r+X_{1}-1 \\
X_{1}
\end{array}\right) \theta^{r}(1-\theta)^{X_{1}} * \ldots *\left(\begin{array}{c}
r+X_{n}-1 \\
X_{n}
\end{array}\right) \theta^{r}(1-\theta)^{X_{n}} \\
&L(\theta)=\prod_{i=1}^{n}\left(\begin{array}{c}
r+X_{i}-1 \\
X_{i}
\end{array}\right) \theta^{n r}(1-\theta)^{\sum_{i=1}^{n} X_{i}}
\end{aligned}
$$

The log-likelihood function is,

$$
l(\theta)=\ln L(\theta)=\sum_{i=1}^{n} \ln \left(\begin{array}{c}
r+X_{i}-1 \\
X_{i}
\end{array}\right)+n r * \ln (\theta)+\sum_{i=1}^{n} X_{i} * \ln (1-\theta)
$$

For maximum likelihood estimate,

$$
\begin{aligned}
&\frac{\partial}{\partial \theta} l(\theta)=0 \\
&n r / \theta-\sum_{i=1}^{n} X_{i} /(1-\theta)=0 \\
&n r / \theta=\sum_{i=1}^{n} X_{i} /(1-\theta) \\
&(1-\theta) / \theta=\sum_{i=1}^{n} X_{i} / n r \\
&1 / \theta-1=\sum_{i=1}^{n} X_{i} / n r \\
&1 / \theta=\sum_{i=1}^{n} X_{i} / n r+1 \\
&\theta=1 /\left(\sum_{i=1}^{n} X_{i} / n r+1\right)
\end{aligned}
$$

The maximum likelihood estimate for $\theta$ is,

$$
\hat{\theta}=1 /\left(\sum_{i=1}^{n} X_{i} / n r+1\right)
$$

### Subproblem 3

$$
\begin{aligned}
&L(\theta)=f\left(X_{1}\right) * \ldots * f\left(X_{n}\right) \\
&L(\theta)=\frac{\theta^{r}}{(r-1) !} X_{1}^{r-1} e^{-\theta X_{1}} * \ldots * \frac{\theta^{r}}{(r-1) !} X_{n}^{r-1} e^{-\theta X_{n}} \\
&L(\theta)=\frac{\theta^{n r}}{((r-1) !)^{n}} \prod_{i=1}^{n} X_{i}^{r-1} e^{-\theta \sum_{i=1}^{n} X_{i}}
\end{aligned}
$$

The log-likelihood function is,

$$
l(\theta)=\ln (L(\theta))=n r \ln (\theta)+n \ln ((r-1) !)+(r-1) \sum_{i=1}^{n} \ln \left(X_{i}\right)-\theta \sum_{i=1}^{n} X_{i}
$$

For maximum likelihood estimate,

$$
\begin{aligned}
&\frac{\partial}{\partial \theta} l(\theta)=0 \\
&n r / \theta-\sum_{i=1}^{n} X_{i}=0 \\
&n r / \theta=\sum_{i=1}^{n} X_{i} \\
&\theta=n r / \sum_{i=1}^{n} X_{i}
\end{aligned}
$$

The maximum likelihood estimate for $\theta$ is,

$$
\hat{\theta}=n r / \sum_{i=1}^{n} X_{i}
$$