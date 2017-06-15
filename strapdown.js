





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-49f1e970452082ece91a8cb77754f31a769167f4f9cd527a501b1cafa52bb1b6.css" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-3930453070a4974307a742646c4a44f265b3e16fe90e22d4f6640ad5bcfaf195.css" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-a59bd8fb44017386caff9fbca36994bddc4e2da35d6b61b41f39734d64cf6bb6.css" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>strapdown/strapdown.js at gh-pages · arturadib/strapdown · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/741528?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="arturadib/strapdown" property="og:title" /><meta content="https://github.com/arturadib/strapdown" property="og:url" /><meta content="strapdown - Instant and elegant Markdown documents in the browser" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="E3E4:15BC:DC0606:139EE65:5942A220" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="E3E4:15BC:DC0606:139EE65:5942A220" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MjA5YmU0NTZmYWNiZGYwZTFjZWU2MGMxMzg4NzM5NGYzYjdmYjVkZjA2MGIwNjdkZGI0MjNjYzY1Y2Q2MDNjOHx7InJlbW90ZV9hZGRyZXNzIjoiNDkuMzUuMTIuMTk2IiwicmVxdWVzdF9pZCI6IkUzRTQ6MTVCQzpEQzA2MDY6MTM5RUU2NTo1OTQyQTIyMCIsInRpbWVzdGFtcCI6MTQ5NzUzOTEwNSwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="4c7463696bb30ff7cf359f46dea3e334df848a30">

  <meta http-equiv="x-pjax-version" content="e929a77b2a0f5dde4b33e2f0f337322d">
  

      <link href="https://github.com/arturadib/strapdown/commits/gh-pages.atom" rel="alternate" title="Recent Commits to strapdown:gh-pages" type="application/atom+xml">

  <meta name="description" content="strapdown - Instant and elegant Markdown documents in the browser">
  <meta name="go-import" content="github.com/arturadib/strapdown git https://github.com/arturadib/strapdown.git">

  <meta content="741528" name="octolytics-dimension-user_id" /><meta content="arturadib" name="octolytics-dimension-user_login" /><meta content="5394041" name="octolytics-dimension-repository_id" /><meta content="arturadib/strapdown" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5394041" name="octolytics-dimension-repository_network_root_id" /><meta content="arturadib/strapdown" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/arturadib/strapdown/blob/gh-pages/v/0.2/strapdown.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  </head>

  <body class="logged-out env-production page-blob">
    



  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



          <header class="site-header js-details-container Details" role="banner">
  <div class="site-nav-container">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
        <a href="/features" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features">
          Features
</a>        <a href="/business" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>            <a href="/marketplace" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace">
              Marketplace
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/arturadib/strapdown/search" class="js-site-search-form" data-scoped-search-url="/arturadib/strapdown/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/arturadib/strapdown/blob/gh-pages/v/0.2/strapdown.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


          <a class="text-bold site-header-link" href="/login?return_to=%2Farturadib%2Fstrapdown%2Fblob%2Fgh-pages%2Fv%2F0.2%2Fstrapdown.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold site-header-link" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      


  


    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Farturadib%2Fstrapdown"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/arturadib/strapdown/watchers"
     aria-label="97 users are watching this repository">
    97
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Farturadib%2Fstrapdown"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/arturadib/strapdown/stargazers"
      aria-label="1667 users starred this repository">
      1,667
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Farturadib%2Fstrapdown"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/arturadib/strapdown/network" class="social-count"
       aria-label="355 users forked this repository">
      355
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/arturadib" class="url fn" rel="author">arturadib</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/arturadib/strapdown" data-pjax="#js-repo-pjax-container">strapdown</a></strong>

</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/arturadib/strapdown" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /arturadib/strapdown" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/arturadib/strapdown/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /arturadib/strapdown/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">44</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/arturadib/strapdown/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /arturadib/strapdown/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">14</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/arturadib/strapdown/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /arturadib/strapdown/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


    <div class="reponav-dropdown js-menu-container">
      <button type="button" class="btn-link reponav-item reponav-dropdown js-menu-target " data-no-toggle aria-expanded="false" aria-haspopup="true">
        Insights
        <svg aria-hidden="true" class="octicon octicon-triangle-down v-align-middle text-gray" height="11" version="1.1" viewBox="0 0 12 16" width="8"><path fill-rule="evenodd" d="M0 5l6 6 6-6z"/></svg>
      </button>
      <div class="dropdown-menu-content js-menu-content">
        <div class="dropdown-menu dropdown-menu-sw">
          <a class="dropdown-item" href="/arturadib/strapdown/pulse" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
            Pulse
          </a>
          <a class="dropdown-item" href="/arturadib/strapdown/graphs" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
            Graphs
          </a>
        </div>
      </div>
    </div>
</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
    
  <a href="/arturadib/strapdown/blob/7216fa500c4bb72d1dc8743108e3aa7447d4b7f6/v/0.2/strapdown.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:ce36a1c414ee2959a13c297fbc9aa607 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">gh-pages</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/arturadib/strapdown/blob/gh-pages/v/0.2/strapdown.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/arturadib/strapdown/find/gh-pages"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/arturadib/strapdown"><span>strapdown</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/arturadib/strapdown/tree/gh-pages/v"><span>v</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/arturadib/strapdown/tree/gh-pages/v/0.2"><span>0.2</span></a></span><span class="separator">/</span><strong class="final-path">strapdown.js</strong>
    </div>
  </div>


  <include-fragment class="commit-tease" src="/arturadib/strapdown/contributors/gh-pages/v/0.2/strapdown.js">
    <div>
      Fetching contributors&hellip;
    </div>

    <div class="commit-tease-contributors">
      <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
      <span class="loader-error">Cannot retrieve contributors at this time</span>
    </div>
</include-fragment>
  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/arturadib/strapdown/raw/gh-pages/v/0.2/strapdown.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/arturadib/strapdown/blame/gh-pages/v/0.2/strapdown.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/arturadib/strapdown/commits/gh-pages/v/0.2/strapdown.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      443 lines (417 sloc)
      <span class="file-info-divider"></span>
    43.2 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * marked - a markdown parser</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright (c) 2011-2013, Christopher Jeffrey. (MIT Licensed)</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * https://github.com/chjj/marked</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">;(<span class="pl-k">function</span>(){<span class="pl-k">var</span> block<span class="pl-k">=</span>{newline<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\n</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>,code<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>( <span class="pl-k">{4}</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\n</span>]</span><span class="pl-k">+</span><span class="pl-c1">\n</span><span class="pl-k">*</span>)<span class="pl-k">+</span><span class="pl-pds">/</span></span>,fences<span class="pl-k">:</span>noop,hr<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>( <span class="pl-k">*</span><span class="pl-c1">[-*_]</span>)<span class="pl-k">{3,}</span> <span class="pl-k">*</span>(?:<span class="pl-c1">\n</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,heading<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span>(#<span class="pl-k">{1,6}</span>) <span class="pl-k">*</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\n</span>]</span><span class="pl-k">+?</span>) <span class="pl-k">*</span>#<span class="pl-k">*</span> <span class="pl-k">*</span>(?:<span class="pl-c1">\n</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,nptable<span class="pl-k">:</span>noop,lheading<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\n</span>]</span><span class="pl-k">+</span>)<span class="pl-c1">\n</span> <span class="pl-k">*</span>(=<span class="pl-k">|</span>-)<span class="pl-k">{3,}</span> <span class="pl-k">*</span><span class="pl-c1">\n</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>,blockquote<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>( <span class="pl-k">*</span>&gt;<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\n</span>]</span><span class="pl-k">+</span>(<span class="pl-c1">\n</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\n</span>]</span><span class="pl-k">+</span>)<span class="pl-k">*</span><span class="pl-c1">\n</span><span class="pl-k">*</span>)<span class="pl-k">+</span><span class="pl-pds">/</span></span>,list<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>( <span class="pl-k">*</span>)(bull) <span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">+?</span>(?:hr<span class="pl-k">|</span><span class="pl-c1">\n</span><span class="pl-k">{2,}</span>(?! )(?!<span class="pl-k">\1</span>bull )<span class="pl-c1">\n</span><span class="pl-k">*</span><span class="pl-k">|</span><span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,html<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span>(?:comment<span class="pl-k">|</span>closed<span class="pl-k">|</span>closing) <span class="pl-k">*</span>(?:<span class="pl-c1">\n</span><span class="pl-k">{2,}</span><span class="pl-k">|</span><span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,def<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span><span class="pl-cce">\[</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\]</span>]</span><span class="pl-k">+</span>)<span class="pl-cce">\]</span>: <span class="pl-k">*</span>&lt;<span class="pl-k">?</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>&gt;]</span><span class="pl-k">+</span>)&gt;<span class="pl-k">?</span>(?: <span class="pl-k">+</span><span class="pl-c1">[&quot;(]</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\n</span>]</span><span class="pl-k">+</span>)<span class="pl-c1">[&quot;)]</span>)<span class="pl-k">?</span> <span class="pl-k">*</span>(?:<span class="pl-c1">\n</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,table<span class="pl-k">:</span>noop,paragraph<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>((?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\n</span>]</span><span class="pl-k">+</span><span class="pl-c1">\n</span><span class="pl-k">?</span>(?!hr<span class="pl-k">|</span>heading<span class="pl-k">|</span>lheading<span class="pl-k">|</span>blockquote<span class="pl-k">|</span>tag<span class="pl-k">|</span>def))<span class="pl-k">+</span>)<span class="pl-c1">\n</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>,text<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\n</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>};<span class="pl-smi">block</span>.<span class="pl-smi">bullet</span><span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-c1">[*+-]</span><span class="pl-k">|</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-cce">\.</span>)<span class="pl-pds">/</span></span>;<span class="pl-smi">block</span>.<span class="pl-smi">item</span><span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>( <span class="pl-k">*</span>)(bull) <span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\n</span>]</span><span class="pl-k">*</span>(?:<span class="pl-c1">\n</span>(?!<span class="pl-k">\1</span>bull )<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\n</span>]</span><span class="pl-k">*</span>)<span class="pl-k">*</span><span class="pl-pds">/</span></span>;<span class="pl-smi">block</span>.<span class="pl-smi">item</span><span class="pl-k">=</span><span class="pl-en">replace</span>(<span class="pl-smi">block</span>.<span class="pl-smi">item</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>gm<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">(<span class="pl-sr"><span class="pl-pds">/</span>bull<span class="pl-pds">/</span>g</span>,<span class="pl-smi">block</span>.<span class="pl-smi">bullet</span>)</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">();<span class="pl-smi">block</span>.<span class="pl-smi">list</span><span class="pl-k">=</span><span class="pl-en">replace</span>(<span class="pl-smi">block</span>.<span class="pl-smi">list</span>)</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">(<span class="pl-sr"><span class="pl-pds">/</span>bull<span class="pl-pds">/</span>g</span>,<span class="pl-smi">block</span>.<span class="pl-smi">bullet</span>)</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>hr<span class="pl-pds">&#39;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\n</span><span class="pl-k">+</span>(?=(?: <span class="pl-k">*</span><span class="pl-c1">[-*_]</span>)<span class="pl-k">{3,}</span> <span class="pl-k">*</span>(?:<span class="pl-c1">\n</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-k">$</span>))<span class="pl-pds">/</span></span>)</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">();<span class="pl-smi">block</span>.<span class="pl-smi">_tag</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>(?!(?:<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>a|em|strong|small|s|cite|q|dfn|abbr|data|time|code<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|span|br|wbr|ins|del|img)<span class="pl-cce">\\</span>b)<span class="pl-cce">\\</span>w+(?!:/|@)<span class="pl-cce">\\</span>b<span class="pl-pds">&#39;</span></span>;<span class="pl-smi">block</span>.<span class="pl-smi">html</span><span class="pl-k">=</span><span class="pl-en">replace</span>(<span class="pl-smi">block</span>.<span class="pl-smi">html</span>)</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>comment<span class="pl-pds">&#39;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span>&lt;!--<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">*?</span>--&gt;<span class="pl-pds">/</span></span>)</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>closed<span class="pl-pds">&#39;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span>&lt;(tag)<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">+?</span>&lt;<span class="pl-cce">\/</span><span class="pl-k">\1</span>&gt;<span class="pl-pds">/</span></span>)</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>closing<span class="pl-pds">&#39;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span>&lt;tag(?:&quot;<span class="pl-c1">[<span class="pl-k">^</span>&quot;]</span><span class="pl-k">*</span>&quot;<span class="pl-k">|</span>&#39;<span class="pl-c1">[<span class="pl-k">^</span>&#39;]</span><span class="pl-k">*</span>&#39;<span class="pl-k">|</span><span class="pl-c1">[<span class="pl-k">^</span>&#39;&quot;&gt;]</span>)<span class="pl-k">*?</span>&gt;<span class="pl-pds">/</span></span>)</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">(<span class="pl-sr"><span class="pl-pds">/</span>tag<span class="pl-pds">/</span>g</span>,<span class="pl-smi">block</span>.<span class="pl-smi">_tag</span>)</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">();<span class="pl-smi">block</span>.<span class="pl-smi">paragraph</span><span class="pl-k">=</span><span class="pl-en">replace</span>(<span class="pl-smi">block</span>.<span class="pl-smi">paragraph</span>)</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>hr<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">block</span>.<span class="pl-smi">hr</span>)</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>heading<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">block</span>.<span class="pl-smi">heading</span>)</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>lheading<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">block</span>.<span class="pl-smi">lheading</span>)</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>blockquote<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">block</span>.<span class="pl-smi">blockquote</span>)</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>tag<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">block</span>.<span class="pl-smi">_tag</span>)</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>def<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">block</span>.<span class="pl-smi">def</span>)</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">();<span class="pl-smi">block</span>.<span class="pl-smi">normal</span><span class="pl-k">=</span><span class="pl-en">merge</span>({},block);<span class="pl-smi">block</span>.<span class="pl-smi">gfm</span><span class="pl-k">=</span><span class="pl-en">merge</span>({},<span class="pl-smi">block</span>.<span class="pl-smi">normal</span>,{fences<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span>(`<span class="pl-k">{3,}</span><span class="pl-k">|</span>~<span class="pl-k">{3,}</span>) <span class="pl-k">*</span>(<span class="pl-c1">\w</span><span class="pl-k">+</span>)<span class="pl-k">?</span> <span class="pl-k">*</span><span class="pl-c1">\n</span>(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">+?</span>)<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-k">\1</span> <span class="pl-k">*</span>(?:<span class="pl-c1">\n</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,paragraph<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-pds">/</span></span>});<span class="pl-smi">block</span>.<span class="pl-smi">gfm</span>.<span class="pl-smi">paragraph</span><span class="pl-k">=</span><span class="pl-en">replace</span>(<span class="pl-smi">block</span>.<span class="pl-smi">paragraph</span>)</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>(?!<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>(?!<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">block</span>.<span class="pl-smi">gfm</span>.<span class="pl-smi">fences</span>.<span class="pl-c1">source</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>1<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>2<span class="pl-pds">&#39;</span></span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">();<span class="pl-smi">block</span>.<span class="pl-smi">tables</span><span class="pl-k">=</span><span class="pl-en">merge</span>({},<span class="pl-smi">block</span>.<span class="pl-smi">gfm</span>,{nptable<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span>(<span class="pl-c1">\S.</span><span class="pl-k">*</span><span class="pl-cce">\|</span><span class="pl-c1">.</span><span class="pl-k">*</span>)<span class="pl-c1">\n</span> <span class="pl-k">*</span>(<span class="pl-c1">[-:]</span><span class="pl-k">+</span> <span class="pl-k">*</span><span class="pl-cce">\|</span><span class="pl-c1">[-| :]</span><span class="pl-k">*</span>)<span class="pl-c1">\n</span>((?:<span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-cce">\|</span><span class="pl-c1">.</span><span class="pl-k">*</span>(?:<span class="pl-c1">\n</span><span class="pl-k">|</span><span class="pl-k">$</span>))<span class="pl-k">*</span>)<span class="pl-c1">\n</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>,table<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span><span class="pl-cce">\|</span>(<span class="pl-c1">.</span><span class="pl-k">+</span>)<span class="pl-c1">\n</span> <span class="pl-k">*</span><span class="pl-cce">\|</span>( <span class="pl-k">*</span><span class="pl-c1">[-:]</span><span class="pl-k">+</span><span class="pl-c1">[-| :]</span><span class="pl-k">*</span>)<span class="pl-c1">\n</span>((?: <span class="pl-k">*</span><span class="pl-cce">\|</span><span class="pl-c1">.</span><span class="pl-k">*</span>(?:<span class="pl-c1">\n</span><span class="pl-k">|</span><span class="pl-k">$</span>))<span class="pl-k">*</span>)<span class="pl-c1">\n</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>});<span class="pl-k">function</span> <span class="pl-en">Lexer</span>(<span class="pl-smi">options</span>){<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span><span class="pl-k">=</span>[];<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">links</span><span class="pl-k">=</span>{};<span class="pl-c1">this</span>.<span class="pl-c1">options</span><span class="pl-k">=</span>options<span class="pl-k">||</span><span class="pl-smi">marked</span>.<span class="pl-smi">defaults</span>;<span class="pl-c1">this</span>.<span class="pl-c1">rules</span><span class="pl-k">=</span><span class="pl-smi">block</span>.<span class="pl-smi">normal</span>;<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">gfm</span>){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">tables</span>){<span class="pl-c1">this</span>.<span class="pl-c1">rules</span><span class="pl-k">=</span><span class="pl-smi">block</span>.<span class="pl-smi">tables</span>;}<span class="pl-k">else</span>{<span class="pl-c1">this</span>.<span class="pl-c1">rules</span><span class="pl-k">=</span><span class="pl-smi">block</span>.<span class="pl-smi">gfm</span>;}}}</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Lexer</span>.<span class="pl-c1">rules</span><span class="pl-k">=</span>block;<span class="pl-smi">Lexer</span>.<span class="pl-en">lex</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">src</span>,<span class="pl-smi">options</span>){<span class="pl-k">var</span> lexer<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Lexer</span>(options);<span class="pl-k">return</span> <span class="pl-smi">lexer</span>.<span class="pl-en">lex</span>(src);};<span class="pl-smi">Lexer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">lex</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">src</span>){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\r\n</span><span class="pl-k">|</span><span class="pl-c1">\r</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\t</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>    <span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\u</span>00a0<span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\u</span>2424<span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>);<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">token</span>(src,<span class="pl-c1">true</span>);};<span class="pl-smi">Lexer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">token</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">src</span>,<span class="pl-smi">top</span>){<span class="pl-k">var</span> src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span>gm</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>),next,loose,cap,bull,b,item,space,i,l;<span class="pl-k">while</span>(src){<span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">newline</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);<span class="pl-k">if</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span><span class="pl-k">&gt;</span><span class="pl-c1">1</span>){<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>({type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>space<span class="pl-pds">&#39;</span></span>});}}</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-c1">code</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);cap<span class="pl-k">=</span>cap[<span class="pl-c1">0</span>].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">{4}</span><span class="pl-pds">/</span>gm</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>({type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>code<span class="pl-pds">&#39;</span></span>,text<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">pedantic</span><span class="pl-k">?</span><span class="pl-smi">cap</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\n</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)<span class="pl-k">:</span>cap});<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">fences</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>({type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>code<span class="pl-pds">&#39;</span></span>,lang<span class="pl-k">:</span>cap[<span class="pl-c1">2</span>],text<span class="pl-k">:</span>cap[<span class="pl-c1">3</span>]});<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">heading</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>({type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>heading<span class="pl-pds">&#39;</span></span>,depth<span class="pl-k">:</span>cap[<span class="pl-c1">1</span>].<span class="pl-c1">length</span>,text<span class="pl-k">:</span>cap[<span class="pl-c1">2</span>]});<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(top<span class="pl-k">&amp;&amp;</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">nptable</span>.<span class="pl-c1">exec</span>(src))){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);item<span class="pl-k">=</span>{type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>table<span class="pl-pds">&#39;</span></span>,header<span class="pl-k">:</span>cap[<span class="pl-c1">1</span>].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span><span class="pl-k">|</span> <span class="pl-k">*</span><span class="pl-cce">\|</span> <span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span> <span class="pl-k">*</span><span class="pl-cce">\|</span> <span class="pl-k">*</span><span class="pl-pds">/</span></span>),align<span class="pl-k">:</span>cap[<span class="pl-c1">2</span>].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span><span class="pl-k">|</span><span class="pl-cce">\|</span> <span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span> <span class="pl-k">*</span><span class="pl-cce">\|</span> <span class="pl-k">*</span><span class="pl-pds">/</span></span>),cells<span class="pl-k">:</span>cap[<span class="pl-c1">3</span>].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\n</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>)};<span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">item</span>.<span class="pl-c1">align</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-k">if</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span>-<span class="pl-k">+</span>: <span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-smi">item</span>.<span class="pl-c1">align</span>[i])){<span class="pl-smi">item</span>.<span class="pl-c1">align</span>[i]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span>;}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span>:-<span class="pl-k">+</span>: <span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-smi">item</span>.<span class="pl-c1">align</span>[i])){<span class="pl-smi">item</span>.<span class="pl-c1">align</span>[i]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>center<span class="pl-pds">&#39;</span></span>;}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span>:-<span class="pl-k">+</span> <span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-smi">item</span>.<span class="pl-c1">align</span>[i])){<span class="pl-smi">item</span>.<span class="pl-c1">align</span>[i]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span>;}<span class="pl-k">else</span>{<span class="pl-smi">item</span>.<span class="pl-c1">align</span>[i]<span class="pl-k">=</span><span class="pl-c1">null</span>;}}</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">item</span>.<span class="pl-c1">cells</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-smi">item</span>.<span class="pl-c1">cells</span>[i]<span class="pl-k">=</span><span class="pl-smi">item</span>.<span class="pl-c1">cells</span>[i].<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span> <span class="pl-k">*</span><span class="pl-cce">\|</span> <span class="pl-k">*</span><span class="pl-pds">/</span></span>);}</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>(item);<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">lheading</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>({type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>heading<span class="pl-pds">&#39;</span></span>,depth<span class="pl-k">:</span>cap[<span class="pl-c1">2</span>]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>=<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-c1">2</span>,text<span class="pl-k">:</span>cap[<span class="pl-c1">1</span>]});<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">hr</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>({type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>hr<span class="pl-pds">&#39;</span></span>});<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">blockquote</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>({type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>blockquote_start<span class="pl-pds">&#39;</span></span>});cap<span class="pl-k">=</span>cap[<span class="pl-c1">0</span>].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span>&gt; <span class="pl-k">?</span><span class="pl-pds">/</span>gm</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);<span class="pl-c1">this</span>.<span class="pl-en">token</span>(cap,top);<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>({type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>blockquote_end<span class="pl-pds">&#39;</span></span>});<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">list</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>({type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>list_start<span class="pl-pds">&#39;</span></span>,ordered<span class="pl-k">:</span><span class="pl-c1">isFinite</span>(cap[<span class="pl-c1">2</span>])});cap<span class="pl-k">=</span>cap[<span class="pl-c1">0</span>].<span class="pl-c1">match</span>(<span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">item</span>);<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">smartLists</span>){bull<span class="pl-k">=</span><span class="pl-smi">block</span>.<span class="pl-smi">bullet</span>.<span class="pl-c1">exec</span>(cap[<span class="pl-c1">0</span>])[<span class="pl-c1">0</span>];}</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">next<span class="pl-k">=</span><span class="pl-c1">false</span>;l<span class="pl-k">=</span><span class="pl-smi">cap</span>.<span class="pl-c1">length</span>;i<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(;i<span class="pl-k">&lt;</span>l;i<span class="pl-k">++</span>){item<span class="pl-k">=</span>cap[i];space<span class="pl-k">=</span><span class="pl-smi">item</span>.<span class="pl-c1">length</span>;item<span class="pl-k">=</span><span class="pl-smi">item</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span>(<span class="pl-c1">[*+-]</span><span class="pl-k">|</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-cce">\.</span>) <span class="pl-k">+</span><span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);<span class="pl-k">if</span>(<span class="pl-k">~</span><span class="pl-smi">item</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span> <span class="pl-pds">&#39;</span></span>)){space<span class="pl-k">-=</span><span class="pl-smi">item</span>.<span class="pl-c1">length</span>;item<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">pedantic</span><span class="pl-k">?</span><span class="pl-smi">item</span>.<span class="pl-c1">replace</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>^ {1,<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>space<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>}<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>gm<span class="pl-pds">&#39;</span></span>),<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)<span class="pl-k">:</span><span class="pl-smi">item</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">{1,4}</span><span class="pl-pds">/</span>gm</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">smartLists</span><span class="pl-k">&amp;&amp;</span>i<span class="pl-k">!==</span>l<span class="pl-k">-</span><span class="pl-c1">1</span>){b<span class="pl-k">=</span><span class="pl-smi">block</span>.<span class="pl-smi">bullet</span>.<span class="pl-c1">exec</span>(cap[i<span class="pl-k">+</span><span class="pl-c1">1</span>])[<span class="pl-c1">0</span>];<span class="pl-k">if</span>(bull<span class="pl-k">!==</span>b<span class="pl-k">&amp;&amp;!</span>(bull[<span class="pl-c1">1</span>]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span>b[<span class="pl-c1">1</span>]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>)){src<span class="pl-k">=</span><span class="pl-smi">cap</span>.<span class="pl-c1">slice</span>(i<span class="pl-k">+</span><span class="pl-c1">1</span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>)<span class="pl-k">+</span>src;i<span class="pl-k">=</span>l<span class="pl-k">-</span><span class="pl-c1">1</span>;}}</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">loose<span class="pl-k">=</span>next<span class="pl-k">||</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\n\n</span>(?!<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(item);<span class="pl-k">if</span>(i<span class="pl-k">!==</span>l<span class="pl-k">-</span><span class="pl-c1">1</span>){next<span class="pl-k">=</span>item[<span class="pl-smi">item</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;<span class="pl-k">if</span>(<span class="pl-k">!</span>loose)loose<span class="pl-k">=</span>next;}</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>({type<span class="pl-k">:</span>loose<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>loose_item_start<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>list_item_start<span class="pl-pds">&#39;</span></span>});<span class="pl-c1">this</span>.<span class="pl-en">token</span>(item,<span class="pl-c1">false</span>);<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>({type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>list_item_end<span class="pl-pds">&#39;</span></span>});}</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>({type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>list_end<span class="pl-pds">&#39;</span></span>});<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">html</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>({type<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">sanitize</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>paragraph<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>html<span class="pl-pds">&#39;</span></span>,pre<span class="pl-k">:</span>cap[<span class="pl-c1">1</span>]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>pre<span class="pl-pds">&#39;</span></span>,text<span class="pl-k">:</span>cap[<span class="pl-c1">0</span>]});<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(top<span class="pl-k">&amp;&amp;</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">def</span>.<span class="pl-c1">exec</span>(src))){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">links</span>[cap[<span class="pl-c1">1</span>].<span class="pl-c1">toLowerCase</span>()]<span class="pl-k">=</span>{href<span class="pl-k">:</span>cap[<span class="pl-c1">2</span>],title<span class="pl-k">:</span>cap[<span class="pl-c1">3</span>]};<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(top<span class="pl-k">&amp;&amp;</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">table</span>.<span class="pl-c1">exec</span>(src))){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);item<span class="pl-k">=</span>{type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>table<span class="pl-pds">&#39;</span></span>,header<span class="pl-k">:</span>cap[<span class="pl-c1">1</span>].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span><span class="pl-k">|</span> <span class="pl-k">*</span><span class="pl-cce">\|</span> <span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span> <span class="pl-k">*</span><span class="pl-cce">\|</span> <span class="pl-k">*</span><span class="pl-pds">/</span></span>),align<span class="pl-k">:</span>cap[<span class="pl-c1">2</span>].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span><span class="pl-k">|</span><span class="pl-cce">\|</span> <span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span> <span class="pl-k">*</span><span class="pl-cce">\|</span> <span class="pl-k">*</span><span class="pl-pds">/</span></span>),cells<span class="pl-k">:</span>cap[<span class="pl-c1">3</span>].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?: <span class="pl-k">*</span><span class="pl-cce">\|</span> <span class="pl-k">*</span>)<span class="pl-k">?</span><span class="pl-c1">\n</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>)};<span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">item</span>.<span class="pl-c1">align</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-k">if</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span>-<span class="pl-k">+</span>: <span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-smi">item</span>.<span class="pl-c1">align</span>[i])){<span class="pl-smi">item</span>.<span class="pl-c1">align</span>[i]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span>;}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span>:-<span class="pl-k">+</span>: <span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-smi">item</span>.<span class="pl-c1">align</span>[i])){<span class="pl-smi">item</span>.<span class="pl-c1">align</span>[i]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>center<span class="pl-pds">&#39;</span></span>;}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span>:-<span class="pl-k">+</span> <span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-smi">item</span>.<span class="pl-c1">align</span>[i])){<span class="pl-smi">item</span>.<span class="pl-c1">align</span>[i]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span>;}<span class="pl-k">else</span>{<span class="pl-smi">item</span>.<span class="pl-c1">align</span>[i]<span class="pl-k">=</span><span class="pl-c1">null</span>;}}</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">item</span>.<span class="pl-c1">cells</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-smi">item</span>.<span class="pl-c1">cells</span>[i]<span class="pl-k">=</span><span class="pl-smi">item</span>.<span class="pl-c1">cells</span>[i].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">*</span><span class="pl-cce">\|</span> <span class="pl-k">*</span><span class="pl-k">|</span> <span class="pl-k">*</span><span class="pl-cce">\|</span> <span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span> <span class="pl-k">*</span><span class="pl-cce">\|</span> <span class="pl-k">*</span><span class="pl-pds">/</span></span>);}</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>(item);<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(top<span class="pl-k">&amp;&amp;</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">paragraph</span>.<span class="pl-c1">exec</span>(src))){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>({type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>paragraph<span class="pl-pds">&#39;</span></span>,text<span class="pl-k">:</span>cap[<span class="pl-c1">1</span>][cap[<span class="pl-c1">1</span>].<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span><span class="pl-k">?</span>cap[<span class="pl-c1">1</span>].<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>,<span class="pl-k">-</span><span class="pl-c1">1</span>)<span class="pl-k">:</span>cap[<span class="pl-c1">1</span>]});<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-c1">text</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">push</span>({type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span>,text<span class="pl-k">:</span>cap[<span class="pl-c1">0</span>]});<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(src){<span class="pl-k">throw</span> <span class="pl-k">new</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Infinite loop on byte: <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">src</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>));}}</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>;};<span class="pl-k">var</span> inline<span class="pl-k">=</span>{escape<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\\</span>(<span class="pl-c1">[<span class="pl-cce">\\</span>`*{}<span class="pl-cce">\[\]</span>()#+<span class="pl-c1">\-.</span>!_&gt;]</span>)<span class="pl-pds">/</span></span>,autolink<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;(<span class="pl-c1">[<span class="pl-k">^</span> &gt;]</span><span class="pl-k">+</span>(@<span class="pl-k">|</span>:<span class="pl-cce">\/</span>)<span class="pl-c1">[<span class="pl-k">^</span> &gt;]</span><span class="pl-k">+</span>)&gt;<span class="pl-pds">/</span></span>,url<span class="pl-k">:</span>noop,tag<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;!--<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">*?</span>--&gt;<span class="pl-k">|</span><span class="pl-k">^</span>&lt;<span class="pl-cce">\/</span><span class="pl-k">?</span><span class="pl-c1">\w</span><span class="pl-k">+</span>(?:&quot;<span class="pl-c1">[<span class="pl-k">^</span>&quot;]</span><span class="pl-k">*</span>&quot;<span class="pl-k">|</span>&#39;<span class="pl-c1">[<span class="pl-k">^</span>&#39;]</span><span class="pl-k">*</span>&#39;<span class="pl-k">|</span><span class="pl-c1">[<span class="pl-k">^</span>&#39;&quot;&gt;]</span>)<span class="pl-k">*?</span>&gt;<span class="pl-pds">/</span></span>,link<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>!<span class="pl-k">?</span><span class="pl-cce">\[</span>(inside)<span class="pl-cce">\]\(</span>href<span class="pl-cce">\)</span><span class="pl-pds">/</span></span>,reflink<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>!<span class="pl-k">?</span><span class="pl-cce">\[</span>(inside)<span class="pl-cce">\]</span><span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-cce">\[</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\]</span>]</span><span class="pl-k">*</span>)<span class="pl-cce">\]</span><span class="pl-pds">/</span></span>,nolink<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>!<span class="pl-k">?</span><span class="pl-cce">\[</span>((?:<span class="pl-cce">\[</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\]</span>]</span><span class="pl-k">*</span><span class="pl-cce">\]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\[\]</span>]</span>)<span class="pl-k">*</span>)<span class="pl-cce">\]</span><span class="pl-pds">/</span></span>,strong<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>__(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">+?</span>)__(?!_)<span class="pl-k">|</span><span class="pl-k">^</span><span class="pl-cce">\*\*</span>(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">+?</span>)<span class="pl-cce">\*\*</span>(?!<span class="pl-cce">\*</span>)<span class="pl-pds">/</span></span>,em<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^\b</span>_((?:__<span class="pl-k">|</span><span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span>)<span class="pl-k">+?</span>)_<span class="pl-k">\b</span><span class="pl-k">|</span><span class="pl-k">^</span><span class="pl-cce">\*</span>((?:<span class="pl-cce">\*\*</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span>)<span class="pl-k">+?</span>)<span class="pl-cce">\*</span>(?!<span class="pl-cce">\*</span>)<span class="pl-pds">/</span></span>,code<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(`<span class="pl-k">+</span>)<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">*?</span><span class="pl-c1">[<span class="pl-k">^</span>`]</span>)<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-k">\1</span>(?!`)<span class="pl-pds">/</span></span>,br<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">{2,}</span><span class="pl-c1">\n</span>(?!<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,del<span class="pl-k">:</span>noop,text<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">+?</span>(?=<span class="pl-c1">[<span class="pl-cce">\\</span>&lt;!<span class="pl-cce">\[</span>_*`]</span><span class="pl-k">|</span> <span class="pl-k">{2,}</span><span class="pl-c1">\n</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>};<span class="pl-smi">inline</span>.<span class="pl-smi">_inside</span><span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-cce">\[</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\]</span>]</span><span class="pl-k">*</span><span class="pl-cce">\]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\]</span>]</span><span class="pl-k">|</span><span class="pl-cce">\]</span>(?=<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\[</span>]</span><span class="pl-k">*</span><span class="pl-cce">\]</span>))<span class="pl-k">*</span><span class="pl-pds">/</span></span>;<span class="pl-smi">inline</span>.<span class="pl-smi">_href</span><span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">*</span>&lt;<span class="pl-k">?</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>]</span><span class="pl-k">*?</span>)&gt;<span class="pl-k">?</span>(?:<span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-c1">[&#39;&quot;]</span>(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">*?</span>)<span class="pl-c1">[&#39;&quot;]</span>)<span class="pl-k">?</span><span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>;<span class="pl-smi">inline</span>.<span class="pl-c1">link</span><span class="pl-k">=</span><span class="pl-en">replace</span>(<span class="pl-smi">inline</span>.<span class="pl-c1">link</span>)</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>inside<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">inline</span>.<span class="pl-smi">_inside</span>)</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">inline</span>.<span class="pl-smi">_href</span>)</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">();<span class="pl-smi">inline</span>.<span class="pl-smi">reflink</span><span class="pl-k">=</span><span class="pl-en">replace</span>(<span class="pl-smi">inline</span>.<span class="pl-smi">reflink</span>)</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>inside<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">inline</span>.<span class="pl-smi">_inside</span>)</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">();<span class="pl-smi">inline</span>.<span class="pl-smi">normal</span><span class="pl-k">=</span><span class="pl-en">merge</span>({},inline);<span class="pl-smi">inline</span>.<span class="pl-smi">pedantic</span><span class="pl-k">=</span><span class="pl-en">merge</span>({},<span class="pl-smi">inline</span>.<span class="pl-smi">normal</span>,{strong<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>__(?=<span class="pl-c1">\S</span>)(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">*?</span><span class="pl-c1">\S</span>)__(?!_)<span class="pl-k">|</span><span class="pl-k">^</span><span class="pl-cce">\*\*</span>(?=<span class="pl-c1">\S</span>)(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">*?</span><span class="pl-c1">\S</span>)<span class="pl-cce">\*\*</span>(?!<span class="pl-cce">\*</span>)<span class="pl-pds">/</span></span>,em<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>_(?=<span class="pl-c1">\S</span>)(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">*?</span><span class="pl-c1">\S</span>)_(?!_)<span class="pl-k">|</span><span class="pl-k">^</span><span class="pl-cce">\*</span>(?=<span class="pl-c1">\S</span>)(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">*?</span><span class="pl-c1">\S</span>)<span class="pl-cce">\*</span>(?!<span class="pl-cce">\*</span>)<span class="pl-pds">/</span></span>});<span class="pl-smi">inline</span>.<span class="pl-smi">gfm</span><span class="pl-k">=</span><span class="pl-en">merge</span>({},<span class="pl-smi">inline</span>.<span class="pl-smi">normal</span>,{escape<span class="pl-k">:</span><span class="pl-en">replace</span>(<span class="pl-smi">inline</span>.<span class="pl-smi">escape</span>)(<span class="pl-s"><span class="pl-pds">&#39;</span>])<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>~|])<span class="pl-pds">&#39;</span></span>)(),url<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(https<span class="pl-k">?</span>:<span class="pl-cce">\/\/</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>&lt;]</span><span class="pl-k">+</span><span class="pl-c1">[<span class="pl-k">^</span>&lt;<span class="pl-c1">.</span>,:;&quot;&#39;)<span class="pl-cce">\]</span><span class="pl-c1">\s</span>]</span>)<span class="pl-pds">/</span></span>,del<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>~~(?=<span class="pl-c1">\S</span>)(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">*?</span><span class="pl-c1">\S</span>)~~<span class="pl-pds">/</span></span>,text<span class="pl-k">:</span><span class="pl-en">replace</span>(<span class="pl-smi">inline</span>.<span class="pl-c1">text</span>)</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>]|<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>~]|<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">(<span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>|https?://|<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">()});<span class="pl-smi">inline</span>.<span class="pl-smi">breaks</span><span class="pl-k">=</span><span class="pl-en">merge</span>({},<span class="pl-smi">inline</span>.<span class="pl-smi">gfm</span>,{br<span class="pl-k">:</span><span class="pl-en">replace</span>(<span class="pl-smi">inline</span>.<span class="pl-smi">br</span>)(<span class="pl-s"><span class="pl-pds">&#39;</span>{2,}<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span>)(),text<span class="pl-k">:</span><span class="pl-en">replace</span>(<span class="pl-smi">inline</span>.<span class="pl-smi">gfm</span>.<span class="pl-c1">text</span>)(<span class="pl-s"><span class="pl-pds">&#39;</span>{2,}<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span>)()});<span class="pl-k">function</span> <span class="pl-en">InlineLexer</span>(<span class="pl-smi">links</span>,<span class="pl-smi">options</span>){<span class="pl-c1">this</span>.<span class="pl-c1">options</span><span class="pl-k">=</span>options<span class="pl-k">||</span><span class="pl-smi">marked</span>.<span class="pl-smi">defaults</span>;<span class="pl-c1">this</span>.<span class="pl-c1">links</span><span class="pl-k">=</span>links;<span class="pl-c1">this</span>.<span class="pl-c1">rules</span><span class="pl-k">=</span><span class="pl-smi">inline</span>.<span class="pl-smi">normal</span>;<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-c1">links</span>){<span class="pl-k">throw</span> <span class="pl-k">new</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Tokens array requires a `links` property.<span class="pl-pds">&#39;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">gfm</span>){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">breaks</span>){<span class="pl-c1">this</span>.<span class="pl-c1">rules</span><span class="pl-k">=</span><span class="pl-smi">inline</span>.<span class="pl-smi">breaks</span>;}<span class="pl-k">else</span>{<span class="pl-c1">this</span>.<span class="pl-c1">rules</span><span class="pl-k">=</span><span class="pl-smi">inline</span>.<span class="pl-smi">gfm</span>;}}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">pedantic</span>){<span class="pl-c1">this</span>.<span class="pl-c1">rules</span><span class="pl-k">=</span><span class="pl-smi">inline</span>.<span class="pl-smi">pedantic</span>;}}</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">InlineLexer</span>.<span class="pl-c1">rules</span><span class="pl-k">=</span>inline;<span class="pl-smi">InlineLexer</span>.<span class="pl-en">output</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">src</span>,<span class="pl-smi">links</span>,<span class="pl-smi">opt</span>){<span class="pl-k">var</span> inline<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">InlineLexer</span>(links,opt);<span class="pl-k">return</span> <span class="pl-smi">inline</span>.<span class="pl-en">output</span>(src);};<span class="pl-smi">InlineLexer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">output</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">src</span>){<span class="pl-k">var</span> out<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,link,text,href,cap;<span class="pl-k">while</span>(src){<span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">escape</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);out<span class="pl-k">+=</span>cap[<span class="pl-c1">1</span>];<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">autolink</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);<span class="pl-k">if</span>(cap[<span class="pl-c1">2</span>]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>@<span class="pl-pds">&#39;</span></span>){text<span class="pl-k">=</span>cap[<span class="pl-c1">1</span>][<span class="pl-c1">6</span>]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>:<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-en">mangle</span>(cap[<span class="pl-c1">1</span>].<span class="pl-c1">substring</span>(<span class="pl-c1">7</span>))<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-en">mangle</span>(cap[<span class="pl-c1">1</span>]);href<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">mangle</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mailto:<span class="pl-pds">&#39;</span></span>)<span class="pl-k">+</span>text;}<span class="pl-k">else</span>{text<span class="pl-k">=</span><span class="pl-c1">escape</span>(cap[<span class="pl-c1">1</span>]);href<span class="pl-k">=</span>text;}</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">out<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;a href=&quot;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span>href</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span>text</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;<span class="pl-pds">&#39;</span></span>;<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">url</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);text<span class="pl-k">=</span><span class="pl-c1">escape</span>(cap[<span class="pl-c1">1</span>]);href<span class="pl-k">=</span>text;out<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;a href=&quot;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span>href</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span>text</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;<span class="pl-pds">&#39;</span></span>;<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">tag</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);out<span class="pl-k">+=</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">sanitize</span><span class="pl-k">?</span><span class="pl-c1">escape</span>(cap[<span class="pl-c1">0</span>])<span class="pl-k">:</span>cap[<span class="pl-c1">0</span>];<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-c1">link</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);out<span class="pl-k">+=</span><span class="pl-c1">this</span>.<span class="pl-en">outputLink</span>(cap,{href<span class="pl-k">:</span>cap[<span class="pl-c1">2</span>],title<span class="pl-k">:</span>cap[<span class="pl-c1">3</span>]});<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>((cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">reflink</span>.<span class="pl-c1">exec</span>(src))<span class="pl-k">||</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">nolink</span>.<span class="pl-c1">exec</span>(src))){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);link<span class="pl-k">=</span>(cap[<span class="pl-c1">2</span>]<span class="pl-k">||</span>cap[<span class="pl-c1">1</span>]).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>);link<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">links</span>[<span class="pl-smi">link</span>.<span class="pl-c1">toLowerCase</span>()];<span class="pl-k">if</span>(<span class="pl-k">!</span>link<span class="pl-k">||!</span><span class="pl-smi">link</span>.<span class="pl-c1">href</span>){out<span class="pl-k">+=</span>cap[<span class="pl-c1">0</span>][<span class="pl-c1">0</span>];src<span class="pl-k">=</span>cap[<span class="pl-c1">0</span>].<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>)<span class="pl-k">+</span>src;<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">out<span class="pl-k">+=</span><span class="pl-c1">this</span>.<span class="pl-en">outputLink</span>(cap,link);<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">strong</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);out<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;strong&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-en">output</span>(cap[<span class="pl-c1">2</span>]<span class="pl-k">||</span>cap[<span class="pl-c1">1</span>])</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/strong&gt;<span class="pl-pds">&#39;</span></span>;<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">em</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);out<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;em&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-en">output</span>(cap[<span class="pl-c1">2</span>]<span class="pl-k">||</span>cap[<span class="pl-c1">1</span>])</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/em&gt;<span class="pl-pds">&#39;</span></span>;<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-c1">code</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);out<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;code&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">escape</span>(cap[<span class="pl-c1">2</span>],<span class="pl-c1">true</span>)</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/code&gt;<span class="pl-pds">&#39;</span></span>;<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">br</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);out<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;br&gt;<span class="pl-pds">&#39;</span></span>;<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-smi">del</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);out<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;del&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-en">output</span>(cap[<span class="pl-c1">1</span>])</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/del&gt;<span class="pl-pds">&#39;</span></span>;<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(cap<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">rules</span>.<span class="pl-c1">text</span>.<span class="pl-c1">exec</span>(src)){src<span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">substring</span>(cap[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);out<span class="pl-k">+=</span><span class="pl-c1">escape</span>(cap[<span class="pl-c1">0</span>]);<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(src){<span class="pl-k">throw</span> <span class="pl-k">new</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Infinite loop on byte: <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">src</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>));}}</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> out;};<span class="pl-smi">InlineLexer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">outputLink</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">cap</span>,<span class="pl-smi">link</span>){<span class="pl-k">if</span>(cap[<span class="pl-c1">0</span>][<span class="pl-c1">0</span>]<span class="pl-k">!==</span><span class="pl-s"><span class="pl-pds">&#39;</span>!<span class="pl-pds">&#39;</span></span>){<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;a href=&quot;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">escape</span>(<span class="pl-smi">link</span>.<span class="pl-c1">href</span>)</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span>(<span class="pl-smi">link</span>.<span class="pl-c1">title</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span> title=&quot;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">escape</span>(<span class="pl-smi">link</span>.<span class="pl-c1">title</span>)</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-en">output</span>(cap[<span class="pl-c1">1</span>])</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/a&gt;<span class="pl-pds">&#39;</span></span>;}<span class="pl-k">else</span>{<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;img src=&quot;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">escape</span>(<span class="pl-smi">link</span>.<span class="pl-c1">href</span>)</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot; alt=&quot;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">escape</span>(cap[<span class="pl-c1">1</span>])</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span>(<span class="pl-smi">link</span>.<span class="pl-c1">title</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span> title=&quot;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">escape</span>(<span class="pl-smi">link</span>.<span class="pl-c1">title</span>)</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&gt;<span class="pl-pds">&#39;</span></span>;}};<span class="pl-smi">InlineLexer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">mangle</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">text</span>){<span class="pl-k">var</span> out<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,l<span class="pl-k">=</span><span class="pl-smi">text</span>.<span class="pl-c1">length</span>,i<span class="pl-k">=</span><span class="pl-c1">0</span>,ch;<span class="pl-k">for</span>(;i<span class="pl-k">&lt;</span>l;i<span class="pl-k">++</span>){ch<span class="pl-k">=</span><span class="pl-smi">text</span>.<span class="pl-c1">charCodeAt</span>(i);<span class="pl-k">if</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">random</span>()<span class="pl-k">&gt;</span><span class="pl-c1">0.5</span>){ch<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>x<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">ch</span>.<span class="pl-c1">toString</span>(<span class="pl-c1">16</span>);}</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">out<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&amp;#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>ch<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>;<span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> out;};<span class="pl-k">function</span> <span class="pl-en">Parser</span>(<span class="pl-smi">options</span>){<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span><span class="pl-k">=</span>[];<span class="pl-c1">this</span>.<span class="pl-smi">token</span><span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-c1">this</span>.<span class="pl-c1">options</span><span class="pl-k">=</span>options<span class="pl-k">||</span><span class="pl-smi">marked</span>.<span class="pl-smi">defaults</span>;}</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Parser</span>.<span class="pl-en">parse</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">src</span>,<span class="pl-smi">options</span>){<span class="pl-k">var</span> parser<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Parser</span>(options);<span class="pl-k">return</span> <span class="pl-smi">parser</span>.<span class="pl-c1">parse</span>(src);};<span class="pl-smi">Parser</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">parse</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">src</span>){<span class="pl-c1">this</span>.<span class="pl-smi">inline</span><span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">InlineLexer</span>(<span class="pl-smi">src</span>.<span class="pl-c1">links</span>,<span class="pl-c1">this</span>.<span class="pl-c1">options</span>);<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span><span class="pl-k">=</span><span class="pl-smi">src</span>.<span class="pl-c1">reverse</span>();<span class="pl-k">var</span> out<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;<span class="pl-k">while</span>(<span class="pl-c1">this</span>.<span class="pl-c1">next</span>()){out<span class="pl-k">+=</span><span class="pl-c1">this</span>.<span class="pl-en">tok</span>();}</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> out;};<span class="pl-smi">Parser</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">next</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">token</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">pop</span>();};<span class="pl-smi">Parser</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">peek</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>[<span class="pl-c1">this</span>.<span class="pl-smi">tokens</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>]<span class="pl-k">||</span><span class="pl-c1">0</span>;};<span class="pl-smi">Parser</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">parseText</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> body<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">text</span>;<span class="pl-k">while</span>(<span class="pl-c1">this</span>.<span class="pl-en">peek</span>().<span class="pl-c1">type</span><span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span>){body<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">next</span>().<span class="pl-c1">text</span>;}</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">inline</span>.<span class="pl-en">output</span>(body);};<span class="pl-smi">Parser</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">tok</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">switch</span>(<span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">type</span>){<span class="pl-k">case</span><span class="pl-s"><span class="pl-pds">&#39;</span>space<span class="pl-pds">&#39;</span></span>:{<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line"><span class="pl-k">case</span><span class="pl-s"><span class="pl-pds">&#39;</span>hr<span class="pl-pds">&#39;</span></span>:{<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;hr&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line"><span class="pl-k">case</span><span class="pl-s"><span class="pl-pds">&#39;</span>heading<span class="pl-pds">&#39;</span></span>:{<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;h<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-smi">depth</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-smi">inline</span>.<span class="pl-en">output</span>(<span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">text</span>)</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/h<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-smi">depth</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line"><span class="pl-k">case</span><span class="pl-s"><span class="pl-pds">&#39;</span>code<span class="pl-pds">&#39;</span></span>:{<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">highlight</span>){<span class="pl-k">var</span> code<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-en">highlight</span>(<span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">text</span>,<span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">lang</span>);<span class="pl-k">if</span>(code<span class="pl-k">!=</span><span class="pl-c1">null</span><span class="pl-k">&amp;&amp;</span>code<span class="pl-k">!==</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">text</span>){<span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-smi">escaped</span><span class="pl-k">=</span><span class="pl-c1">true</span>;<span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">text</span><span class="pl-k">=</span>code;}}</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-smi">escaped</span>){<span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">text</span><span class="pl-k">=</span><span class="pl-c1">escape</span>(<span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">text</span>,<span class="pl-c1">true</span>);}</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;pre&gt;&lt;code<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span>(<span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">lang</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span> class=&quot;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">langPrefix</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">lang</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">text</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/code&gt;&lt;/pre&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line"><span class="pl-k">case</span><span class="pl-s"><span class="pl-pds">&#39;</span>table<span class="pl-pds">&#39;</span></span>:{<span class="pl-k">var</span> body<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,heading,i,row,cell,j;body<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;thead&gt;<span class="pl-cce">\n</span>&lt;tr&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;<span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-smi">header</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){heading<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">inline</span>.<span class="pl-en">output</span>(<span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-smi">header</span>[i]);body<span class="pl-k">+=</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">align</span>[i]<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;th align=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">align</span>[i]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>heading<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/th&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;th&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>heading<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/th&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">body<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/tr&gt;<span class="pl-cce">\n</span>&lt;/thead&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;body<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;tbody&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">cells</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){row<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">cells</span>[i];body<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;tr&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;<span class="pl-k">for</span>(j<span class="pl-k">=</span><span class="pl-c1">0</span>;j<span class="pl-k">&lt;</span><span class="pl-smi">row</span>.<span class="pl-c1">length</span>;j<span class="pl-k">++</span>){cell<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">inline</span>.<span class="pl-en">output</span>(row[j]);body<span class="pl-k">+=</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">align</span>[j]<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;td align=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">align</span>[j]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>cell<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/td&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;td&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>cell<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/td&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">body<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/tr&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">body<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/tbody&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;table&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span>body</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/table&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line"><span class="pl-k">case</span><span class="pl-s"><span class="pl-pds">&#39;</span>blockquote_start<span class="pl-pds">&#39;</span></span>:{<span class="pl-k">var</span> body<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;<span class="pl-k">while</span>(<span class="pl-c1">this</span>.<span class="pl-c1">next</span>().<span class="pl-c1">type</span><span class="pl-k">!==</span><span class="pl-s"><span class="pl-pds">&#39;</span>blockquote_end<span class="pl-pds">&#39;</span></span>){body<span class="pl-k">+=</span><span class="pl-c1">this</span>.<span class="pl-en">tok</span>();}</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;blockquote&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span>body</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/blockquote&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line"><span class="pl-k">case</span><span class="pl-s"><span class="pl-pds">&#39;</span>list_start<span class="pl-pds">&#39;</span></span>:{<span class="pl-k">var</span> type<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-smi">ordered</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>ol<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>ul<span class="pl-pds">&#39;</span></span>,body<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;<span class="pl-k">while</span>(<span class="pl-c1">this</span>.<span class="pl-c1">next</span>().<span class="pl-c1">type</span><span class="pl-k">!==</span><span class="pl-s"><span class="pl-pds">&#39;</span>list_end<span class="pl-pds">&#39;</span></span>){body<span class="pl-k">+=</span><span class="pl-c1">this</span>.<span class="pl-en">tok</span>();}</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span>type</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span>body</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span>type</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line"><span class="pl-k">case</span><span class="pl-s"><span class="pl-pds">&#39;</span>list_item_start<span class="pl-pds">&#39;</span></span>:{<span class="pl-k">var</span> body<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;<span class="pl-k">while</span>(<span class="pl-c1">this</span>.<span class="pl-c1">next</span>().<span class="pl-c1">type</span><span class="pl-k">!==</span><span class="pl-s"><span class="pl-pds">&#39;</span>list_item_end<span class="pl-pds">&#39;</span></span>){body<span class="pl-k">+=</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">type</span><span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-en">parseText</span>()<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-en">tok</span>();}</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span>body</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/li&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line"><span class="pl-k">case</span><span class="pl-s"><span class="pl-pds">&#39;</span>loose_item_start<span class="pl-pds">&#39;</span></span>:{<span class="pl-k">var</span> body<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;<span class="pl-k">while</span>(<span class="pl-c1">this</span>.<span class="pl-c1">next</span>().<span class="pl-c1">type</span><span class="pl-k">!==</span><span class="pl-s"><span class="pl-pds">&#39;</span>list_item_end<span class="pl-pds">&#39;</span></span>){body<span class="pl-k">+=</span><span class="pl-c1">this</span>.<span class="pl-en">tok</span>();}</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;li&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span>body</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/li&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line"><span class="pl-k">case</span><span class="pl-s"><span class="pl-pds">&#39;</span>html<span class="pl-pds">&#39;</span></span>:{<span class="pl-k">return</span><span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-smi">pre</span><span class="pl-k">&amp;&amp;!</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">pedantic</span><span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-smi">inline</span>.<span class="pl-en">output</span>(<span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">text</span>)<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">text</span>;}</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line"><span class="pl-k">case</span><span class="pl-s"><span class="pl-pds">&#39;</span>paragraph<span class="pl-pds">&#39;</span></span>:{<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;p&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-smi">inline</span>.<span class="pl-en">output</span>(<span class="pl-c1">this</span>.<span class="pl-smi">token</span>.<span class="pl-c1">text</span>)</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/p&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line"><span class="pl-k">case</span><span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span>:{<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;p&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-en">parseText</span>()</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/p&gt;<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;}}};<span class="pl-k">function</span> <span class="pl-en">escape</span>(<span class="pl-smi">html</span>,<span class="pl-smi">encode</span>){<span class="pl-k">return</span> <span class="pl-smi">html</span>.<span class="pl-c1">replace</span>(<span class="pl-k">!</span>encode<span class="pl-k">?</span><span class="pl-sr"><span class="pl-pds">/</span>&amp;(?!#<span class="pl-k">?</span><span class="pl-c1">\w</span><span class="pl-k">+</span>;)<span class="pl-pds">/</span>g</span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span>&amp;<span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>&amp;amp;<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&lt;<span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>&amp;lt;<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&gt;<span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>&amp;gt;<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&quot;<span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>&amp;quot;<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&#39;<span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>&amp;#39;<span class="pl-pds">&#39;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">replace</span>(<span class="pl-smi">regex</span>,<span class="pl-smi">opt</span>){regex<span class="pl-k">=</span><span class="pl-smi">regex</span>.<span class="pl-c1">source</span>;opt<span class="pl-k">=</span>opt<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;<span class="pl-k">return</span> <span class="pl-k">function</span> <span class="pl-en">self</span>(<span class="pl-smi">name</span>,<span class="pl-smi">val</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span>name)<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(regex,opt);val<span class="pl-k">=</span><span class="pl-smi">val</span>.<span class="pl-c1">source</span><span class="pl-k">||</span>val;val<span class="pl-k">=</span><span class="pl-smi">val</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-k">^</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\[</span>]</span>)<span class="pl-cce">\^</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>$1<span class="pl-pds">&#39;</span></span>);regex<span class="pl-k">=</span><span class="pl-smi">regex</span>.<span class="pl-c1">replace</span>(name,val);<span class="pl-k">return</span> self;};}</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">noop</span>(){}</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">noop</span>.<span class="pl-smi">exec</span><span class="pl-k">=</span>noop;<span class="pl-k">function</span> <span class="pl-en">merge</span>(<span class="pl-smi">obj</span>){<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">1</span>,target,key;<span class="pl-k">for</span>(;i<span class="pl-k">&lt;</span><span class="pl-c1">arguments</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){target<span class="pl-k">=</span><span class="pl-c1">arguments</span>[i];<span class="pl-k">for</span>(key <span class="pl-k">in</span> target){<span class="pl-k">if</span>(<span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">hasOwnProperty</span>.<span class="pl-c1">call</span>(target,key)){obj[key]<span class="pl-k">=</span>target[key];}}}</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> obj;}</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">marked</span>(<span class="pl-smi">src</span>,<span class="pl-smi">opt</span>){<span class="pl-k">try</span>{<span class="pl-k">if</span>(opt)opt<span class="pl-k">=</span><span class="pl-en">merge</span>({},<span class="pl-smi">marked</span>.<span class="pl-smi">defaults</span>,opt);<span class="pl-k">return</span> <span class="pl-smi">Parser</span>.<span class="pl-c1">parse</span>(<span class="pl-smi">Lexer</span>.<span class="pl-en">lex</span>(src,opt),opt);}<span class="pl-k">catch</span>(e){<span class="pl-smi">e</span>.<span class="pl-smi">message</span><span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span>Please report this to https://github.com/chjj/marked.<span class="pl-pds">&#39;</span></span>;<span class="pl-k">if</span>((opt<span class="pl-k">||</span><span class="pl-smi">marked</span>.<span class="pl-smi">defaults</span>).<span class="pl-smi">silent</span>){<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>An error occured:<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">e</span>.<span class="pl-smi">message</span>;}</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line"><span class="pl-k">throw</span> e;}}</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">marked</span>.<span class="pl-c1">options</span><span class="pl-k">=</span><span class="pl-smi">marked</span>.<span class="pl-en">setOptions</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">opt</span>){<span class="pl-en">merge</span>(<span class="pl-smi">marked</span>.<span class="pl-smi">defaults</span>,opt);<span class="pl-k">return</span> marked;};<span class="pl-smi">marked</span>.<span class="pl-smi">defaults</span><span class="pl-k">=</span>{gfm<span class="pl-k">:</span><span class="pl-c1">true</span>,tables<span class="pl-k">:</span><span class="pl-c1">true</span>,breaks<span class="pl-k">:</span><span class="pl-c1">false</span>,pedantic<span class="pl-k">:</span><span class="pl-c1">false</span>,sanitize<span class="pl-k">:</span><span class="pl-c1">false</span>,smartLists<span class="pl-k">:</span><span class="pl-c1">false</span>,silent<span class="pl-k">:</span><span class="pl-c1">false</span>,highlight<span class="pl-k">:</span><span class="pl-c1">null</span>,langPrefix<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>lang-<span class="pl-pds">&#39;</span></span>};<span class="pl-smi">marked</span>.<span class="pl-smi">Parser</span><span class="pl-k">=</span>Parser;<span class="pl-smi">marked</span>.<span class="pl-smi">parser</span><span class="pl-k">=</span><span class="pl-smi">Parser</span>.<span class="pl-smi">parse</span>;<span class="pl-smi">marked</span>.<span class="pl-smi">Lexer</span><span class="pl-k">=</span>Lexer;<span class="pl-smi">marked</span>.<span class="pl-smi">lexer</span><span class="pl-k">=</span><span class="pl-smi">Lexer</span>.<span class="pl-smi">lex</span>;<span class="pl-smi">marked</span>.<span class="pl-smi">InlineLexer</span><span class="pl-k">=</span>InlineLexer;<span class="pl-smi">marked</span>.<span class="pl-smi">inlineLexer</span><span class="pl-k">=</span><span class="pl-smi">InlineLexer</span>.<span class="pl-smi">output</span>;<span class="pl-smi">marked</span>.<span class="pl-smi">parse</span><span class="pl-k">=</span>marked;<span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-c1">exports</span><span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>){<span class="pl-c1">module</span>.<span class="pl-smi">exports</span><span class="pl-k">=</span>marked;}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">typeof</span> define<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">define</span>.<span class="pl-smi">amd</span>){<span class="pl-en">define</span>(<span class="pl-k">function</span>(){<span class="pl-k">return</span> marked;});}<span class="pl-k">else</span>{<span class="pl-c1">this</span>.<span class="pl-smi">marked</span><span class="pl-k">=</span>marked;}}).<span class="pl-c1">call</span>(<span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">this</span><span class="pl-k">||</span>(<span class="pl-k">typeof</span> <span class="pl-c1">window</span><span class="pl-k">!==</span><span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-c1">window</span><span class="pl-k">:</span><span class="pl-c1">global</span>);}());</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Copyright (C) 2006 Google Inc.</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> you may not use this file except in compliance with the License.</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> You may obtain a copy of the License at</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>      http://www.apache.org/licenses/LICENSE-2.0</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Unless required by applicable law or agreed to in writing, software</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> See the License for the specific language governing permissions and</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> limitations under the License.</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">window[&#39;PR_SHOULD_USE_CONTINUATION&#39;]=true;var prettyPrintOne;var prettyPrint;(function(){var win=window;var FLOW_CONTROL_KEYWORDS=[&quot;break,continue,do,else,for,if,return,while&quot;];var C_KEYWORDS=[FLOW_CONTROL_KEYWORDS,&quot;auto,case,char,const,default,&quot;+&quot;double,enum,extern,float,goto,int,long,register,short,signed,sizeof,&quot;+&quot;static,struct,switch,typedef,union,unsigned,void,volatile&quot;];var COMMON_KEYWORDS=[C_KEYWORDS,&quot;catch,class,delete,false,import,&quot;+&quot;new,operator,private,protected,public,this,throw,true,try,typeof&quot;];var CPP_KEYWORDS=[COMMON_KEYWORDS,&quot;alignof,align_union,asm,axiom,bool,&quot;+&quot;concept,concept_map,const_cast,constexpr,decltype,&quot;+&quot;dynamic_cast,explicit,export,friend,inline,late_check,&quot;+&quot;mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,&quot;+&quot;template,typeid,typename,using,virtual,where&quot;];var JAVA_KEYWORDS=[COMMON_KEYWORDS,&quot;abstract,boolean,byte,extends,final,finally,implements,import,&quot;+&quot;instanceof,null,native,package,strictfp,super,synchronized,throws,&quot;+&quot;transient&quot;];var CSHARP_KEYWORDS=[JAVA_KEYWORDS,&quot;as,base,by,checked,decimal,delegate,descending,dynamic,event,&quot;+&quot;fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,&quot;+&quot;lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,&quot;+&quot;sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,&quot;+&quot;var,virtual,where&quot;];var COFFEE_KEYWORDS=&quot;all,and,by,catch,class,else,extends,false,finally,&quot;+&quot;for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,&quot;+&quot;throw,true,try,unless,until,when,while,yes&quot;;var JSCRIPT_KEYWORDS=[COMMON_KEYWORDS,&quot;debugger,eval,export,function,get,null,set,undefined,var,with,&quot;+&quot;Infinity,NaN&quot;];var PERL_KEYWORDS=&quot;caller,delete,die,do,dump,elsif,eval,exit,foreach,for,&quot;+&quot;goto,if,import,last,local,my,next,no,our,print,package,redo,require,&quot;+&quot;sub,undef,unless,until,use,wantarray,while,BEGIN,END&quot;;var PYTHON_KEYWORDS=[FLOW_CONTROL_KEYWORDS,&quot;and,as,assert,class,def,del,&quot;+&quot;elif,except,exec,finally,from,global,import,in,is,lambda,&quot;+&quot;nonlocal,not,or,pass,print,raise,try,with,yield,&quot;+&quot;False,True,None&quot;];var RUBY_KEYWORDS=[FLOW_CONTROL_KEYWORDS,&quot;alias,and,begin,case,class,&quot;+&quot;def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,&quot;+&quot;rescue,retry,self,super,then,true,undef,unless,until,when,yield,&quot;+&quot;BEGIN,END&quot;];var SH_KEYWORDS=[FLOW_CONTROL_KEYWORDS,&quot;case,done,elif,esac,eval,fi,&quot;+&quot;function,in,local,set,then,until&quot;];var ALL_KEYWORDS=[CPP_KEYWORDS,CSHARP_KEYWORDS,JSCRIPT_KEYWORDS,PERL_KEYWORDS+</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">PYTHON_KEYWORDS,RUBY_KEYWORDS,SH_KEYWORDS];var C_TYPES=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/;var PR_STRING=&#39;str&#39;;var PR_KEYWORD=&#39;kwd&#39;;var PR_COMMENT=&#39;com&#39;;var PR_TYPE=&#39;typ&#39;;var PR_LITERAL=&#39;lit&#39;;var PR_PUNCTUATION=&#39;pun&#39;;var PR_PLAIN=&#39;pln&#39;;var PR_TAG=&#39;tag&#39;;var PR_DECLARATION=&#39;dec&#39;;var PR_SOURCE=&#39;src&#39;;var PR_ATTRIB_NAME=&#39;atn&#39;;var PR_ATTRIB_VALUE=&#39;atv&#39;;var PR_NOCODE=&#39;nocode&#39;;var REGEXP_PRECEDER_PATTERN=&#39;(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&amp;&amp;?=?|\\(|\\*=?|[+\\-]=|-&gt;|\\/=?|::?|&lt;&lt;?=?|&gt;&gt;?&gt;?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*&#39;;function combinePrefixPatterns(regexs){var capturedGroupIndex=0;var needToFoldCase=false;var ignoreCase=false;for(var i=0,n=regexs.length;i&lt;n;++i){var regex=regexs[i];if(regex.ignoreCase){ignoreCase=true;}else if(/[a-z]/i.test(regex.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,&#39;&#39;))){needToFoldCase=true;ignoreCase=false;break;}}</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> escapeCharToCodeUnit<span class="pl-k">=</span>{<span class="pl-s"><span class="pl-pds">&#39;</span>b<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">8</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>t<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">9</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>n<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">0xa</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>v<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">0xb</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>f<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">0xc</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>r<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">0xd</span>};<span class="pl-k">function</span> <span class="pl-en">decodeEscape</span>(<span class="pl-smi">charsetPart</span>){<span class="pl-k">var</span> cc0<span class="pl-k">=</span><span class="pl-smi">charsetPart</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>);<span class="pl-k">if</span>(cc0<span class="pl-k">!==</span><span class="pl-c1">92</span>){<span class="pl-k">return</span> cc0;}</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> c1<span class="pl-k">=</span><span class="pl-smi">charsetPart</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">1</span>);cc0<span class="pl-k">=</span>escapeCharToCodeUnit[c1];<span class="pl-k">if</span>(cc0){<span class="pl-k">return</span> cc0;}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span><span class="pl-k">&lt;=</span>c1<span class="pl-k">&amp;&amp;</span>c1<span class="pl-k">&lt;=</span><span class="pl-s"><span class="pl-pds">&#39;</span>7<span class="pl-pds">&#39;</span></span>){<span class="pl-k">return</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">charsetPart</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>),<span class="pl-c1">8</span>);}<span class="pl-k">else</span> <span class="pl-k">if</span>(c1<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>u<span class="pl-pds">&#39;</span></span><span class="pl-k">||</span>c1<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>x<span class="pl-pds">&#39;</span></span>){<span class="pl-k">return</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">charsetPart</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">2</span>),<span class="pl-c1">16</span>);}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-smi">charsetPart</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">1</span>);}}</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">encodeEscape</span>(<span class="pl-smi">charCode</span>){<span class="pl-k">if</span>(charCode<span class="pl-k">&lt;</span><span class="pl-c1">0x20</span>){<span class="pl-k">return</span>(charCode<span class="pl-k">&lt;</span><span class="pl-c1">0x10</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>x0<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>x<span class="pl-pds">&#39;</span></span>)<span class="pl-k">+</span><span class="pl-smi">charCode</span>.<span class="pl-c1">toString</span>(<span class="pl-c1">16</span>);}</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> ch<span class="pl-k">=</span><span class="pl-c1">String</span>.<span class="pl-c1">fromCharCode</span>(charCode);<span class="pl-k">return</span>(ch<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span><span class="pl-pds">&#39;</span></span><span class="pl-k">||</span>ch<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span><span class="pl-k">||</span>ch<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span><span class="pl-k">||</span>ch<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>^<span class="pl-pds">&#39;</span></span>)<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>ch<span class="pl-k">:</span>ch;}</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">caseFoldCharset</span>(<span class="pl-smi">charSet</span>){<span class="pl-k">var</span> charsetParts<span class="pl-k">=</span><span class="pl-smi">charSet</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>,<span class="pl-smi">charSet</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>).<span class="pl-c1">match</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\\\</span>u[0-9A-Fa-f]{4}<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-cce">\\\\</span>x[0-9A-Fa-f]{2}<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-cce">\\\\</span>[0-3][0-7]{0,2}<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-cce">\\\\</span>[0-7]{1,2}<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-cce">\\\\</span>[<span class="pl-cce">\\</span>s<span class="pl-cce">\\</span>S]<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|-<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|[^-<span class="pl-cce">\\\\</span>]<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>));<span class="pl-k">var</span> ranges<span class="pl-k">=</span>[];<span class="pl-k">var</span> inverse<span class="pl-k">=</span>charsetParts[<span class="pl-c1">0</span>]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>^<span class="pl-pds">&#39;</span></span>;<span class="pl-k">var</span> out<span class="pl-k">=</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>[<span class="pl-pds">&#39;</span></span>];<span class="pl-k">if</span>(inverse){<span class="pl-smi">out</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>^<span class="pl-pds">&#39;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span>inverse<span class="pl-k">?</span><span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-c1">0</span>,n<span class="pl-k">=</span><span class="pl-smi">charsetParts</span>.<span class="pl-c1">length</span>;i<span class="pl-k">&lt;</span>n;<span class="pl-k">++</span>i){<span class="pl-k">var</span> p<span class="pl-k">=</span>charsetParts[i];<span class="pl-k">if</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\\</span><span class="pl-c1">[bdsw]</span><span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(p)){<span class="pl-smi">out</span>.<span class="pl-c1">push</span>(p);}<span class="pl-k">else</span>{<span class="pl-k">var</span> start<span class="pl-k">=</span><span class="pl-en">decodeEscape</span>(p);<span class="pl-k">var</span> end;<span class="pl-k">if</span>(i<span class="pl-k">+</span><span class="pl-c1">2</span><span class="pl-k">&lt;</span>n<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span><span class="pl-k">===</span>charsetParts[i<span class="pl-k">+</span><span class="pl-c1">1</span>]){end<span class="pl-k">=</span><span class="pl-en">decodeEscape</span>(charsetParts[i<span class="pl-k">+</span><span class="pl-c1">2</span>]);i<span class="pl-k">+=</span><span class="pl-c1">2</span>;}<span class="pl-k">else</span>{end<span class="pl-k">=</span>start;}</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ranges</span>.<span class="pl-c1">push</span>([start,end]);<span class="pl-k">if</span>(<span class="pl-k">!</span>(end<span class="pl-k">&lt;</span><span class="pl-c1">65</span><span class="pl-k">||</span>start<span class="pl-k">&gt;</span><span class="pl-c1">122</span>)){<span class="pl-k">if</span>(<span class="pl-k">!</span>(end<span class="pl-k">&lt;</span><span class="pl-c1">65</span><span class="pl-k">||</span>start<span class="pl-k">&gt;</span><span class="pl-c1">90</span>)){<span class="pl-smi">ranges</span>.<span class="pl-c1">push</span>([<span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">65</span>,start)<span class="pl-k">|</span><span class="pl-c1">32</span>,<span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(end,<span class="pl-c1">90</span>)<span class="pl-k">|</span><span class="pl-c1">32</span>]);}</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>(end<span class="pl-k">&lt;</span><span class="pl-c1">97</span><span class="pl-k">||</span>start<span class="pl-k">&gt;</span><span class="pl-c1">122</span>)){<span class="pl-smi">ranges</span>.<span class="pl-c1">push</span>([<span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">97</span>,start)<span class="pl-k">&amp;~</span><span class="pl-c1">32</span>,<span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(end,<span class="pl-c1">122</span>)<span class="pl-k">&amp;~</span><span class="pl-c1">32</span>]);}}}}</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ranges</span>.<span class="pl-c1">sort</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">return</span>(a[<span class="pl-c1">0</span>]<span class="pl-k">-</span>b[<span class="pl-c1">0</span>])<span class="pl-k">||</span>(b[<span class="pl-c1">1</span>]<span class="pl-k">-</span>a[<span class="pl-c1">1</span>]);});<span class="pl-k">var</span> consolidatedRanges<span class="pl-k">=</span>[];<span class="pl-k">var</span> lastRange<span class="pl-k">=</span>[];<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">ranges</span>.<span class="pl-c1">length</span>;<span class="pl-k">++</span>i){<span class="pl-k">var</span> range<span class="pl-k">=</span>ranges[i];<span class="pl-k">if</span>(range[<span class="pl-c1">0</span>]<span class="pl-k">&lt;=</span>lastRange[<span class="pl-c1">1</span>]<span class="pl-k">+</span><span class="pl-c1">1</span>){lastRange[<span class="pl-c1">1</span>]<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(lastRange[<span class="pl-c1">1</span>],range[<span class="pl-c1">1</span>]);}<span class="pl-k">else</span>{<span class="pl-smi">consolidatedRanges</span>.<span class="pl-c1">push</span>(lastRange<span class="pl-k">=</span>range);}}</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">consolidatedRanges</span>.<span class="pl-c1">length</span>;<span class="pl-k">++</span>i){<span class="pl-k">var</span> range<span class="pl-k">=</span>consolidatedRanges[i];<span class="pl-smi">out</span>.<span class="pl-c1">push</span>(<span class="pl-en">encodeEscape</span>(range[<span class="pl-c1">0</span>]));<span class="pl-k">if</span>(range[<span class="pl-c1">1</span>]<span class="pl-k">&gt;</span>range[<span class="pl-c1">0</span>]){<span class="pl-k">if</span>(range[<span class="pl-c1">1</span>]<span class="pl-k">+</span><span class="pl-c1">1</span><span class="pl-k">&gt;</span>range[<span class="pl-c1">0</span>]){<span class="pl-smi">out</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">out</span>.<span class="pl-c1">push</span>(<span class="pl-en">encodeEscape</span>(range[<span class="pl-c1">1</span>]));}}</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">out</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>);<span class="pl-k">return</span> <span class="pl-smi">out</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">allowAnywhereFoldCaseAndRenumberGroups</span>(<span class="pl-smi">regex</span>){<span class="pl-k">var</span> parts<span class="pl-k">=</span><span class="pl-smi">regex</span>.<span class="pl-c1">source</span>.<span class="pl-c1">match</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>(?:<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>[(?:[^<span class="pl-cce">\\</span>x5C<span class="pl-cce">\\</span>x5D]|<span class="pl-cce">\\\\</span>[<span class="pl-cce">\\</span>s<span class="pl-cce">\\</span>S])*<span class="pl-cce">\\</span>]<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-cce">\\\\</span>u[A-Fa-f0-9]{4}<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-cce">\\\\</span>x[A-Fa-f0-9]{2}<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-cce">\\\\</span>[0-9]+<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-cce">\\\\</span>[^ux0-9]<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-cce">\\</span>(<span class="pl-cce">\\</span>?[:!=]<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|[<span class="pl-cce">\\</span>(<span class="pl-cce">\\</span>)<span class="pl-cce">\\</span>^]<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|[^<span class="pl-cce">\\</span>x5B<span class="pl-cce">\\</span>x5C<span class="pl-cce">\\</span>(<span class="pl-cce">\\</span>)<span class="pl-cce">\\</span>^]+<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>));<span class="pl-k">var</span> n<span class="pl-k">=</span><span class="pl-smi">parts</span>.<span class="pl-c1">length</span>;<span class="pl-k">var</span> capturedGroups<span class="pl-k">=</span>[];<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>,groupIndex<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>n;<span class="pl-k">++</span>i){<span class="pl-k">var</span> p<span class="pl-k">=</span>parts[i];<span class="pl-k">if</span>(p<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>(<span class="pl-pds">&#39;</span></span>){<span class="pl-k">++</span>groupIndex;}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span><span class="pl-pds">&#39;</span></span><span class="pl-k">===</span><span class="pl-smi">p</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>)){<span class="pl-k">var</span> decimalValue<span class="pl-k">=</span><span class="pl-k">+</span><span class="pl-smi">p</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>);<span class="pl-k">if</span>(decimalValue){<span class="pl-k">if</span>(decimalValue<span class="pl-k">&lt;=</span>groupIndex){capturedGroups[decimalValue]<span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">1</span>;}<span class="pl-k">else</span>{parts[i]<span class="pl-k">=</span><span class="pl-en">encodeEscape</span>(decimalValue);}}}}</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">1</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">capturedGroups</span>.<span class="pl-c1">length</span>;<span class="pl-k">++</span>i){<span class="pl-k">if</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">===</span>capturedGroups[i]){capturedGroups[i]<span class="pl-k">=</span><span class="pl-k">++</span>capturedGroupIndex;}}</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>,groupIndex<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>n;<span class="pl-k">++</span>i){<span class="pl-k">var</span> p<span class="pl-k">=</span>parts[i];<span class="pl-k">if</span>(p<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>(<span class="pl-pds">&#39;</span></span>){<span class="pl-k">++</span>groupIndex;<span class="pl-k">if</span>(<span class="pl-k">!</span>capturedGroups[groupIndex]){parts[i]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>(?:<span class="pl-pds">&#39;</span></span>;}}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span><span class="pl-pds">&#39;</span></span><span class="pl-k">===</span><span class="pl-smi">p</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>)){<span class="pl-k">var</span> decimalValue<span class="pl-k">=</span><span class="pl-k">+</span><span class="pl-smi">p</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>);<span class="pl-k">if</span>(decimalValue<span class="pl-k">&amp;&amp;</span>decimalValue<span class="pl-k">&lt;=</span>groupIndex){parts[i]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span><span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>capturedGroups[decimalValue];}}}</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>n;<span class="pl-k">++</span>i){<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>^<span class="pl-pds">&#39;</span></span><span class="pl-k">===</span>parts[i]<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&#39;</span>^<span class="pl-pds">&#39;</span></span><span class="pl-k">!==</span>parts[i<span class="pl-k">+</span><span class="pl-c1">1</span>]){parts[i]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;}}</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">regex</span>.<span class="pl-c1">ignoreCase</span><span class="pl-k">&amp;&amp;</span>needToFoldCase){<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>n;<span class="pl-k">++</span>i){<span class="pl-k">var</span> p<span class="pl-k">=</span>parts[i];<span class="pl-k">var</span> ch0<span class="pl-k">=</span><span class="pl-smi">p</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>);<span class="pl-k">if</span>(<span class="pl-smi">p</span>.<span class="pl-c1">length</span><span class="pl-k">&gt;=</span><span class="pl-c1">2</span><span class="pl-k">&amp;&amp;</span>ch0<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>[<span class="pl-pds">&#39;</span></span>){parts[i]<span class="pl-k">=</span><span class="pl-en">caseFoldCharset</span>(p);}<span class="pl-k">else</span> <span class="pl-k">if</span>(ch0<span class="pl-k">!==</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span><span class="pl-pds">&#39;</span></span>){parts[i]<span class="pl-k">=</span><span class="pl-smi">p</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>]</span><span class="pl-pds">/</span>g</span>,<span class="pl-k">function</span>(<span class="pl-smi">ch</span>){<span class="pl-k">var</span> cc<span class="pl-k">=</span><span class="pl-smi">ch</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>);<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>[<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">String</span>.<span class="pl-c1">fromCharCode</span>(cc<span class="pl-k">&amp;~</span><span class="pl-c1">32</span>,cc<span class="pl-k">|</span><span class="pl-c1">32</span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>;});}}}</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-smi">parts</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> rewritten<span class="pl-k">=</span>[];<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>,n<span class="pl-k">=</span><span class="pl-smi">regexs</span>.<span class="pl-c1">length</span>;i<span class="pl-k">&lt;</span>n;<span class="pl-k">++</span>i){<span class="pl-k">var</span> regex<span class="pl-k">=</span>regexs[i];<span class="pl-k">if</span>(<span class="pl-smi">regex</span>.<span class="pl-smi">global</span><span class="pl-k">||</span><span class="pl-smi">regex</span>.<span class="pl-c1">multiline</span>){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>regex);}</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">rewritten</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>(?:<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-en">allowAnywhereFoldCaseAndRenumberGroups</span>(regex)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-smi">rewritten</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-pds">&#39;</span></span>),ignoreCase<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>gi<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">extractSourceSpans</span>(<span class="pl-smi">node</span>,<span class="pl-smi">isPreformatted</span>){<span class="pl-k">var</span> nocode<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-k">^</span><span class="pl-k">|</span><span class="pl-c1">\s</span>)nocode(?:<span class="pl-c1">\s</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>;<span class="pl-k">var</span> chunks<span class="pl-k">=</span>[];<span class="pl-k">var</span> length<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">var</span> spans<span class="pl-k">=</span>[];<span class="pl-k">var</span> k<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">function</span> <span class="pl-en">walk</span>(<span class="pl-smi">node</span>){<span class="pl-k">switch</span>(<span class="pl-smi">node</span>.<span class="pl-c1">nodeType</span>){<span class="pl-k">case</span> <span class="pl-c1">1</span>:<span class="pl-k">if</span>(<span class="pl-smi">nocode</span>.<span class="pl-c1">test</span>(<span class="pl-smi">node</span>.<span class="pl-c1">className</span>)){<span class="pl-k">return</span>;}</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(<span class="pl-k">var</span> child<span class="pl-k">=</span><span class="pl-smi">node</span>.<span class="pl-c1">firstChild</span>;child;child<span class="pl-k">=</span><span class="pl-smi">child</span>.<span class="pl-c1">nextSibling</span>){<span class="pl-en">walk</span>(child);}</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> nodeName<span class="pl-k">=</span><span class="pl-smi">node</span>.<span class="pl-c1">nodeName</span>.<span class="pl-c1">toLowerCase</span>();<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>br<span class="pl-pds">&#39;</span></span><span class="pl-k">===</span>nodeName<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&#39;</span>li<span class="pl-pds">&#39;</span></span><span class="pl-k">===</span>nodeName){chunks[k]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;spans[k<span class="pl-k">&lt;&lt;</span><span class="pl-c1">1</span>]<span class="pl-k">=</span>length<span class="pl-k">++</span>;spans[(k<span class="pl-k">++</span><span class="pl-k">&lt;&lt;</span><span class="pl-c1">1</span>)<span class="pl-k">|</span><span class="pl-c1">1</span>]<span class="pl-k">=</span>node;}</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line"><span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-c1">3</span>:<span class="pl-k">case</span> <span class="pl-c1">4</span>:<span class="pl-k">var</span> text<span class="pl-k">=</span><span class="pl-smi">node</span>.<span class="pl-c1">nodeValue</span>;<span class="pl-k">if</span>(<span class="pl-smi">text</span>.<span class="pl-c1">length</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span>isPreformatted){text<span class="pl-k">=</span><span class="pl-smi">text</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[ <span class="pl-c1">\t\r\n</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>);}<span class="pl-k">else</span>{text<span class="pl-k">=</span><span class="pl-smi">text</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\r\n</span><span class="pl-k">?</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">chunks[k]<span class="pl-k">=</span>text;spans[k<span class="pl-k">&lt;&lt;</span><span class="pl-c1">1</span>]<span class="pl-k">=</span>length;length<span class="pl-k">+=</span><span class="pl-smi">text</span>.<span class="pl-c1">length</span>;spans[(k<span class="pl-k">++</span><span class="pl-k">&lt;&lt;</span><span class="pl-c1">1</span>)<span class="pl-k">|</span><span class="pl-c1">1</span>]<span class="pl-k">=</span>node;}</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line"><span class="pl-k">break</span>;}}</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line"><span class="pl-en">walk</span>(node);<span class="pl-k">return</span>{sourceCode<span class="pl-k">:</span><span class="pl-smi">chunks</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\n</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>),spans<span class="pl-k">:</span>spans};}</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">appendDecorations</span>(<span class="pl-smi">basePos</span>,<span class="pl-smi">sourceCode</span>,<span class="pl-smi">langHandler</span>,<span class="pl-smi">out</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span>sourceCode){<span class="pl-k">return</span>;}</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> job<span class="pl-k">=</span>{sourceCode<span class="pl-k">:</span>sourceCode,basePos<span class="pl-k">:</span>basePos};<span class="pl-en">langHandler</span>(job);<span class="pl-smi">out</span>.<span class="pl-smi">push</span>.<span class="pl-c1">apply</span>(out,<span class="pl-smi">job</span>.<span class="pl-smi">decorations</span>);}</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> notWs<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\S</span><span class="pl-pds">/</span></span>;<span class="pl-k">function</span> <span class="pl-en">childContentWrapper</span>(<span class="pl-smi">element</span>){<span class="pl-k">var</span> wrapper<span class="pl-k">=</span><span class="pl-c1">undefined</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-smi">element</span>.<span class="pl-c1">firstChild</span>;c;c<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-c1">nextSibling</span>){<span class="pl-k">var</span> type<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-c1">nodeType</span>;wrapper<span class="pl-k">=</span>(type<span class="pl-k">===</span><span class="pl-c1">1</span>)<span class="pl-k">?</span>(wrapper<span class="pl-k">?</span>element<span class="pl-k">:</span>c)<span class="pl-k">:</span>(type<span class="pl-k">===</span><span class="pl-c1">3</span>)<span class="pl-k">?</span>(<span class="pl-smi">notWs</span>.<span class="pl-c1">test</span>(<span class="pl-smi">c</span>.<span class="pl-c1">nodeValue</span>)<span class="pl-k">?</span>element<span class="pl-k">:</span>wrapper)<span class="pl-k">:</span>wrapper;}</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> wrapper<span class="pl-k">===</span>element<span class="pl-k">?</span><span class="pl-c1">undefined</span><span class="pl-k">:</span>wrapper;}</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">createSimpleLexer</span>(<span class="pl-smi">shortcutStylePatterns</span>,<span class="pl-smi">fallthroughStylePatterns</span>){<span class="pl-k">var</span> shortcuts<span class="pl-k">=</span>{};<span class="pl-k">var</span> tokenizer;(<span class="pl-k">function</span>(){<span class="pl-k">var</span> allPatterns<span class="pl-k">=</span><span class="pl-smi">shortcutStylePatterns</span>.<span class="pl-c1">concat</span>(fallthroughStylePatterns);<span class="pl-k">var</span> allRegexs<span class="pl-k">=</span>[];<span class="pl-k">var</span> regexKeys<span class="pl-k">=</span>{};<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>,n<span class="pl-k">=</span><span class="pl-smi">allPatterns</span>.<span class="pl-c1">length</span>;i<span class="pl-k">&lt;</span>n;<span class="pl-k">++</span>i){<span class="pl-k">var</span> patternParts<span class="pl-k">=</span>allPatterns[i];<span class="pl-k">var</span> shortcutChars<span class="pl-k">=</span>patternParts[<span class="pl-c1">3</span>];<span class="pl-k">if</span>(shortcutChars){<span class="pl-k">for</span>(<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-smi">shortcutChars</span>.<span class="pl-c1">length</span>;<span class="pl-k">--</span>c<span class="pl-k">&gt;=</span><span class="pl-c1">0</span>;){shortcuts[<span class="pl-smi">shortcutChars</span>.<span class="pl-c1">charAt</span>(c)]<span class="pl-k">=</span>patternParts;}}</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> regex<span class="pl-k">=</span>patternParts[<span class="pl-c1">1</span>];<span class="pl-k">var</span> k<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>regex;<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">regexKeys</span>.<span class="pl-en">hasOwnProperty</span>(k)){<span class="pl-smi">allRegexs</span>.<span class="pl-c1">push</span>(regex);regexKeys[k]<span class="pl-k">=</span><span class="pl-c1">null</span>;}}</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">allRegexs</span>.<span class="pl-c1">push</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1"><span class="pl-cce">\0</span>-<span class="pl-cce">\u</span></span>ffff]</span><span class="pl-pds">/</span></span>);tokenizer<span class="pl-k">=</span><span class="pl-en">combinePrefixPatterns</span>(allRegexs);})();<span class="pl-k">var</span> nPatterns<span class="pl-k">=</span><span class="pl-smi">fallthroughStylePatterns</span>.<span class="pl-c1">length</span>;<span class="pl-k">var</span> <span class="pl-en">decorate</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">job</span>){<span class="pl-k">var</span> sourceCode<span class="pl-k">=</span><span class="pl-smi">job</span>.<span class="pl-smi">sourceCode</span>,basePos<span class="pl-k">=</span><span class="pl-smi">job</span>.<span class="pl-smi">basePos</span>;<span class="pl-k">var</span> decorations<span class="pl-k">=</span>[basePos,<span class="pl-c1">PR_PLAIN</span>];<span class="pl-k">var</span> pos<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">var</span> tokens<span class="pl-k">=</span><span class="pl-smi">sourceCode</span>.<span class="pl-c1">match</span>(tokenizer)<span class="pl-k">||</span>[];<span class="pl-k">var</span> styleCache<span class="pl-k">=</span>{};<span class="pl-k">for</span>(<span class="pl-k">var</span> ti<span class="pl-k">=</span><span class="pl-c1">0</span>,nTokens<span class="pl-k">=</span><span class="pl-smi">tokens</span>.<span class="pl-c1">length</span>;ti<span class="pl-k">&lt;</span>nTokens;<span class="pl-k">++</span>ti){<span class="pl-k">var</span> token<span class="pl-k">=</span>tokens[ti];<span class="pl-k">var</span> style<span class="pl-k">=</span>styleCache[token];<span class="pl-k">var</span> match<span class="pl-k">=</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;<span class="pl-k">var</span> isEmbedded;<span class="pl-k">if</span>(<span class="pl-k">typeof</span> style<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>){isEmbedded<span class="pl-k">=</span><span class="pl-c1">false</span>;}<span class="pl-k">else</span>{<span class="pl-k">var</span> patternParts<span class="pl-k">=</span>shortcuts[<span class="pl-smi">token</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>)];<span class="pl-k">if</span>(patternParts){match<span class="pl-k">=</span><span class="pl-smi">token</span>.<span class="pl-c1">match</span>(patternParts[<span class="pl-c1">1</span>]);style<span class="pl-k">=</span>patternParts[<span class="pl-c1">0</span>];}<span class="pl-k">else</span>{<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>nPatterns;<span class="pl-k">++</span>i){patternParts<span class="pl-k">=</span>fallthroughStylePatterns[i];match<span class="pl-k">=</span><span class="pl-smi">token</span>.<span class="pl-c1">match</span>(patternParts[<span class="pl-c1">1</span>]);<span class="pl-k">if</span>(match){style<span class="pl-k">=</span>patternParts[<span class="pl-c1">0</span>];<span class="pl-k">break</span>;}}</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>match){style<span class="pl-k">=</span><span class="pl-c1">PR_PLAIN</span>;}}</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">isEmbedded<span class="pl-k">=</span><span class="pl-smi">style</span>.<span class="pl-c1">length</span><span class="pl-k">&gt;=</span><span class="pl-c1">5</span><span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&#39;</span>lang-<span class="pl-pds">&#39;</span></span><span class="pl-k">===</span><span class="pl-smi">style</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,<span class="pl-c1">5</span>);<span class="pl-k">if</span>(isEmbedded<span class="pl-k">&amp;&amp;!</span>(match<span class="pl-k">&amp;&amp;</span><span class="pl-k">typeof</span> match[<span class="pl-c1">1</span>]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)){isEmbedded<span class="pl-k">=</span><span class="pl-c1">false</span>;style<span class="pl-k">=</span><span class="pl-c1">PR_SOURCE</span>;}</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>isEmbedded){styleCache[token]<span class="pl-k">=</span>style;}}</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> tokenStart<span class="pl-k">=</span>pos;pos<span class="pl-k">+=</span><span class="pl-smi">token</span>.<span class="pl-c1">length</span>;<span class="pl-k">if</span>(<span class="pl-k">!</span>isEmbedded){<span class="pl-smi">decorations</span>.<span class="pl-c1">push</span>(basePos<span class="pl-k">+</span>tokenStart,style);}<span class="pl-k">else</span>{<span class="pl-k">var</span> embeddedSource<span class="pl-k">=</span>match[<span class="pl-c1">1</span>];<span class="pl-k">var</span> embeddedSourceStart<span class="pl-k">=</span><span class="pl-smi">token</span>.<span class="pl-c1">indexOf</span>(embeddedSource);<span class="pl-k">var</span> embeddedSourceEnd<span class="pl-k">=</span>embeddedSourceStart<span class="pl-k">+</span><span class="pl-smi">embeddedSource</span>.<span class="pl-c1">length</span>;<span class="pl-k">if</span>(match[<span class="pl-c1">2</span>]){embeddedSourceEnd<span class="pl-k">=</span><span class="pl-smi">token</span>.<span class="pl-c1">length</span><span class="pl-k">-</span>match[<span class="pl-c1">2</span>].<span class="pl-c1">length</span>;embeddedSourceStart<span class="pl-k">=</span>embeddedSourceEnd<span class="pl-k">-</span><span class="pl-smi">embeddedSource</span>.<span class="pl-c1">length</span>;}</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> lang<span class="pl-k">=</span><span class="pl-smi">style</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">5</span>);<span class="pl-en">appendDecorations</span>(basePos<span class="pl-k">+</span>tokenStart,<span class="pl-smi">token</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,embeddedSourceStart),decorate,decorations);<span class="pl-en">appendDecorations</span>(basePos<span class="pl-k">+</span>tokenStart<span class="pl-k">+</span>embeddedSourceStart,embeddedSource,<span class="pl-en">langHandlerForExtension</span>(lang,embeddedSource),decorations);<span class="pl-en">appendDecorations</span>(basePos<span class="pl-k">+</span>tokenStart<span class="pl-k">+</span>embeddedSourceEnd,<span class="pl-smi">token</span>.<span class="pl-c1">substring</span>(embeddedSourceEnd),decorate,decorations);}}</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">job</span>.<span class="pl-smi">decorations</span><span class="pl-k">=</span>decorations;};<span class="pl-k">return</span> decorate;}</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">sourceDecorator</span>(<span class="pl-smi">options</span>){<span class="pl-k">var</span> shortcutStylePatterns<span class="pl-k">=</span>[],fallthroughStylePatterns<span class="pl-k">=</span>[];<span class="pl-k">if</span>(options[<span class="pl-s"><span class="pl-pds">&#39;</span>tripleQuotedStrings<span class="pl-pds">&#39;</span></span>]){<span class="pl-smi">shortcutStylePatterns</span>.<span class="pl-c1">push</span>([<span class="pl-c1">PR_STRING</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-cce">\&#39;\&#39;\&#39;</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\&#39;\\</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">|</span><span class="pl-cce">\&#39;</span><span class="pl-k">{1,2}</span>(?=<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\&#39;</span>]</span>))<span class="pl-k">*</span>(?:<span class="pl-cce">\&#39;\&#39;\&#39;</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span><span class="pl-cce">\&quot;\&quot;\&quot;</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\&quot;\\</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">|</span><span class="pl-cce">\&quot;</span><span class="pl-k">{1,2}</span>(?=<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\&quot;</span>]</span>))<span class="pl-k">*</span>(?:<span class="pl-cce">\&quot;\&quot;\&quot;</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span><span class="pl-cce">\&#39;</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\\\&#39;</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span>)<span class="pl-k">*</span>(?:<span class="pl-cce">\&#39;</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span><span class="pl-cce">\&quot;</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\\\&quot;</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span>)<span class="pl-k">*</span>(?:<span class="pl-cce">\&quot;</span><span class="pl-k">|</span><span class="pl-k">$</span>))<span class="pl-pds">/</span></span>,<span class="pl-c1">null</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>]);}<span class="pl-k">else</span> <span class="pl-k">if</span>(options[<span class="pl-s"><span class="pl-pds">&#39;</span>multiLineStrings<span class="pl-pds">&#39;</span></span>]){<span class="pl-smi">shortcutStylePatterns</span>.<span class="pl-c1">push</span>([<span class="pl-c1">PR_STRING</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-cce">\&#39;</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\\\&#39;</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span>)<span class="pl-k">*</span>(?:<span class="pl-cce">\&#39;</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span><span class="pl-cce">\&quot;</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\\\&quot;</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span>)<span class="pl-k">*</span>(?:<span class="pl-cce">\&quot;</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span><span class="pl-cce">\`</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\\\`</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span>)<span class="pl-k">*</span>(?:<span class="pl-cce">\`</span><span class="pl-k">|</span><span class="pl-k">$</span>))<span class="pl-pds">/</span></span>,<span class="pl-c1">null</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\&#39;</span>&quot;`<span class="pl-pds">&#39;</span></span>]);}<span class="pl-k">else</span>{<span class="pl-smi">shortcutStylePatterns</span>.<span class="pl-c1">push</span>([<span class="pl-c1">PR_STRING</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-cce">\&#39;</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\\\&#39;</span><span class="pl-c1">\r\n</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">.</span>)<span class="pl-k">*</span>(?:<span class="pl-cce">\&#39;</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span><span class="pl-cce">\&quot;</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\\\&quot;</span><span class="pl-c1">\r\n</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">.</span>)<span class="pl-k">*</span>(?:<span class="pl-cce">\&quot;</span><span class="pl-k">|</span><span class="pl-k">$</span>))<span class="pl-pds">/</span></span>,<span class="pl-c1">null</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-cce">\&#39;</span><span class="pl-pds">&#39;</span></span>]);}</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(options[<span class="pl-s"><span class="pl-pds">&#39;</span>verbatimStrings<span class="pl-pds">&#39;</span></span>]){<span class="pl-smi">fallthroughStylePatterns</span>.<span class="pl-c1">push</span>([<span class="pl-c1">PR_STRING</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>@<span class="pl-cce">\&quot;</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\&quot;</span>]</span><span class="pl-k">|</span><span class="pl-cce">\&quot;\&quot;</span>)<span class="pl-k">*</span>(?:<span class="pl-cce">\&quot;</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,<span class="pl-c1">null</span>]);}</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> hc<span class="pl-k">=</span>options[<span class="pl-s"><span class="pl-pds">&#39;</span>hashComments<span class="pl-pds">&#39;</span></span>];<span class="pl-k">if</span>(hc){<span class="pl-k">if</span>(options[<span class="pl-s"><span class="pl-pds">&#39;</span>cStyleComments<span class="pl-pds">&#39;</span></span>]){<span class="pl-k">if</span>(hc<span class="pl-k">&gt;</span><span class="pl-c1">1</span>){<span class="pl-smi">shortcutStylePatterns</span>.<span class="pl-c1">push</span>([<span class="pl-c1">PR_COMMENT</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>#(?:##(?:<span class="pl-c1">[<span class="pl-k">^</span>#]</span><span class="pl-k">|</span>#(?!##))<span class="pl-k">*</span>(?:###<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span><span class="pl-c1">.</span><span class="pl-k">*</span>)<span class="pl-pds">/</span></span>,<span class="pl-c1">null</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span>]);}<span class="pl-k">else</span>{<span class="pl-smi">shortcutStylePatterns</span>.<span class="pl-c1">push</span>([<span class="pl-c1">PR_COMMENT</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>#(?:(?:define<span class="pl-k">|</span>e(?:l<span class="pl-k">|</span>nd)if<span class="pl-k">|</span>else<span class="pl-k">|</span>error<span class="pl-k">|</span>ifn<span class="pl-k">?</span>def<span class="pl-k">|</span>include<span class="pl-k">|</span>line<span class="pl-k">|</span>pragma<span class="pl-k">|</span>undef<span class="pl-k">|</span>warning)<span class="pl-k">\b</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\r\n</span>]</span><span class="pl-k">*</span>)<span class="pl-pds">/</span></span>,<span class="pl-c1">null</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span>]);}</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">fallthroughStylePatterns</span>.<span class="pl-c1">push</span>([<span class="pl-c1">PR_STRING</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;(?:(?:(?:<span class="pl-cce">\.\.\/</span>)<span class="pl-k">*</span><span class="pl-k">|</span><span class="pl-cce">\/</span><span class="pl-k">?</span>)(?:<span class="pl-c1">[<span class="pl-c1">\w</span>-]</span><span class="pl-k">+</span>(?:<span class="pl-cce">\/</span><span class="pl-c1">[<span class="pl-c1">\w</span>-]</span><span class="pl-k">+</span>)<span class="pl-k">+</span>)<span class="pl-k">?</span><span class="pl-c1">[<span class="pl-c1">\w</span>-]</span><span class="pl-k">+</span><span class="pl-cce">\.</span>h(?:h<span class="pl-k">|</span>pp<span class="pl-k">|</span><span class="pl-cce">\+\+</span>)<span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-c1">a-z</span>]</span><span class="pl-c1">\w</span><span class="pl-k">*</span>)&gt;<span class="pl-pds">/</span></span>,<span class="pl-c1">null</span>]);}<span class="pl-k">else</span>{<span class="pl-smi">shortcutStylePatterns</span>.<span class="pl-c1">push</span>([<span class="pl-c1">PR_COMMENT</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>#<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\r\n</span>]</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>,<span class="pl-c1">null</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span>]);}}</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(options[<span class="pl-s"><span class="pl-pds">&#39;</span>cStyleComments<span class="pl-pds">&#39;</span></span>]){<span class="pl-smi">fallthroughStylePatterns</span>.<span class="pl-c1">push</span>([<span class="pl-c1">PR_COMMENT</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\/\/</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\r\n</span>]</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>,<span class="pl-c1">null</span>]);<span class="pl-smi">fallthroughStylePatterns</span>.<span class="pl-c1">push</span>([<span class="pl-c1">PR_COMMENT</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\/\*</span><span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">*?</span>(?:<span class="pl-cce">\*\/</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,<span class="pl-c1">null</span>]);}</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(options[<span class="pl-s"><span class="pl-pds">&#39;</span>regexLiterals<span class="pl-pds">&#39;</span></span>]){<span class="pl-k">var</span> <span class="pl-c1">REGEX_LITERAL</span><span class="pl-k">=</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/(?=[^/*])<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>(?:[^/<span class="pl-cce">\\</span>x5B<span class="pl-cce">\\</span>x5C]<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-cce">\\</span>x5C[<span class="pl-cce">\\</span>s<span class="pl-cce">\\</span>S]<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-cce">\\</span>x5B(?:[^<span class="pl-cce">\\</span>x5C<span class="pl-cce">\\</span>x5D]|<span class="pl-cce">\\</span>x5C[<span class="pl-cce">\\</span>s<span class="pl-cce">\\</span>S])*(?:<span class="pl-cce">\\</span>x5D|$))+<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>);<span class="pl-smi">fallthroughStylePatterns</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&#39;</span>lang-regex<span class="pl-pds">&#39;</span></span>,<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>^<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">REGEXP_PRECEDER_PATTERN</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">REGEX_LITERAL</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>)]);}</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> types<span class="pl-k">=</span>options[<span class="pl-s"><span class="pl-pds">&#39;</span>types<span class="pl-pds">&#39;</span></span>];<span class="pl-k">if</span>(types){<span class="pl-smi">fallthroughStylePatterns</span>.<span class="pl-c1">push</span>([<span class="pl-c1">PR_TYPE</span>,types]);}</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> keywords<span class="pl-k">=</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>options[<span class="pl-s"><span class="pl-pds">&#39;</span>keywords<span class="pl-pds">&#39;</span></span>]).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">|</span> <span class="pl-k">$</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);<span class="pl-k">if</span>(<span class="pl-smi">keywords</span>.<span class="pl-c1">length</span>){<span class="pl-smi">fallthroughStylePatterns</span>.<span class="pl-c1">push</span>([<span class="pl-c1">PR_KEYWORD</span>,<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>^(?:<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">keywords</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\s</span>,]</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-pds">&#39;</span></span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-cce">\\</span>b<span class="pl-pds">&#39;</span></span>),<span class="pl-c1">null</span>]);}</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">shortcutStylePatterns</span>.<span class="pl-c1">push</span>([<span class="pl-c1">PR_PLAIN</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>,<span class="pl-c1">null</span>,<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-cce">\r\n\t\x</span>A0<span class="pl-pds">&#39;</span></span>]);<span class="pl-k">var</span> punctuation<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">.</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s\w</span><span class="pl-cce">\.</span>$@<span class="pl-cce">\&#39;\&quot;\`\/\\</span>]</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>;<span class="pl-smi">fallthroughStylePatterns</span>.<span class="pl-c1">push</span>([<span class="pl-c1">PR_LITERAL</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>@<span class="pl-c1">[<span class="pl-c1">a-z</span>_$][<span class="pl-c1">a-z</span>_$@<span class="pl-c1">0-9</span>]</span><span class="pl-k">*</span><span class="pl-pds">/</span>i</span>,<span class="pl-c1">null</span>],[<span class="pl-c1">PR_TYPE</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">[@_]</span><span class="pl-k">?</span><span class="pl-c1">[<span class="pl-c1">A-Z</span>]</span><span class="pl-k">+</span><span class="pl-c1">[<span class="pl-c1">a-z</span>][<span class="pl-c1">A-Za-z</span>_$@<span class="pl-c1">0-9</span>]</span><span class="pl-k">*</span><span class="pl-k">|</span><span class="pl-c1">\w</span><span class="pl-k">+</span>_t<span class="pl-k">\b</span>)<span class="pl-pds">/</span></span>,<span class="pl-c1">null</span>],[<span class="pl-c1">PR_PLAIN</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">a-z</span>_$][<span class="pl-c1">a-z</span>_$@<span class="pl-c1">0-9</span>]</span><span class="pl-k">*</span><span class="pl-pds">/</span>i</span>,<span class="pl-c1">null</span>],[<span class="pl-c1">PR_LITERAL</span>,<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>^(?:<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>0x[a-f0-9]+<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>|(?:<span class="pl-cce">\\</span>d(?:_<span class="pl-cce">\\</span>d+)*<span class="pl-cce">\\</span>d*(?:<span class="pl-cce">\\</span>.<span class="pl-cce">\\</span>d*)?|<span class="pl-cce">\\</span>.<span class="pl-cce">\\</span>d<span class="pl-cce">\\</span>+)<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>(?:e[+<span class="pl-cce">\\</span>-]?<span class="pl-cce">\\</span>d+)?<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>[a-z]*<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>i<span class="pl-pds">&#39;</span></span>),<span class="pl-c1">null</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>0123456789<span class="pl-pds">&#39;</span></span>],[<span class="pl-c1">PR_PLAIN</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">?</span><span class="pl-pds">/</span></span>,<span class="pl-c1">null</span>],[<span class="pl-c1">PR_PUNCTUATION</span>,punctuation,<span class="pl-c1">null</span>]);<span class="pl-k">return</span> <span class="pl-en">createSimpleLexer</span>(shortcutStylePatterns,fallthroughStylePatterns);}</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> decorateSource<span class="pl-k">=</span><span class="pl-en">sourceDecorator</span>({<span class="pl-s"><span class="pl-pds">&#39;</span>keywords<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">ALL_KEYWORDS</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>hashComments<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">true</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>cStyleComments<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">true</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>multiLineStrings<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">true</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>regexLiterals<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">true</span>});<span class="pl-k">function</span> <span class="pl-en">numberLines</span>(<span class="pl-smi">node</span>,<span class="pl-smi">opt_startLineNum</span>,<span class="pl-smi">isPreformatted</span>){<span class="pl-k">var</span> nocode<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-k">^</span><span class="pl-k">|</span><span class="pl-c1">\s</span>)nocode(?:<span class="pl-c1">\s</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>;<span class="pl-k">var</span> lineBreak<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\r\n</span><span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-c1">\n</span><span class="pl-pds">/</span></span>;<span class="pl-k">var</span> <span class="pl-c1">document</span><span class="pl-k">=</span><span class="pl-smi">node</span>.<span class="pl-c1">ownerDocument</span>;<span class="pl-k">var</span> li<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li<span class="pl-pds">&#39;</span></span>);<span class="pl-k">while</span>(<span class="pl-smi">node</span>.<span class="pl-c1">firstChild</span>){<span class="pl-smi">li</span>.<span class="pl-c1">appendChild</span>(<span class="pl-smi">node</span>.<span class="pl-c1">firstChild</span>);}</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> listItems<span class="pl-k">=</span>[li];<span class="pl-k">function</span> <span class="pl-en">walk</span>(<span class="pl-smi">node</span>){<span class="pl-k">switch</span>(<span class="pl-smi">node</span>.<span class="pl-c1">nodeType</span>){<span class="pl-k">case</span> <span class="pl-c1">1</span>:<span class="pl-k">if</span>(<span class="pl-smi">nocode</span>.<span class="pl-c1">test</span>(<span class="pl-smi">node</span>.<span class="pl-c1">className</span>)){<span class="pl-k">break</span>;}</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>br<span class="pl-pds">&#39;</span></span><span class="pl-k">===</span><span class="pl-smi">node</span>.<span class="pl-c1">nodeName</span>){<span class="pl-en">breakAfter</span>(node);<span class="pl-k">if</span>(<span class="pl-smi">node</span>.<span class="pl-c1">parentNode</span>){<span class="pl-smi">node</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">removeChild</span>(node);}}<span class="pl-k">else</span>{<span class="pl-k">for</span>(<span class="pl-k">var</span> child<span class="pl-k">=</span><span class="pl-smi">node</span>.<span class="pl-c1">firstChild</span>;child;child<span class="pl-k">=</span><span class="pl-smi">child</span>.<span class="pl-c1">nextSibling</span>){<span class="pl-en">walk</span>(child);}}</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line"><span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-c1">3</span>:<span class="pl-k">case</span> <span class="pl-c1">4</span>:<span class="pl-k">if</span>(isPreformatted){<span class="pl-k">var</span> text<span class="pl-k">=</span><span class="pl-smi">node</span>.<span class="pl-c1">nodeValue</span>;<span class="pl-k">var</span> match<span class="pl-k">=</span><span class="pl-smi">text</span>.<span class="pl-c1">match</span>(lineBreak);<span class="pl-k">if</span>(match){<span class="pl-k">var</span> firstLine<span class="pl-k">=</span><span class="pl-smi">text</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,<span class="pl-smi">match</span>.<span class="pl-c1">index</span>);<span class="pl-smi">node</span>.<span class="pl-c1">nodeValue</span><span class="pl-k">=</span>firstLine;<span class="pl-k">var</span> tail<span class="pl-k">=</span><span class="pl-smi">text</span>.<span class="pl-c1">substring</span>(<span class="pl-smi">match</span>.<span class="pl-c1">index</span><span class="pl-k">+</span>match[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>);<span class="pl-k">if</span>(tail){<span class="pl-k">var</span> parent<span class="pl-k">=</span><span class="pl-smi">node</span>.<span class="pl-c1">parentNode</span>;<span class="pl-smi">parent</span>.<span class="pl-c1">insertBefore</span>(<span class="pl-c1">document</span>.<span class="pl-c1">createTextNode</span>(tail),<span class="pl-smi">node</span>.<span class="pl-c1">nextSibling</span>);}</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line"><span class="pl-en">breakAfter</span>(node);<span class="pl-k">if</span>(<span class="pl-k">!</span>firstLine){<span class="pl-smi">node</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">removeChild</span>(node);}}}</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line"><span class="pl-k">break</span>;}}</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">breakAfter</span>(<span class="pl-smi">lineEndNode</span>){<span class="pl-k">while</span>(<span class="pl-k">!</span><span class="pl-smi">lineEndNode</span>.<span class="pl-c1">nextSibling</span>){lineEndNode<span class="pl-k">=</span><span class="pl-smi">lineEndNode</span>.<span class="pl-c1">parentNode</span>;<span class="pl-k">if</span>(<span class="pl-k">!</span>lineEndNode){<span class="pl-k">return</span>;}}</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">breakLeftOf</span>(<span class="pl-smi">limit</span>,<span class="pl-smi">copy</span>){<span class="pl-k">var</span> rightSide<span class="pl-k">=</span>copy<span class="pl-k">?</span><span class="pl-smi">limit</span>.<span class="pl-c1">cloneNode</span>(<span class="pl-c1">false</span>)<span class="pl-k">:</span>limit;<span class="pl-k">var</span> parent<span class="pl-k">=</span><span class="pl-smi">limit</span>.<span class="pl-c1">parentNode</span>;<span class="pl-k">if</span>(parent){<span class="pl-k">var</span> parentClone<span class="pl-k">=</span><span class="pl-en">breakLeftOf</span>(parent,<span class="pl-c1">1</span>);<span class="pl-k">var</span> next<span class="pl-k">=</span><span class="pl-smi">limit</span>.<span class="pl-c1">nextSibling</span>;<span class="pl-smi">parentClone</span>.<span class="pl-c1">appendChild</span>(rightSide);<span class="pl-k">for</span>(<span class="pl-k">var</span> sibling<span class="pl-k">=</span>next;sibling;sibling<span class="pl-k">=</span>next){next<span class="pl-k">=</span><span class="pl-smi">sibling</span>.<span class="pl-c1">nextSibling</span>;<span class="pl-smi">parentClone</span>.<span class="pl-c1">appendChild</span>(sibling);}}</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> rightSide;}</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> copiedListItem<span class="pl-k">=</span><span class="pl-en">breakLeftOf</span>(<span class="pl-smi">lineEndNode</span>.<span class="pl-c1">nextSibling</span>,<span class="pl-c1">0</span>);<span class="pl-k">for</span>(<span class="pl-k">var</span> parent;(parent<span class="pl-k">=</span><span class="pl-smi">copiedListItem</span>.<span class="pl-c1">parentNode</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">parent</span>.<span class="pl-c1">nodeType</span><span class="pl-k">===</span><span class="pl-c1">1</span>;){copiedListItem<span class="pl-k">=</span>parent;}</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">listItems</span>.<span class="pl-c1">push</span>(copiedListItem);}</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">listItems</span>.<span class="pl-c1">length</span>;<span class="pl-k">++</span>i){<span class="pl-en">walk</span>(listItems[i]);}</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(opt_startLineNum<span class="pl-k">===</span>(opt_startLineNum<span class="pl-k">|</span><span class="pl-c1">0</span>)){listItems[<span class="pl-c1">0</span>].<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>value<span class="pl-pds">&#39;</span></span>,opt_startLineNum);}</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> ol<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ol<span class="pl-pds">&#39;</span></span>);<span class="pl-smi">ol</span>.<span class="pl-c1">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>linenums<span class="pl-pds">&#39;</span></span>;<span class="pl-k">var</span> offset<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>,((opt_startLineNum<span class="pl-k">-</span><span class="pl-c1">1</span>))<span class="pl-k">|</span><span class="pl-c1">0</span>)<span class="pl-k">||</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>,n<span class="pl-k">=</span><span class="pl-smi">listItems</span>.<span class="pl-c1">length</span>;i<span class="pl-k">&lt;</span>n;<span class="pl-k">++</span>i){li<span class="pl-k">=</span>listItems[i];<span class="pl-smi">li</span>.<span class="pl-c1">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>L<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>((i<span class="pl-k">+</span>offset)<span class="pl-k">%</span><span class="pl-c1">10</span>);<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">li</span>.<span class="pl-c1">firstChild</span>){<span class="pl-smi">li</span>.<span class="pl-c1">appendChild</span>(<span class="pl-c1">document</span>.<span class="pl-c1">createTextNode</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\x</span>A0<span class="pl-pds">&#39;</span></span>));}</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ol</span>.<span class="pl-c1">appendChild</span>(li);}</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">node</span>.<span class="pl-c1">appendChild</span>(ol);}</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">recombineTagsAndDecorations</span>(<span class="pl-smi">job</span>){<span class="pl-k">var</span> isIE8OrEarlier<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>MSIE<span class="pl-c1">\s</span>(<span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>.<span class="pl-c1">exec</span>(<span class="pl-c1">navigator</span>.<span class="pl-c1">userAgent</span>);isIE8OrEarlier<span class="pl-k">=</span>isIE8OrEarlier<span class="pl-k">&amp;&amp;</span><span class="pl-k">+</span>isIE8OrEarlier[<span class="pl-c1">1</span>]<span class="pl-k">&lt;=</span><span class="pl-c1">8</span>;<span class="pl-k">var</span> newlineRe<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\n</span><span class="pl-pds">/</span>g</span>;<span class="pl-k">var</span> source<span class="pl-k">=</span><span class="pl-smi">job</span>.<span class="pl-smi">sourceCode</span>;<span class="pl-k">var</span> sourceLength<span class="pl-k">=</span><span class="pl-smi">source</span>.<span class="pl-c1">length</span>;<span class="pl-k">var</span> sourceIndex<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">var</span> spans<span class="pl-k">=</span><span class="pl-smi">job</span>.<span class="pl-smi">spans</span>;<span class="pl-k">var</span> nSpans<span class="pl-k">=</span><span class="pl-smi">spans</span>.<span class="pl-c1">length</span>;<span class="pl-k">var</span> spanIndex<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">var</span> decorations<span class="pl-k">=</span><span class="pl-smi">job</span>.<span class="pl-smi">decorations</span>;<span class="pl-k">var</span> nDecorations<span class="pl-k">=</span><span class="pl-smi">decorations</span>.<span class="pl-c1">length</span>;<span class="pl-k">var</span> decorationIndex<span class="pl-k">=</span><span class="pl-c1">0</span>;decorations[nDecorations]<span class="pl-k">=</span>sourceLength;<span class="pl-k">var</span> decPos,i;<span class="pl-k">for</span>(i<span class="pl-k">=</span>decPos<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>nDecorations;){<span class="pl-k">if</span>(decorations[i]<span class="pl-k">!==</span>decorations[i<span class="pl-k">+</span><span class="pl-c1">2</span>]){decorations[decPos<span class="pl-k">++</span>]<span class="pl-k">=</span>decorations[i<span class="pl-k">++</span>];decorations[decPos<span class="pl-k">++</span>]<span class="pl-k">=</span>decorations[i<span class="pl-k">++</span>];}<span class="pl-k">else</span>{i<span class="pl-k">+=</span><span class="pl-c1">2</span>;}}</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">nDecorations<span class="pl-k">=</span>decPos;<span class="pl-k">for</span>(i<span class="pl-k">=</span>decPos<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>nDecorations;){<span class="pl-k">var</span> startPos<span class="pl-k">=</span>decorations[i];<span class="pl-k">var</span> startDec<span class="pl-k">=</span>decorations[i<span class="pl-k">+</span><span class="pl-c1">1</span>];<span class="pl-k">var</span> end<span class="pl-k">=</span>i<span class="pl-k">+</span><span class="pl-c1">2</span>;<span class="pl-k">while</span>(end<span class="pl-k">+</span><span class="pl-c1">2</span><span class="pl-k">&lt;=</span>nDecorations<span class="pl-k">&amp;&amp;</span>decorations[end<span class="pl-k">+</span><span class="pl-c1">1</span>]<span class="pl-k">===</span>startDec){end<span class="pl-k">+=</span><span class="pl-c1">2</span>;}</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">decorations[decPos<span class="pl-k">++</span>]<span class="pl-k">=</span>startPos;decorations[decPos<span class="pl-k">++</span>]<span class="pl-k">=</span>startDec;i<span class="pl-k">=</span>end;}</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">nDecorations<span class="pl-k">=</span><span class="pl-smi">decorations</span>.<span class="pl-c1">length</span><span class="pl-k">=</span>decPos;<span class="pl-k">var</span> sourceNode<span class="pl-k">=</span><span class="pl-smi">job</span>.<span class="pl-smi">sourceNode</span>;<span class="pl-k">var</span> oldDisplay;<span class="pl-k">if</span>(sourceNode){oldDisplay<span class="pl-k">=</span><span class="pl-smi">sourceNode</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span>;<span class="pl-smi">sourceNode</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span>{<span class="pl-k">var</span> decoration<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">while</span>(spanIndex<span class="pl-k">&lt;</span>nSpans){<span class="pl-k">var</span> spanStart<span class="pl-k">=</span>spans[spanIndex];<span class="pl-k">var</span> spanEnd<span class="pl-k">=</span>spans[spanIndex<span class="pl-k">+</span><span class="pl-c1">2</span>]<span class="pl-k">||</span>sourceLength;<span class="pl-k">var</span> decEnd<span class="pl-k">=</span>decorations[decorationIndex<span class="pl-k">+</span><span class="pl-c1">2</span>]<span class="pl-k">||</span>sourceLength;<span class="pl-k">var</span> end<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(spanEnd,decEnd);<span class="pl-k">var</span> textNode<span class="pl-k">=</span>spans[spanIndex<span class="pl-k">+</span><span class="pl-c1">1</span>];<span class="pl-k">var</span> styledText;<span class="pl-k">if</span>(<span class="pl-smi">textNode</span>.<span class="pl-c1">nodeType</span><span class="pl-k">!==</span><span class="pl-c1">1</span><span class="pl-k">&amp;&amp;</span>(styledText<span class="pl-k">=</span><span class="pl-smi">source</span>.<span class="pl-c1">substring</span>(sourceIndex,end))){<span class="pl-k">if</span>(isIE8OrEarlier){styledText<span class="pl-k">=</span><span class="pl-smi">styledText</span>.<span class="pl-c1">replace</span>(newlineRe,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\r</span><span class="pl-pds">&#39;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">textNode</span>.<span class="pl-c1">nodeValue</span><span class="pl-k">=</span>styledText;<span class="pl-k">var</span> <span class="pl-c1">document</span><span class="pl-k">=</span><span class="pl-smi">textNode</span>.<span class="pl-c1">ownerDocument</span>;<span class="pl-k">var</span> span<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>span<span class="pl-pds">&#39;</span></span>);<span class="pl-smi">span</span>.<span class="pl-c1">className</span><span class="pl-k">=</span>decorations[decorationIndex<span class="pl-k">+</span><span class="pl-c1">1</span>];<span class="pl-k">var</span> parentNode<span class="pl-k">=</span><span class="pl-smi">textNode</span>.<span class="pl-c1">parentNode</span>;<span class="pl-smi">parentNode</span>.<span class="pl-c1">replaceChild</span>(span,textNode);<span class="pl-smi">span</span>.<span class="pl-c1">appendChild</span>(textNode);<span class="pl-k">if</span>(sourceIndex<span class="pl-k">&lt;</span>spanEnd){spans[spanIndex<span class="pl-k">+</span><span class="pl-c1">1</span>]<span class="pl-k">=</span>textNode<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">createTextNode</span>(<span class="pl-smi">source</span>.<span class="pl-c1">substring</span>(end,spanEnd));<span class="pl-smi">parentNode</span>.<span class="pl-c1">insertBefore</span>(textNode,<span class="pl-smi">span</span>.<span class="pl-c1">nextSibling</span>);}}</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">sourceIndex<span class="pl-k">=</span>end;<span class="pl-k">if</span>(sourceIndex<span class="pl-k">&gt;=</span>spanEnd){spanIndex<span class="pl-k">+=</span><span class="pl-c1">2</span>;}</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(sourceIndex<span class="pl-k">&gt;=</span>decEnd){decorationIndex<span class="pl-k">+=</span><span class="pl-c1">2</span>;}}}<span class="pl-k">finally</span>{<span class="pl-k">if</span>(sourceNode){<span class="pl-smi">sourceNode</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span><span class="pl-k">=</span>oldDisplay;}}}</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> langHandlerRegistry<span class="pl-k">=</span>{};<span class="pl-k">function</span> <span class="pl-en">registerLangHandler</span>(<span class="pl-smi">handler</span>,<span class="pl-smi">fileExtensions</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-smi">fileExtensions</span>.<span class="pl-c1">length</span>;<span class="pl-k">--</span>i<span class="pl-k">&gt;=</span><span class="pl-c1">0</span>;){<span class="pl-k">var</span> ext<span class="pl-k">=</span>fileExtensions[i];<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">langHandlerRegistry</span>.<span class="pl-en">hasOwnProperty</span>(ext)){langHandlerRegistry[ext]<span class="pl-k">=</span>handler;}<span class="pl-k">else</span> <span class="pl-k">if</span>(win[<span class="pl-s"><span class="pl-pds">&#39;</span>console<span class="pl-pds">&#39;</span></span>]){<span class="pl-en">console</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>warn<span class="pl-pds">&#39;</span></span>](<span class="pl-s"><span class="pl-pds">&#39;</span>cannot override language handler %s<span class="pl-pds">&#39;</span></span>,ext);}}}</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">langHandlerForExtension</span>(<span class="pl-smi">extension</span>,<span class="pl-smi">source</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span>(extension<span class="pl-k">&amp;&amp;</span><span class="pl-smi">langHandlerRegistry</span>.<span class="pl-en">hasOwnProperty</span>(extension))){extension<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">*</span>&lt;<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(source)<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>default-markup<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>default-code<span class="pl-pds">&#39;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> langHandlerRegistry[extension];}</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">registerLangHandler(decorateSource,[&#39;default-code&#39;]);registerLangHandler(createSimpleLexer([],[[PR_PLAIN,/^[^&lt;?]+/],[PR_DECLARATION,/^&lt;!\w[^&gt;]*(?:&gt;|$)/],[PR_COMMENT,/^&lt;\!--[\s\S]*?(?:-\-&gt;|$)/],[&#39;lang-&#39;,/^&lt;\?([\s\S]+?)(?:\?&gt;|$)/],[&#39;lang-&#39;,/^&lt;%([\s\S]+?)(?:%&gt;|$)/],[PR_PUNCTUATION,/^(?:&lt;[%?]|[%?]&gt;)/],[&#39;lang-&#39;,/^&lt;xmp\b[^&gt;]*&gt;([\s\S]+?)&lt;\/xmp\b[^&gt;]*&gt;/i],[&#39;lang-js&#39;,/^&lt;script\b[^&gt;]*&gt;([\s\S]*?)(&lt;\/script\b[^&gt;]*&gt;)/i],[&#39;lang-css&#39;,/^&lt;style\b[^&gt;]*&gt;([\s\S]*?)(&lt;\/style\b[^&gt;]*&gt;)/i],[&#39;lang-in.tag&#39;,/^(&lt;\/?[a-z][^&lt;&gt;]*&gt;)/i]]),[&#39;default-markup&#39;,&#39;htm&#39;,&#39;html&#39;,&#39;mxml&#39;,&#39;xhtml&#39;,&#39;xml&#39;,&#39;xsl&#39;]);registerLangHandler(createSimpleLexer([[PR_PLAIN,/^[\s]+/,null,&#39; \t\r\n&#39;],[PR_ATTRIB_VALUE,/^(?:\&quot;[^\&quot;]*\&quot;?|\&#39;[^\&#39;]*\&#39;?)/,null,&#39;\&quot;\&#39;&#39;]],[[PR_TAG,/^^&lt;\/?[a-z](?:[\w.:-]*\w)?|\/?&gt;$/i],[PR_ATTRIB_NAME,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],[&#39;lang-uq.val&#39;,/^=\s*([^&gt;\&#39;\&quot;\s]*(?:[^&gt;\&#39;\&quot;\s\/]|\/(?=\s)))/],[PR_PUNCTUATION,/^[=&lt;&gt;\/]+/],[&#39;lang-js&#39;,/^on\w+\s*=\s*\&quot;([^\&quot;]+)\&quot;/i],[&#39;lang-js&#39;,/^on\w+\s*=\s*\&#39;([^\&#39;]+)\&#39;/i],[&#39;lang-js&#39;,/^on\w+\s*=\s*([^\&quot;\&#39;&gt;\s]+)/i],[&#39;lang-css&#39;,/^style\s*=\s*\&quot;([^\&quot;]+)\&quot;/i],[&#39;lang-css&#39;,/^style\s*=\s*\&#39;([^\&#39;]+)\&#39;/i],[&#39;lang-css&#39;,/^style\s*=\s*([^\&quot;\&#39;&gt;\s]+)/i]]),[&#39;in.tag&#39;]);registerLangHandler(createSimpleLexer([],[[PR_ATTRIB_VALUE,/^[\s\S]+/]]),[&#39;uq.val&#39;]);registerLangHandler(sourceDecorator({&#39;keywords&#39;:CPP_KEYWORDS,&#39;hashComments&#39;:true,&#39;cStyleComments&#39;:true,&#39;types&#39;:C_TYPES}),[&#39;c&#39;,&#39;cc&#39;,&#39;cpp&#39;,&#39;cxx&#39;,&#39;cyc&#39;,&#39;m&#39;]);registerLangHandler(sourceDecorator({&#39;keywords&#39;:&#39;null,true,false&#39;}),[&#39;json&#39;]);registerLangHandler(sourceDecorator({&#39;keywords&#39;:CSHARP_KEYWORDS,&#39;hashComments&#39;:true,&#39;cStyleComments&#39;:true,&#39;verbatimStrings&#39;:true,&#39;types&#39;:C_TYPES}),[&#39;cs&#39;]);registerLangHandler(sourceDecorator({&#39;keywords&#39;:JAVA_KEYWORDS,&#39;cStyleComments&#39;:true}),[&#39;java&#39;]);registerLangHandler(sourceDecorator({&#39;keywords&#39;:SH_KEYWORDS,&#39;hashComments&#39;:true,&#39;multiLineStrings&#39;:true}),[&#39;bsh&#39;,&#39;csh&#39;,&#39;sh&#39;]);registerLangHandler(sourceDecorator({&#39;keywords&#39;:PYTHON_KEYWORDS,&#39;hashComments&#39;:true,&#39;multiLineStrings&#39;:true,&#39;tripleQuotedStrings&#39;:true}),[&#39;cv&#39;,&#39;py&#39;]);registerLangHandler(sourceDecorator({&#39;keywords&#39;:PERL_KEYWORDS,&#39;hashComments&#39;:true,&#39;multiLineStrings&#39;:true,&#39;regexLiterals&#39;:true}),[&#39;perl&#39;,&#39;pl&#39;,&#39;pm&#39;]);registerLangHandler(sourceDecorator({&#39;keywords&#39;:RUBY_KEYWORDS,&#39;hashComments&#39;:true,&#39;multiLineStrings&#39;:true,&#39;regexLiterals&#39;:true}),[&#39;rb&#39;]);registerLangHandler(sourceDecorator({&#39;keywords&#39;:JSCRIPT_KEYWORDS,&#39;cStyleComments&#39;:true,&#39;regexLiterals&#39;:true}),[&#39;js&#39;]);registerLangHandler(sourceDecorator({&#39;keywords&#39;:COFFEE_KEYWORDS,&#39;hashComments&#39;:3,&#39;cStyleComments&#39;:true,&#39;multilineStrings&#39;:true,&#39;tripleQuotedStrings&#39;:true,&#39;regexLiterals&#39;:true}),[&#39;coffee&#39;]);registerLangHandler(createSimpleLexer([],[[PR_STRING,/^[\s\S]+/]]),[&#39;regex&#39;]);function applyDecorator(job){var opt_langExtension=job.langExtension;try{var sourceAndSpans=extractSourceSpans(job.sourceNode,job.pre);var source=sourceAndSpans.sourceCode;job.sourceCode=source;job.spans=sourceAndSpans.spans;job.basePos=0;langHandlerForExtension(opt_langExtension,source)(job);recombineTagsAndDecorations(job);}catch(e){if(win[&#39;console&#39;]){console[&#39;log&#39;](e&amp;&amp;e[&#39;stack&#39;]?e[&#39;stack&#39;]:e);}}}</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">prettyPrintOne</span>(<span class="pl-smi">sourceCodeHtml</span>,<span class="pl-smi">opt_langExtension</span>,<span class="pl-smi">opt_numberLines</span>){<span class="pl-k">var</span> container<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>pre<span class="pl-pds">&#39;</span></span>);<span class="pl-smi">container</span>.<span class="pl-smi">innerHTML</span><span class="pl-k">=</span>sourceCodeHtml;<span class="pl-k">if</span>(opt_numberLines){<span class="pl-en">numberLines</span>(container,opt_numberLines,<span class="pl-c1">true</span>);}</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> job<span class="pl-k">=</span>{langExtension<span class="pl-k">:</span>opt_langExtension,numberLines<span class="pl-k">:</span>opt_numberLines,sourceNode<span class="pl-k">:</span>container,pre<span class="pl-k">:</span><span class="pl-c1">1</span>};<span class="pl-en">applyDecorator</span>(job);<span class="pl-k">return</span> <span class="pl-smi">container</span>.<span class="pl-smi">innerHTML</span>;}</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">prettyPrint</span>(<span class="pl-smi">opt_whenDone</span>){<span class="pl-k">function</span> <span class="pl-en">byTagName</span>(<span class="pl-smi">tn</span>){<span class="pl-k">return</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(tn);}</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> codeSegments<span class="pl-k">=</span>[<span class="pl-en">byTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>pre<span class="pl-pds">&#39;</span></span>),<span class="pl-en">byTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>code<span class="pl-pds">&#39;</span></span>),<span class="pl-en">byTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>xmp<span class="pl-pds">&#39;</span></span>)];<span class="pl-k">var</span> elements<span class="pl-k">=</span>[];<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">codeSegments</span>.<span class="pl-c1">length</span>;<span class="pl-k">++</span>i){<span class="pl-k">for</span>(<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-c1">0</span>,n<span class="pl-k">=</span>codeSegments[i].<span class="pl-c1">length</span>;j<span class="pl-k">&lt;</span>n;<span class="pl-k">++</span>j){<span class="pl-smi">elements</span>.<span class="pl-c1">push</span>(codeSegments[i][j]);}}</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">codeSegments<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">var</span> clock<span class="pl-k">=</span><span class="pl-c1">Date</span>;<span class="pl-k">if</span>(<span class="pl-k">!</span>clock[<span class="pl-s"><span class="pl-pds">&#39;</span>now<span class="pl-pds">&#39;</span></span>]){clock<span class="pl-k">=</span>{<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-en">now</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span><span class="pl-k">+</span>(<span class="pl-k">new</span> <span class="pl-en">Date</span>);}};}</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> k<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">var</span> prettyPrintingJob;<span class="pl-k">var</span> langExtensionRe<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>lang(?:uage)<span class="pl-k">?</span>-(<span class="pl-c1">[<span class="pl-c1">\w.</span>]</span><span class="pl-k">+</span>)(?!<span class="pl-c1">\S</span>)<span class="pl-pds">/</span></span>;<span class="pl-k">var</span> prettyPrintRe<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>prettyprint<span class="pl-k">\b</span><span class="pl-pds">/</span></span>;<span class="pl-k">var</span> prettyPrintedRe<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>prettyprinted<span class="pl-k">\b</span><span class="pl-pds">/</span></span>;<span class="pl-k">var</span> preformattedTagNameRe<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>pre<span class="pl-k">|</span>xmp<span class="pl-pds">/</span>i</span>;<span class="pl-k">var</span> codeRe<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>code<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>;<span class="pl-k">var</span> preCodeXmpRe<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:pre<span class="pl-k">|</span>code<span class="pl-k">|</span>xmp)<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>;<span class="pl-k">function</span> <span class="pl-en">doWork</span>(){<span class="pl-k">var</span> endTime<span class="pl-k">=</span>(win[<span class="pl-s"><span class="pl-pds">&#39;</span>PR_SHOULD_USE_CONTINUATION<span class="pl-pds">&#39;</span></span>]<span class="pl-k">?</span>clock[<span class="pl-s"><span class="pl-pds">&#39;</span>now<span class="pl-pds">&#39;</span></span>]()<span class="pl-k">+</span><span class="pl-c1">250</span><span class="pl-k">:</span><span class="pl-c1">Infinity</span>);<span class="pl-k">for</span>(;k<span class="pl-k">&lt;</span><span class="pl-smi">elements</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>clock[<span class="pl-s"><span class="pl-pds">&#39;</span>now<span class="pl-pds">&#39;</span></span>]()<span class="pl-k">&lt;</span>endTime;k<span class="pl-k">++</span>){<span class="pl-k">var</span> cs<span class="pl-k">=</span>elements[k];<span class="pl-k">var</span> className<span class="pl-k">=</span><span class="pl-smi">cs</span>.<span class="pl-c1">className</span>;<span class="pl-k">if</span>(<span class="pl-smi">prettyPrintRe</span>.<span class="pl-c1">test</span>(className)<span class="pl-k">&amp;&amp;!</span><span class="pl-smi">prettyPrintedRe</span>.<span class="pl-c1">test</span>(className)){<span class="pl-k">var</span> nested<span class="pl-k">=</span><span class="pl-c1">false</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> p<span class="pl-k">=</span><span class="pl-smi">cs</span>.<span class="pl-c1">parentNode</span>;p;p<span class="pl-k">=</span><span class="pl-smi">p</span>.<span class="pl-c1">parentNode</span>){<span class="pl-k">var</span> tn<span class="pl-k">=</span><span class="pl-smi">p</span>.<span class="pl-c1">tagName</span>;<span class="pl-k">if</span>(<span class="pl-smi">preCodeXmpRe</span>.<span class="pl-c1">test</span>(tn)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">p</span>.<span class="pl-c1">className</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">prettyPrintRe</span>.<span class="pl-c1">test</span>(<span class="pl-smi">p</span>.<span class="pl-c1">className</span>)){nested<span class="pl-k">=</span><span class="pl-c1">true</span>;<span class="pl-k">break</span>;}}</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>nested){<span class="pl-smi">cs</span>.<span class="pl-c1">className</span><span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span> prettyprinted<span class="pl-pds">&#39;</span></span>;<span class="pl-k">var</span> langExtension<span class="pl-k">=</span><span class="pl-smi">className</span>.<span class="pl-c1">match</span>(langExtensionRe);<span class="pl-k">var</span> wrapper;<span class="pl-k">if</span>(<span class="pl-k">!</span>langExtension<span class="pl-k">&amp;&amp;</span>(wrapper<span class="pl-k">=</span><span class="pl-en">childContentWrapper</span>(cs))<span class="pl-k">&amp;&amp;</span><span class="pl-smi">codeRe</span>.<span class="pl-c1">test</span>(<span class="pl-smi">wrapper</span>.<span class="pl-c1">tagName</span>)){langExtension<span class="pl-k">=</span><span class="pl-smi">wrapper</span>.<span class="pl-c1">className</span>.<span class="pl-c1">match</span>(langExtensionRe);}</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(langExtension){langExtension<span class="pl-k">=</span>langExtension[<span class="pl-c1">1</span>];}</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> preformatted;<span class="pl-k">if</span>(<span class="pl-smi">preformattedTagNameRe</span>.<span class="pl-c1">test</span>(<span class="pl-smi">cs</span>.<span class="pl-c1">tagName</span>)){preformatted<span class="pl-k">=</span><span class="pl-c1">1</span>;}<span class="pl-k">else</span>{<span class="pl-k">var</span> currentStyle<span class="pl-k">=</span>cs[<span class="pl-s"><span class="pl-pds">&#39;</span>currentStyle<span class="pl-pds">&#39;</span></span>];<span class="pl-k">var</span> whitespace<span class="pl-k">=</span>(currentStyle<span class="pl-k">?</span>currentStyle[<span class="pl-s"><span class="pl-pds">&#39;</span>whiteSpace<span class="pl-pds">&#39;</span></span>]<span class="pl-k">:</span>(<span class="pl-c1">document</span>.<span class="pl-c1">defaultView</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">document</span>.<span class="pl-c1">defaultView</span>.<span class="pl-smi">getComputedStyle</span>)<span class="pl-k">?</span><span class="pl-c1">document</span>.<span class="pl-c1">defaultView</span>.<span class="pl-en">getComputedStyle</span>(cs,<span class="pl-c1">null</span>).<span class="pl-en">getPropertyValue</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>white-space<span class="pl-pds">&#39;</span></span>)<span class="pl-k">:</span><span class="pl-c1">0</span>);preformatted<span class="pl-k">=</span>whitespace<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&#39;</span>pre<span class="pl-pds">&#39;</span></span><span class="pl-k">===</span><span class="pl-smi">whitespace</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,<span class="pl-c1">3</span>);}</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> lineNums<span class="pl-k">=</span><span class="pl-smi">cs</span>.<span class="pl-c1">className</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>linenums<span class="pl-k">\b</span>(?::(<span class="pl-c1">\d</span><span class="pl-k">+</span>))<span class="pl-k">?</span><span class="pl-pds">/</span></span>);lineNums<span class="pl-k">=</span>lineNums<span class="pl-k">?</span>lineNums[<span class="pl-c1">1</span>]<span class="pl-k">&amp;&amp;</span>lineNums[<span class="pl-c1">1</span>].<span class="pl-c1">length</span><span class="pl-k">?</span><span class="pl-k">+</span>lineNums[<span class="pl-c1">1</span>]<span class="pl-k">:</span><span class="pl-c1">true</span><span class="pl-k">:</span><span class="pl-c1">false</span>;<span class="pl-k">if</span>(lineNums){<span class="pl-en">numberLines</span>(cs,lineNums,preformatted);}</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">prettyPrintingJob<span class="pl-k">=</span>{langExtension<span class="pl-k">:</span>langExtension,sourceNode<span class="pl-k">:</span>cs,numberLines<span class="pl-k">:</span>lineNums,pre<span class="pl-k">:</span>preformatted};<span class="pl-en">applyDecorator</span>(prettyPrintingJob);}}}</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(k<span class="pl-k">&lt;</span><span class="pl-smi">elements</span>.<span class="pl-c1">length</span>){<span class="pl-c1">setTimeout</span>(doWork,<span class="pl-c1">250</span>);}<span class="pl-k">else</span> <span class="pl-k">if</span>(opt_whenDone){<span class="pl-en">opt_whenDone</span>();}}</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line"><span class="pl-en">doWork</span>();}</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-c1">PR</span><span class="pl-k">=</span>win[<span class="pl-s"><span class="pl-pds">&#39;</span>PR<span class="pl-pds">&#39;</span></span>]<span class="pl-k">=</span>{<span class="pl-s"><span class="pl-pds">&#39;</span>createSimpleLexer<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>createSimpleLexer,<span class="pl-s"><span class="pl-pds">&#39;</span>registerLangHandler<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>registerLangHandler,<span class="pl-s"><span class="pl-pds">&#39;</span>sourceDecorator<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>sourceDecorator,<span class="pl-s"><span class="pl-pds">&#39;</span>PR_ATTRIB_NAME<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">PR_ATTRIB_NAME</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>PR_ATTRIB_VALUE<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">PR_ATTRIB_VALUE</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>PR_COMMENT<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">PR_COMMENT</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>PR_DECLARATION<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">PR_DECLARATION</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>PR_KEYWORD<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">PR_KEYWORD</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>PR_LITERAL<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">PR_LITERAL</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>PR_NOCODE<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">PR_NOCODE</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>PR_PLAIN<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">PR_PLAIN</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>PR_PUNCTUATION<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">PR_PUNCTUATION</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>PR_SOURCE<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">PR_SOURCE</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>PR_STRING<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">PR_STRING</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>PR_TAG<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">PR_TAG</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>PR_TYPE<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">PR_TYPE</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>prettyPrintOne<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>win[<span class="pl-s"><span class="pl-pds">&#39;</span>prettyPrintOne<span class="pl-pds">&#39;</span></span>]<span class="pl-k">=</span>prettyPrintOne,<span class="pl-s"><span class="pl-pds">&#39;</span>prettyPrint<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>win[<span class="pl-s"><span class="pl-pds">&#39;</span>prettyPrint<span class="pl-pds">&#39;</span></span>]<span class="pl-k">=</span>prettyPrint};<span class="pl-k">if</span>(<span class="pl-k">typeof</span> define<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">&amp;&amp;</span>define[<span class="pl-s"><span class="pl-pds">&#39;</span>amd<span class="pl-pds">&#39;</span></span>]){<span class="pl-en">define</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>google-code-prettify<span class="pl-pds">&quot;</span></span>,[],<span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">PR</span>;});}})();</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">;(<span class="pl-k">function</span>(<span class="pl-c1">window</span>, <span class="pl-c1">document</span>) {</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Hide body until we&#39;re done fiddling with the DOM</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">document</span>.<span class="pl-c1">body</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span>////////////////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Shims for IE &lt; 9</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">document</span>.<span class="pl-smi">head</span> <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>head<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>getElementsByClassName<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> <span class="pl-c1">document</span>)) {</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">document</span>.<span class="pl-en">getElementsByClassName</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>) {</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span> <span class="pl-en">getElementsByClassName</span>(<span class="pl-smi">node</span>, <span class="pl-smi">classname</span>) {</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> a <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> re <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>(^| )<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>classname<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>( |$)<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> els <span class="pl-k">=</span> <span class="pl-smi">node</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>,j<span class="pl-k">=</span><span class="pl-smi">els</span>.<span class="pl-c1">length</span>; i<span class="pl-k">&lt;</span>j; i<span class="pl-k">++</span>)</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-smi">re</span>.<span class="pl-c1">test</span>(els[i].<span class="pl-c1">className</span>))<span class="pl-smi">a</span>.<span class="pl-c1">push</span>(els[i]);</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> a;</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">getElementsByClassName</span>(<span class="pl-c1">document</span>.<span class="pl-c1">body</span>, name);</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span>////////////////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Get user elements we need</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> markdownEl <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>xmp<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>] <span class="pl-k">||</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>textarea<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>],</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">      titleEl <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>],</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">      scriptEls <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>script<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">      navbarEl <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementsByClassName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>navbar<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span>////////////////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> &lt;head&gt; stuff</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Use &lt;meta&gt; viewport so that Bootstrap is actually responsive on mobile</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> metaEl <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>meta<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">metaEl</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>viewport<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">metaEl</span>.<span class="pl-c1">content</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-c1">document</span>.<span class="pl-smi">head</span>.<span class="pl-c1">firstChild</span>)</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">document</span>.<span class="pl-smi">head</span>.<span class="pl-c1">insertBefore</span>(metaEl, <span class="pl-c1">document</span>.<span class="pl-smi">head</span>.<span class="pl-c1">firstChild</span>);</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">document</span>.<span class="pl-smi">head</span>.<span class="pl-c1">appendChild</span>(metaEl);</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Get origin of script</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> origin <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">scriptEls</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (scriptEls[i].<span class="pl-smi">src</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>strapdown<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">      origin <span class="pl-k">=</span> scriptEls[i].<span class="pl-smi">src</span>;</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> originBase <span class="pl-k">=</span> <span class="pl-smi">origin</span>.<span class="pl-c1">substr</span>(<span class="pl-c1">0</span>, <span class="pl-smi">origin</span>.<span class="pl-c1">lastIndexOf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Get theme</span></td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> theme <span class="pl-k">=</span> <span class="pl-smi">markdownEl</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>theme<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bootstrap<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">  theme <span class="pl-k">=</span> <span class="pl-smi">theme</span>.<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Stylesheets</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> linkEl <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>link<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">linkEl</span>.<span class="pl-c1">href</span> <span class="pl-k">=</span> originBase <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/themes/<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>theme<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>.min.css<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">linkEl</span>.<span class="pl-c1">rel</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>stylesheet<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">document</span>.<span class="pl-smi">head</span>.<span class="pl-c1">appendChild</span>(linkEl);</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> linkEl <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>link<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">linkEl</span>.<span class="pl-c1">href</span> <span class="pl-k">=</span> originBase <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/strapdown.css<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">linkEl</span>.<span class="pl-c1">rel</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>stylesheet<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">document</span>.<span class="pl-smi">head</span>.<span class="pl-c1">appendChild</span>(linkEl);</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> linkEl <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>link<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">linkEl</span>.<span class="pl-c1">href</span> <span class="pl-k">=</span> originBase <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/themes/bootstrap-responsive.min.css<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">linkEl</span>.<span class="pl-c1">rel</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>stylesheet<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">document</span>.<span class="pl-smi">head</span>.<span class="pl-c1">appendChild</span>(linkEl);</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span>////////////////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> &lt;body&gt; stuff</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> markdown <span class="pl-k">=</span> <span class="pl-smi">markdownEl</span>.<span class="pl-smi">textContent</span> <span class="pl-k">||</span> <span class="pl-smi">markdownEl</span>.<span class="pl-smi">innerText</span>;</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> newNode <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">newNode</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>container<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">newNode</span>.<span class="pl-c1">id</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>content<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">document</span>.<span class="pl-c1">body</span>.<span class="pl-c1">replaceChild</span>(newNode, markdownEl);</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Insert navbar if there&#39;s none</span></td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> newNode <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">newNode</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>navbar navbar-fixed-top<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span>navbarEl <span class="pl-k">&amp;&amp;</span> titleEl) {</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">newNode</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;navbar-inner&quot;&gt; &lt;div class=&quot;container&quot;&gt; &lt;div id=&quot;headline&quot; class=&quot;brand&quot;&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">document</span>.<span class="pl-c1">body</span>.<span class="pl-c1">insertBefore</span>(newNode, <span class="pl-c1">document</span>.<span class="pl-c1">body</span>.<span class="pl-c1">firstChild</span>);</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> title <span class="pl-k">=</span> <span class="pl-smi">titleEl</span>.<span class="pl-smi">innerHTML</span>;</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> headlineEl <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>headline<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (headlineEl)</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">headlineEl</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> title;</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span>////////////////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Markdown!</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Generate Markdown</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> html <span class="pl-k">=</span> <span class="pl-en">marked</span>(markdown);</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>content<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> html;</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Prettify</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> codeEls <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>code<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>, ii<span class="pl-k">=</span><span class="pl-smi">codeEls</span>.<span class="pl-c1">length</span>; i<span class="pl-k">&lt;</span>ii; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> codeEl <span class="pl-k">=</span> codeEls[i];</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> lang <span class="pl-k">=</span> <span class="pl-smi">codeEl</span>.<span class="pl-c1">className</span>;</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">codeEl</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>prettyprint lang-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> lang;</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">prettyPrint</span>();</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Style tables</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> tableEls <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>table<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>, ii<span class="pl-k">=</span><span class="pl-smi">tableEls</span>.<span class="pl-c1">length</span>; i<span class="pl-k">&lt;</span>ii; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> tableEl <span class="pl-k">=</span> tableEls[i];</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">tableEl</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>table table-striped table-bordered<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> All done - show body</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">document</span>.<span class="pl-c1">body</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">})(<span class="pl-c1">window</span>, <span class="pl-c1">document</span>);</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
</table>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

  </div>

      
<div class="container site-footer-container">
  <div class="site-footer " role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.18523s from unicorn-4107586298-0l850">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/compat-91f98c37fc84eac24836eec2567e9912742094369a04c4eba6e3cd1fa18902d9.js"></script>
    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-c6741f849ee7ce98334afd0ceddf108776c684dacd4fcc379e8833a37a330e06.js"></script>
    
    <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-8b365f39a2d03c8431a4bda175deb92478f0481a1f43c3139260546f2effe744.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

