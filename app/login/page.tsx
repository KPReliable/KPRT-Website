"use client";

import React, { useState } from "react";
import Link from "next/link";
import "@/app/styles/login.css"
type Mode = "login" | "register";

interface LoginForm   { email: string; password: string; }
interface RegisterForm { name: string; email: string; phone: string; password: string; confirm: string; }

/* ============================================================
   ICON COMPONENTS — defined outside to avoid render errors
   ============================================================ */
const EyeOn: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOff: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16">
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const LoginPage: React.FC = () => {
  const [mode, setMode]           = useState<Mode>("login");
  const [loginForm, setLoginForm] = useState<LoginForm>({ email: "", password: "" });
  const [regForm, setRegForm]     = useState<RegisterForm>({ name: "", email: "", phone: "", password: "", confirm: "" });
  const [loginErr, setLoginErr]   = useState<Partial<LoginForm>>({});
  const [regErr, setRegErr]       = useState<Partial<RegisterForm>>({});
  const [showPass, setShowPass]   = useState(false);
  const [showConf, setShowConf]   = useState(false);
  const [loading, setLoading]     = useState(false);
  const [gLoading, setGLoading]   = useState(false);
  const [registered, setRegistered] = useState(false);

  const switchMode = (m: Mode) => {
    setMode(m);
    setLoginErr({});
    setRegErr({});
    setShowPass(false);
    setShowConf(false);
  };

  const validateLogin = () => {
    const e: Partial<LoginForm> = {};
    if (!loginForm.email.trim())                      e.email    = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(loginForm.email))   e.email    = "Enter a valid email";
    if (!loginForm.password)                           e.password = "Password is required";
    else if (loginForm.password.length < 6)            e.password = "Minimum 6 characters";
    setLoginErr(e);
    return !Object.keys(e).length;
  };

  const validateReg = () => {
    const e: Partial<RegisterForm> = {};
    if (!regForm.name.trim())                         e.name     = "Full name is required";
    if (!regForm.email.trim())                        e.email    = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(regForm.email))    e.email    = "Enter a valid email";
    if (!regForm.password)                            e.password = "Password is required";
    else if (regForm.password.length < 8)             e.password = "Minimum 8 characters";
    if (!regForm.confirm)                             e.confirm  = "Please confirm your password";
    else if (regForm.confirm !== regForm.password)    e.confirm  = "Passwords do not match";
    setRegErr(e);
    return !Object.keys(e).length;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateLogin()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    // TODO: signIn("credentials", { email, password, callbackUrl: "/dashboard" })
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateReg()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setRegistered(true);
    // TODO: call your registration API
  };

  const handleGoogle = async () => {
    setGLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setGLoading(false);
    // TODO: signIn("google", { callbackUrl: "/dashboard" })
  };

  return (
    <div className="lp-root">

      {/* Background decoration */}
      <div className="lp-bg-blob lp-bg-blob--1" aria-hidden="true" />
      <div className="lp-bg-blob lp-bg-blob--2" aria-hidden="true" />

      <div className="lp-card">

        {/* ---- Logo ---- */}
        <Link href="/" className="lp-logo">
          <div className="lp-logo-mark">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
          <div>
            <p className="lp-logo-name">QualityInspect</p>
            <p className="lp-logo-sub">Inspection &amp; Quality Services</p>
          </div>
        </Link>

        {/* ---- Tabs ---- */}
        <div className="lp-tabs" role="tablist">
          <button
            role="tab" aria-selected={mode === "login"}
            className={`lp-tab${mode === "login" ? " lp-tab--active" : ""}`}
            onClick={() => switchMode("login")}
          >
            Sign In
          </button>
          <button
            role="tab" aria-selected={mode === "register"}
            className={`lp-tab${mode === "register" ? " lp-tab--active" : ""}`}
            onClick={() => switchMode("register")}
          >
            Create Account
          </button>
          <span className="lp-tab-indicator"
            style={{ transform: mode === "login" ? "translateX(0)" : "translateX(100%)" }} />
        </div>

        {/* ---- Google button ---- */}
        <button
          type="button" className="lp-google-btn"
          onClick={handleGoogle} disabled={gLoading || loading}
          aria-label={mode === "login" ? "Sign in with Google" : "Sign up with Google"}
        >
          {gLoading ? (
            <span className="lp-spinner lp-spinner--dark" aria-hidden="true" />
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          )}
          <span>{gLoading ? "Please wait…" : mode === "login" ? "Continue with Google" : "Sign up with Google"}</span>
        </button>

        {/* ---- Divider ---- */}
        <div className="lp-divider">
          <span className="lp-divider-line" />
          <span className="lp-divider-text">or with email</span>
          <span className="lp-divider-line" />
        </div>

        {/* ================================================
            LOGIN FORM
        ================================================ */}
        {mode === "login" && (
          <form onSubmit={handleLogin} className="lp-form" noValidate>

            <div className="lp-field">
              <label className="lp-label" htmlFor="l-email">Email Address</label>
              <div className={`lp-input-wrap${loginErr.email ? " lp-input-wrap--error" : ""}`}>
                <svg className="lp-input-icon" viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <input id="l-email" name="email" type="email" className="lp-input"
                  placeholder="you@company.com" value={loginForm.email}
                  onChange={(e) => setLoginForm((p) => ({ ...p, email: e.target.value }))}
                  autoComplete="email" disabled={loading || gLoading} />
              </div>
              {loginErr.email && <span className="lp-error">{loginErr.email}</span>}
            </div>

            <div className="lp-field">
              <div className="lp-label-row">
                <label className="lp-label" htmlFor="l-pass">Password</label>
                <Link href="/forgot-password" className="lp-forgot">Forgot password?</Link>
              </div>
              <div className={`lp-input-wrap${loginErr.password ? " lp-input-wrap--error" : ""}`}>
                <svg className="lp-input-icon" viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"/>
                </svg>
                <input id="l-pass" name="password"
                  type={showPass ? "text" : "password"}
                  className="lp-input" placeholder="••••••••"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm((p) => ({ ...p, password: e.target.value }))}
                  autoComplete="current-password" disabled={loading || gLoading} />
                <button type="button" className="lp-eye"
                  onClick={() => setShowPass((p) => !p)} tabIndex={-1}>
                  {showPass ? <EyeOff /> : <EyeOn />}
                </button>
              </div>
              {loginErr.password && <span className="lp-error">{loginErr.password}</span>}
            </div>

            <label className="lp-remember">
              <input type="checkbox" className="lp-checkbox" />
              <span className="lp-checkbox-custom" />
              <span className="lp-remember-text">Remember me for 30 days</span>
            </label>

            <button type="submit" className="lp-submit" disabled={loading || gLoading}>
              {loading
                ? <><span className="lp-spinner" />Signing in…</>
                : <>Sign In <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg></>}
            </button>

          </form>
        )}

        {/* ================================================
            REGISTER FORM
        ================================================ */}
        {mode === "register" && (
          <>
            {registered ? (
              <div className="lp-success">
                <div className="lp-success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" width="32" height="32">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className="lp-success-title">Account Created!</h3>
                <p className="lp-success-text">Your account is ready. Sign in to get started.</p>
                <button className="lp-success-cta"
                  onClick={() => { setRegistered(false); switchMode("login"); }}>
                  Go to Sign In
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="lp-form" noValidate>

                {/* Name */}
                <div className="lp-field">
                  <label className="lp-label" htmlFor="r-name">Full Name</label>
                  <div className={`lp-input-wrap${regErr.name ? " lp-input-wrap--error" : ""}`}>
                    <svg className="lp-input-icon" viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                    <input id="r-name" name="name" type="text" className="lp-input"
                      placeholder="Rajesh Sharma" value={regForm.name}
                      onChange={(e) => setRegForm((p) => ({ ...p, name: e.target.value }))}
                      autoComplete="name" disabled={loading || gLoading} />
                  </div>
                  {regErr.name && <span className="lp-error">{regErr.name}</span>}
                </div>

                {/* Email */}
                <div className="lp-field">
                  <label className="lp-label" htmlFor="r-email">Email Address</label>
                  <div className={`lp-input-wrap${regErr.email ? " lp-input-wrap--error" : ""}`}>
                    <svg className="lp-input-icon" viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <input id="r-email" name="email" type="email" className="lp-input"
                      placeholder="you@company.com" value={regForm.email}
                      onChange={(e) => setRegForm((p) => ({ ...p, email: e.target.value }))}
                      autoComplete="email" disabled={loading || gLoading} />
                  </div>
                  {regErr.email && <span className="lp-error">{regErr.email}</span>}
                </div>

                {/* Phone */}
                <div className="lp-field">
                  <label className="lp-label" htmlFor="r-phone">
                    Phone Number <span className="lp-optional">(optional)</span>
                  </label>
                  <div className="lp-input-wrap">
                    <span className="lp-phone-prefix">+91</span>
                    <input id="r-phone" name="phone" type="tel"
                      className="lp-input lp-input--no-border"
                      placeholder="98765 43210" value={regForm.phone}
                      onChange={(e) => setRegForm((p) => ({ ...p, phone: e.target.value }))}
                      autoComplete="tel" disabled={loading || gLoading} />
                  </div>
                </div>

                {/* Password + Confirm — 2 col */}
                <div className="lp-two-col">
                  <div className="lp-field">
                    <label className="lp-label" htmlFor="r-pass">Password</label>
                    <div className={`lp-input-wrap${regErr.password ? " lp-input-wrap--error" : ""}`}>
                      <svg className="lp-input-icon" viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"/>
                      </svg>
                      <input id="r-pass" name="password"
                        type={showPass ? "text" : "password"}
                        className="lp-input" placeholder="Min. 8 chars"
                        value={regForm.password}
                        onChange={(e) => setRegForm((p) => ({ ...p, password: e.target.value }))}
                        autoComplete="new-password" disabled={loading || gLoading} />
                      <button type="button" className="lp-eye"
                        onClick={() => setShowPass((p) => !p)} tabIndex={-1}>
                        {showPass ? <EyeOff /> : <EyeOn />}
                      </button>
                    </div>
                    {regErr.password && <span className="lp-error">{regErr.password}</span>}
                  </div>

                  <div className="lp-field">
                    <label className="lp-label" htmlFor="r-confirm">Confirm Password</label>
                    <div className={`lp-input-wrap${regErr.confirm ? " lp-input-wrap--error" : ""}`}>
                      <svg className="lp-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="15" height="15">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                      <input id="r-confirm" name="confirm"
                        type={showConf ? "text" : "password"}
                        className="lp-input" placeholder="Re-enter"
                        value={regForm.confirm}
                        onChange={(e) => setRegForm((p) => ({ ...p, confirm: e.target.value }))}
                        autoComplete="new-password" disabled={loading || gLoading} />
                      <button type="button" className="lp-eye"
                        onClick={() => setShowConf((p) => !p)} tabIndex={-1}>
                        {showConf ? <EyeOff /> : <EyeOn />}
                      </button>
                    </div>
                    {regErr.confirm && <span className="lp-error">{regErr.confirm}</span>}
                  </div>
                </div>

                {/* Terms */}
                <label className="lp-remember">
                  <input type="checkbox" className="lp-checkbox" required />
                  <span className="lp-checkbox-custom" />
                  <span className="lp-remember-text">
                    I agree to the{" "}
                    <Link href="/terms" className="lp-link">Terms</Link> &amp;{" "}
                    <Link href="/privacy" className="lp-link">Privacy Policy</Link>
                  </span>
                </label>

                <button type="submit" className="lp-submit" disabled={loading || gLoading}>
                  {loading
                    ? <><span className="lp-spinner" />Creating account…</>
                    : <>Create Account <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg></>}
                </button>

              </form>
            )}
          </>
        )}

        {/* ---- Bottom switch prompt ---- */}
        {!registered && (
          <div className="lp-switch-prompt">
            <span className="lp-switch-text">
              {mode === "login" ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button className="lp-switch-btn" onClick={() => switchMode(mode === "login" ? "register" : "login")}>
              {mode === "login" ? "Create one for free" : "Sign in here"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" width="13" height="13">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Terms note */}
        {!registered && (
          <p className="lp-terms">
            By continuing you agree to our{" "}
            <Link href="/terms" className="lp-link">Terms</Link> &amp;{" "}
            <Link href="/privacy" className="lp-link">Privacy Policy</Link>.
          </p>
        )}

      </div>
    </div>
  );
};

export default LoginPage;