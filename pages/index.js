import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Script from "next/script";

// import ReactGA from 'react-ga';
// ReactGA.initialize('G-TC0HWJJCNE');
// ReactGA.pageview(window.location.pathname);

const SearchBar = () => {
  const [code, setCode] = useState(null);
  async function onSubmit(event) {
    event.preventDefault();
    const text = event.target[0].value;
    setCode("Loading...");
    await fetch(
      "https://autodoc-backend.fly.dev/compose?" +
        new URLSearchParams({
          query: text,
        })
    )
      .then((response) => response.json())
      .then((output) => {
        console.log({ output });
        setCode(output.code);
      });
  }
  // const gradient = 'linear-gradient( 64.5deg,  rgba(245,116,185,1) 14.7%, rgba(89,97,223,1) 88.7% );'
  const gradient =
    "radial-gradient( circle farthest-corner at 92.3% 71.5%,  rgba(83,138,214,1) 0%, rgba(134,231,214,1) 90% );";
  return (
    <div
      style={{
        "background-image": gradient,
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <form onSubmit={onSubmit}>
        <div className="announcer text">
          <h3 style={{ paddingTop: 0, marginTop: 0 }}>Jump right in!</h3>
          <h5 style={{ paddingTop: 0, marginTop: 0 }}>
            Describe what you want to accomplish and we will generate it
          </h5>
        </div>
        <div
          className="bar-container"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <input
            type="search"
            className="form-control"
            name="q"
            id="search-input"
            placeholder="Make a 10x10 matrix tiled like a chess board..."
            aria-label="Search the docs ..."
            autoComplete="off"
          />
          <input type="submit" style={{ marginLeft: "10px" }} />
        </div>
      </form>
      <div
        id="output-container"
        style={{
          marginTop: "10px",
          width: "100%",
          // minHeight: 100,
        }}
      >
        {code ? (
          <div className="highlight">
            <pre>{code}</pre>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="generator"
        content="Docutils 0.17.1: http://docutils.sourceforge.net/"
      />
      <title>NumPy documentation — NumPy v1.23 Manual</title>
      {/* Loaded before other Sphinx assets */}
      <link
        href="html/_static/styles/theme.css?digest=1999514e3f237ded88cf"
        rel="stylesheet"
      />
      <link
        href="html/_static/styles/pydata-sphinx-theme.css?digest=1999514e3f237ded88cf"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="html/_static/vendor/fontawesome/5.13.0/css/all.min.css"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin=""
        href="html/_static/vendor/fontawesome/5.13.0/webfonts/fa-solid-900.woff2"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin=""
        href="html/_static/vendor/fontawesome/5.13.0/webfonts/fa-brands-400.woff2"
      />
      <link rel="stylesheet" type="text/css" href="html/_static/pygments.css" />
      <link rel="stylesheet" type="text/css" href="html/_static/graphviz.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="html/_static/plot_directive.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="html/_static/panels-main.c949a650a448cc0ae9fd3441c0e17fb0.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="html/_static/panels-variables.06eb56fa6e07937060861dad626602ad.css"
      />
      <link rel="stylesheet" type="text/css" href="html/_static/numpy.css" />
      {/* Pre-loaded scripts that we'll load fully later */}
      <link
        rel="preload"
        as="script"
        href="html/_static/scripts/pydata-sphinx-theme.js?digest=1999514e3f237ded88cf"
      />
      <link rel="shortcut icon" href="html/_static/favicon.ico" />
      <link rel="index" title="Index" href="genindex.html" />
      <link rel="search" title="Search" href="search.html" />
      <link rel="next" title="NumPy user guide" href="user/index.html" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="docsearch:language" content="None" />
      {/* Google Analytics */}
      <Script
        async
        id="google-analytics"
        src="https://www.googletagmanager.com/gtag/js?id=G-TC0HWJJCNE"
      ></Script>
      <Script id="google-analytics-2">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TC0HWJJCNE');
  `}
      </Script>
      <div className="container-fluid" id="banner" />
      <nav
        className="navbar navbar-light navbar-expand-lg bg-light fixed-top bd-navbar"
        id="navbar-main"
      >
        <div className="container-xl">
          <div id="navbar-start">
            <a className="navbar-brand" href="#">
              <img
                src="html/_static/numpylogo.svg"
                className="logo"
                alt="logo"
              />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-collapsible"
            aria-controls="navbar-collapsible"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            id="navbar-collapsible"
            className="col-lg-9 collapse navbar-collapse"
          >
            <div id="navbar-center" className="mr-auto">
              <div className="navbar-center-item">
                <ul id="navbar-main-elements" className="navbar-nav">
                  <li className="toctree-l1 nav-item">
                    <a
                      className="reference internal nav-link"
                      href="user/index.html"
                    >
                      User Guide
                    </a>
                  </li>
                  <li className="toctree-l1 nav-item">
                    <a
                      className="reference internal nav-link"
                      href="reference/index.html"
                    >
                      API reference
                    </a>
                  </li>
                  <li className="toctree-l1 nav-item">
                    <a
                      className="reference internal nav-link"
                      href="dev/index.html"
                    >
                      Development
                    </a>
                  </li>
                  <li className="toctree-l1 nav-item">
                    <a
                      className="reference internal nav-link"
                      href="release.html"
                    >
                      Release notes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link nav-external"
                      href="https://numpy.org/numpy-tutorials/"
                    >
                      Learn
                      <i className="fas fa-external-link-alt" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="navbar-end">
              <div className="navbar-end-item">
                <div className="dropdown" id="version_switcher">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm navbar-btn dropdown-toggle"
                    id="version_switcher_button"
                    data-toggle="dropdown"
                  >
                    doc/1.23{" "}
                    {/* this text may get changed later by javascript */}
                    <span className="caret" />
                  </button>
                  <div
                    id="version_switcher_menu"
                    className="dropdown-menu list-group-flush py-0"
                    aria-labelledby="version_switcher_button"
                  >
                    {/* dropdown will be populated by javascript on page load */}
                  </div>
                </div>
                {/* NOTE: this JS must live here (not in our global JS file) because it relies
     on being processed by Jinja before it is run (specifically for replacing
     variables index and {'version_match': 'doc/1.23', 'json_url': 'https://numpy.org/doc/_static/versions.json'}.
*/}
              </div>
              <div className="navbar-end-item">
                <ul
                  id="navbar-icon-links"
                  className="navbar-nav"
                  aria-label="Icon Links"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://github.com/numpy/numpy"
                      rel="noreferrer"
                      target="_blank"
                      title="GitHub"
                    >
                      <span>
                        <i className="fab fa-github-square" />
                      </span>
                      <label className="sr-only">GitHub</label>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://twitter.com/numpy_team"
                      rel="noreferrer"
                      target="_blank"
                      title="Twitter"
                    >
                      <span>
                        <i className="fab fa-twitter-square" />
                      </span>
                      <label className="sr-only">Twitter</label>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-xl">
        <div className="row">
          {/* Only show if we have sidebars configured, else just a small margin  */}
          <div className="col-12 col-md-3 bd-sidebar">
            <div className="sidebar-start-items">
              <form
                className="bd-search d-flex align-items-center"
                action="https://numpy.org/doc/stable/search.html"
                method="get"
              >
                <i className="icon fas fa-search" />
                <input
                  type="search"
                  className="form-control"
                  name="q"
                  id="search-input"
                  placeholder="Search the docs ..."
                  aria-label="Search the docs ..."
                  autoComplete="off"
                />
              </form>
              <nav
                className="bd-links"
                id="bd-docs-nav"
                aria-label="Main navigation"
              >
                <div className="bd-toc-item active"></div>
              </nav>
            </div>
            <div className="sidebar-end-items"></div>
          </div>
          <div className="d-none d-xl-block col-xl-2 bd-toc">
            <div className="toc-item">
              <nav id="bd-toc-nav"></nav>
            </div>
            <div className="toc-item"></div>
          </div>
          <main
            className="col-12 col-md-9 col-xl-7 py-md-5 pl-md-5 pr-md-4 bd-content"
            role="main"
          >
            <div>
              <section id="numpy-documentation">
                <span id="numpy-docs-mainpage" />
                <h1>
                  NumPy documentation
                  <a
                    className="headerlink"
                    href="#numpy-documentation"
                    title="Permalink to this headline"
                  >
                    #
                  </a>
                </h1>
                {/* SEARCH INPUT */}
                <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                  <SearchBar />
                </div>
                <div></div>
              </section>
            </div>
            <div className="toctree-wrapper compound"></div>
            <p>
              <strong>Version</strong>: 1.23
            </p>
            <p>
              <strong>Download documentation</strong>:
              <a
                className="reference external"
                href="https://numpy.org/doc/stable/numpy-user.pdf"
              >
                PDF Version
              </a>{" "}
              |
              <a className="reference external" href="https://numpy.org/doc/">
                Historical versions of documentation
              </a>
            </p>
            <p>
              <strong>Useful links</strong>:
              <a
                className="reference external"
                href="https://numpy.org/install/"
              >
                Installation
              </a>
              &nbsp;|
              <a
                className="reference external"
                href="https://github.com/numpy/numpy"
              >
                Source Repository
              </a>
              &nbsp;|
              <a
                className="reference external"
                href="https://github.com/numpy/numpy/issues"
              >
                Issue Tracker
              </a>
              &nbsp;|
              <a
                className="reference external"
                href="https://numpy.org/gethelp/"
              >
                Q&amp;A Support
              </a>
              &nbsp;|
              <a
                className="reference external"
                href="https://mail.python.org/mailman/listinfo/numpy-discussion"
              >
                Mailing List
              </a>
            </p>
            <p>
              NumPy is the fundamental package for scientific computing in
              Python. It is a Python library that provides a multidimensional
              array object, various derived objects (such as masked arrays and
              matrices), and an assortment of routines for fast operations on
              arrays, including mathematical, logical, shape manipulation,
              sorting, selecting, I/O, discrete Fourier transforms, basic linear
              algebra, basic statistical operations, random simulation and much
              more.
            </p>
            <div className="sphinx-bs container pb-4 docutils">
              <div className="row docutils">
                <div className="d-flex col-lg-6 col-md-6 col-sm-6 col-xs-12 docutils">
                  <div className="card w-100 shadow intro-card text-center docutils">
                    <img
                      alt="img-top"
                      className="card-img-top"
                      src="html/_images/getting_started.svg"
                    />
                    <div className="card-header docutils">
                      <p className="card-text">Getting Started</p>
                    </div>
                    <div className="card-body docutils">
                      <p className="card-text">
                        New to NumPy? Check out the Absolute Beginner’s Guide.
                        It contains an introduction to NumPy’s main concepts and
                        links to additional tutorials.
                      </p>
                    </div>
                    <div className="card-footer docutils">
                      <p className="card-text">
                        <a
                          className="sphinx-bs btn text-wrap btn-block btn-secondary stretched-link reference internal"
                          href="user/absolute_beginners.html"
                        >
                          <span className="doc">
                            To the absolute beginner’s guide
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex col-lg-6 col-md-6 col-sm-6 col-xs-12 docutils">
                  <div className="card w-100 shadow intro-card text-center docutils">
                    <img
                      alt="img-top"
                      className="card-img-top"
                      src="html/_images/user_guide.svg"
                    />
                    <div className="card-header docutils">
                      <p className="card-text">User Guide</p>
                    </div>
                    <div className="card-body docutils">
                      <p className="card-text">
                        The user guide provides in-depth information on the key
                        concepts of NumPy with useful background information and
                        explanation.
                      </p>
                    </div>
                    <div className="card-footer docutils">
                      <p className="card-text">
                        <a
                          className="sphinx-bs btn text-wrap btn-block btn-secondary stretched-link reference internal"
                          href="user/index.html#user"
                        >
                          <span className="std std-ref">To the user guide</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex col-lg-6 col-md-6 col-sm-6 col-xs-12 docutils">
                  <div className="card w-100 shadow intro-card text-center docutils">
                    <img
                      alt="img-top"
                      className="card-img-top"
                      src="html/_images/api.svg"
                    />
                    <div className="card-header docutils">
                      <p className="card-text">API Reference</p>
                    </div>
                    <div className="card-body docutils">
                      <p className="card-text">
                        The reference guide contains a detailed description of
                        the functions, modules, and objects included in NumPy.
                        The reference describes how the methods work and which
                        parameters can be used. It assumes that you have an
                        understanding of the key concepts.
                      </p>
                    </div>
                    <div className="card-footer docutils">
                      <p className="card-text">
                        <a
                          className="sphinx-bs btn text-wrap btn-block btn-secondary stretched-link reference internal"
                          href="reference/index.html#reference"
                        >
                          <span className="std std-ref">
                            To the reference guide
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex col-lg-6 col-md-6 col-sm-6 col-xs-12 docutils">
                  <div className="card w-100 shadow intro-card text-center docutils">
                    <img
                      alt="img-top"
                      className="card-img-top"
                      src="html/_images/contributor.svg"
                    />
                    <div className="card-header docutils">
                      <p className="card-text">Contributor’s Guide</p>
                    </div>
                    <div className="card-body docutils">
                      <p className="card-text">
                        Want to add to the codebase? Can help add translation or
                        a flowchart to the documentation? The contributing
                        guidelines will guide you through the process of
                        improving NumPy.
                      </p>
                    </div>
                    <div className="card-footer docutils">
                      <p className="card-text">
                        <a
                          className="sphinx-bs btn text-wrap btn-block btn-secondary stretched-link reference internal"
                          href="dev/index.html#devindex"
                        >
                          <span className="std std-ref">
                            To the contributor’s guide
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        {/* Previous / next buttons */}
        <div className="prev-next-area">
          <a
            className="right-next"
            id="next-link"
            href="user/index.html"
            title="next page"
          >
            <div className="prev-next-info">
              <p className="prev-next-subtitle">next</p>
              <p className="prev-next-title">NumPy user guide +++</p>
            </div>
            <i className="fas fa-angle-right" />
          </a>
        </div>
      </div>
      {/* Scripts loaded after <body> so the DOM is not blocked */}
      <footer className="footer mt-5 mt-md-0">
        <div className="container">
          <div className="footer-item">
            <p className="copyright">
              © Copyright 2008-2022, NumPy Developers.
              <br />
            </p>
          </div>
          <div className="footer-item">
            <p className="sphinx-version">
              Created using <a href="http://sphinx-doc.org/">Sphinx</a> 4.5.0.
              <br />
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
