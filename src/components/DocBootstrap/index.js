import styled from 'styled-components';

// eslint-disable-next-line no-class-assign
const DocBootstrap = styled.div`
  /*!
   * Bootstrap Docs (https://getbootstrap.com)
   * Copyright 2011-2017 The Bootstrap Authors
   * Copyright 2011-2017 Twitter, Inc.
   * Licensed under the Creative Commons Attribution 3.0 Unported License. For
   * details, see https://creativecommons.org/licenses/by/3.0/.
   */
  
  .bd-booticon {
      display: block;
      width: 9rem;
      height: 9rem;
      font-size: 6.5rem;
      line-height: 9rem;
      color: #fff;
      text-align: center;
      cursor: default;
      background-color: #563d7c;
      border-radius: 15%
  }
  .bd-booticon.inverse {
      color: #563d7c;
      background-color: #fff
  }
  .bd-booticon.outline {
      background-color: transparent;
      border: 1px solid #cdbfe3
  }
  .bd-navbar .navbar-nav .nav-link {
      color: #8e869d
  }
  .bd-navbar .navbar-nav .nav-link.active,
  .bd-navbar .navbar-nav .nav-link:focus,
  .bd-navbar .navbar-nav .nav-link:hover {
      color: #292b2c;
      background-color: transparent
  }
  .bd-navbar .navbar-nav .nav-link.active {
      font-weight: 500;
      color: #040404
  }
  .bd-navbar .dropdown-menu {
      font-size: inherit
  }
  .bd-masthead {
      position: relative;
      padding: 3rem 15px 2rem;
      color: #cdbfe3;
      text-align: center;
      background-image: -webkit-linear-gradient(315deg, #271b38, #563d7c, #7952b3);
      background-image: -o-linear-gradient(315deg, #271b38, #563d7c, #7952b3);
      background-image: linear-gradient(135deg, #271b38, #563d7c, #7952b3)
  }
  .bd-masthead .bd-booticon {
      margin: 0 auto 2rem;
      color: #cdbfe3;
      border-color: #cdbfe3
  }
  .bd-masthead h1 {
      font-weight: 300;
      line-height: 1
  }
  .bd-masthead .lead {
      margin-right: auto;
      margin-bottom: 2rem;
      margin-left: auto;
      font-size: 1.25rem;
      color: #fff
  }
  .bd-masthead .version {
      margin-top: -1rem;
      margin-bottom: 2rem
  }
  .bd-masthead .btn {
      width: 100%;
      padding: 1rem 2rem;
      font-size: 1.25rem;
      font-weight: 500;
      color: #ffe484;
      border-color: #ffe484
  }
  .bd-masthead .btn:hover {
      color: #2a2730;
      background-color: #ffe484;
      border-color: #ffe484
  }
  .bd-masthead .carbonad {
      margin-bottom: -2rem!important
  }
  @media (min-width: 576px) {
      .bd-masthead {
          padding-top: 8rem;
          padding-bottom: 2rem
      }
      .bd-masthead .btn {
          width: auto
      }
      .bd-masthead .carbonad {
          margin-bottom: 0!important
      }
  }
  @media (min-width: 768px) {
      .bd-masthead {
          padding-bottom: 4rem
      }
      .bd-masthead .bd-header {
          margin-bottom: 4rem
      }
      .bd-masthead h1 {
          font-size: 4rem
      }
      .bd-masthead .lead {
          font-size: 1.5rem
      }
      .bd-masthead .carbonad {
          margin-top: 3rem!important
      }
  }
  @media (min-width: 992px) {
      .bd-masthead .lead {
          width: 85%;
          font-size: 2rem
      }
  }
  .bd-featurette {
      padding-top: 3rem;
      padding-bottom: 3rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #555;
      text-align: center;
      background-color: #fff;
      border-top: 1px solid #eee
  }
  .bd-featurette .highlight {
      text-align: left
  }
  .bd-featurette .lead {
      margin-right: auto;
      margin-bottom: 2rem;
      margin-left: auto;
      font-size: 1rem;
      text-align: center
  }
  @media (min-width: 576px) {
      .bd-featurette {
          text-align: left
      }
  }
  @media (min-width: 768px) {
      .bd-featurette .col-sm-6:first-child {
          padding-right: 45px
      }
      .bd-featurette .col-sm-6:last-child {
          padding-left: 45px
      }
  }
  .bd-featurette-title {
      margin-bottom: .5rem;
      font-size: 2rem;
      font-weight: 400;
      color: #333;
      text-align: center
  }
  .half-rule {
      width: 6rem;
      margin: 2.5rem auto
  }
  @media (min-width: 576px) {
      .half-rule {
          margin-right: 0;
          margin-left: 0
      }
  }
  .bd-featurette h4 {
      margin-top: 1rem;
      margin-bottom: .5rem;
      font-weight: 400;
      color: #333
  }
  .bd-featurette-img {
      display: block;
      margin-bottom: 1.25rem;
      color: #333
  }
  .bd-featurette-img:hover {
      color: #0275d8;
      text-decoration: none
  }
  .bd-featurette-img img {
      display: block;
      margin-bottom: 1rem
  }
  @media (min-width: 480px) {
      .bd-featurette .img-fluid {
          margin-top: 2rem
      }
  }
  @media (min-width: 768px) {
      .bd-featurette {
          padding-top: 6rem;
          padding-bottom: 6rem
      }
      .bd-featurette-title {
          font-size: 2.5rem
      }
      .bd-featurette-title+.lead {
          font-size: 1.5rem
      }
      .bd-featurette .lead {
          max-width: 80%
      }
      .bd-featurette .img-fluid {
          margin-top: 0
      }
  }
  .bd-featured-sites {
      margin-right: -1px;
      margin-left: -1px
  }
  .bd-featured-sites .col-6 {
      padding: 1px
  }
  .bd-featured-sites .img-fluid {
      margin-top: 0
  }
  @media (min-width: 768px) {
      .bd-featured-sites .col-sm-3:first-child img {
          border-top-left-radius: .25rem;
          border-bottom-left-radius: .25rem
      }
      .bd-featured-sites .col-sm-3:last-child img {
          border-top-right-radius: .25rem;
          border-bottom-right-radius: .25rem
      }
  }
  #carbonads {
      display: block;
      padding: 15px 15px 15px 160px;
      margin: 50px -15px 0;
      overflow: hidden;
      font-size: 13px;
      line-height: 1.5;
      text-align: left;
      border: solid #866ab3;
      border-width: 1px 0 0
  }
  #carbonads a {
      color: #fff;
      text-decoration: none
  }
  @media (min-width: 576px) {
      #carbonads {
          max-width: 330px;
          margin: 50px auto 0;
          border-width: 1px;
          border-radius: 4px
      }
  }
  @media (min-width: 992px) {
      #carbonads {
          position: absolute;
          top: 0;
          right: 15px;
          margin-top: 0
      }
      .bd-masthead #carbonads {
          position: static
      }
  }
  .carbon-img {
      float: left;
      margin-left: -145px
  }
  .carbon-poweredby {
      display: block;
      color: #cdbfe3!important
  }
  .bd-content>table {
      display: block;
      width: 100%;
      max-width: 100%;
      margin-bottom: 1rem;
      overflow-y: auto
  }
  .bd-content>table>tbody>tr>td,
  .bd-content>table>tbody>tr>th,
  .bd-content>table>tfoot>tr>td,
  .bd-content>table>tfoot>tr>th,
  .bd-content>table>thead>tr>td,
  .bd-content>table>thead>tr>th {
      padding: .75rem;
      vertical-align: top;
      border: 1px solid #eceeef
  }
  .bd-content>table>tbody>tr>td>p:last-child,
  .bd-content>table>tbody>tr>th>p:last-child,
  .bd-content>table>tfoot>tr>td>p:last-child,
  .bd-content>table>tfoot>tr>th>p:last-child,
  .bd-content>table>thead>tr>td>p:last-child,
  .bd-content>table>thead>tr>th>p:last-child {
      margin-bottom: 0
  }
  .bd-content>table td:first-child>code {
      white-space: nowrap
  }
  .bd-content>h2:not(:first-child) {
      margin-top: 3rem
  }
  .bd-content>h3 {
      margin-top: 1.5rem
  }
  .bd-content>ol li,
  .bd-content>ul li {
      margin-bottom: .25rem
  }
  @media (min-width: 576px) {
      .bd-title {
          font-size: 3rem
      }
      .bd-title+p {
          font-size: 1.25rem;
          font-weight: 300
      }
  }
  #markdown-toc>li:first-child {
      display: none
  }
  #markdown-toc ul {
      padding-left: 2rem;
      margin-top: .25rem;
      margin-bottom: .25rem
  }
  .bd-pageheader {
      padding: 2rem 15px;
      margin-bottom: 1.5rem;
      color: #cdbfe3;
      text-align: center;
      background-color: #563d7c
  }
  .bd-pageheader .container {
      position: relative
  }
  .bd-pageheader h1 {
      font-size: 3rem;
      font-weight: 400;
      color: #fff
  }
  .bd-pageheader p {
      margin-bottom: 0;
      font-size: 1.25rem;
      font-weight: 300
  }
  @media (min-width: 576px) {
      .bd-pageheader {
          padding-top: 4rem;
          padding-bottom: 4rem;
          margin-bottom: 3rem;
          text-align: left
      }
      .bd-pageheader .carbonad {
          margin: 2rem 0 0!important
      }
  }
  @media (min-width: 768px) {
      .bd-pageheader h1 {
          font-size: 4rem
      }
      .bd-pageheader p {
          font-size: 1.5rem
      }
  }
  @media (min-width: 992px) {
      .bd-pageheader h1,
      .bd-pageheader p {
          margin-right: 380px
      }
      .bd-pageheader .carbonad {
          position: absolute;
          top: 0;
          right: .75rem;
          margin: 0!important
      }
  }
  #skippy {
      display: block;
      padding: 1em;
      color: #fff;
      background-color: #563d7c;
      outline: 0
  }
  #skippy .skiplink-text {
      padding: .5em;
      outline: 1px dotted
  }
  @media (min-width: 768px) {
      .bd-sidebar {
          padding-left: 1rem
      }
  }
  .bd-search {
      position: relative;
      margin-bottom: 1.5rem
  }
  .bd-search .form-control {
      height: 2.45rem;
      padding-top: .4rem;
      padding-bottom: .4rem;
      background-color: #fafafa
  }
  .bd-search .form-control:focus {
      background-color: #fff
  }
  .bd-search-results {
      right: 0;
      display: block;
      padding: 0;
      overflow: hidden;
      font-size: .9rem
  }
  .bd-search-results:empty {
      display: none
  }
  .bd-search-results .dropdown-item {
      padding-right: .75rem;
      padding-left: .75rem
  }
  .bd-search-results .dropdown-item:first-child {
      margin-top: .25rem
  }
  .bd-search-results .dropdown-item:last-child {
      margin-bottom: .25rem
  }
  .bd-search-results .no-results {
      padding: .75rem 1rem;
      color: #7a7a7a;
      text-align: center;
      white-space: normal
  }
  .bd-sidenav {
      display: none
  }
  .bd-toc-link {
      display: block;
      padding: .25rem .75rem;
      color: #464a4c
  }
  .bd-toc-link:focus,
  .bd-toc-link:hover {
      color: #0275d8;
      text-decoration: none
  }
  .active>.bd-toc-link {
      font-weight: 500;
      color: #292b2c
  }
  .active>.bd-sidenav {
      display: block
  }
  .bd-toc-item.active {
      margin-top: 1rem;
      margin-bottom: 1rem
  }
  .bd-toc-item:first-child {
      margin-top: 0
  }
  .bd-toc-item:last-child {
      margin-bottom: 2rem
  }
  .bd-sidebar .nav>li>a {
      display: block;
      padding: .25rem .75rem;
      font-size: 90%;
      color: #99979c
  }
  .bd-sidebar .nav>li>a:focus,
  .bd-sidebar .nav>li>a:hover {
      color: #0275d8;
      text-decoration: none;
      background-color: transparent
  }
  .bd-sidebar .nav>.active:focus>a,
  .bd-sidebar .nav>.active:hover>a,
  .bd-sidebar .nav>.active>a {
      font-weight: 500;
      color: #292b2c;
      background-color: transparent
  }
  .bd-footer {
      padding: 4rem 0;
      margin-top: 4rem;
      font-size: 85%;
      text-align: center;
      background-color: #f7f7f7
  }
  .bd-footer a {
      font-weight: 500;
      color: #464a4c
  }
  .bd-footer a:hover {
      color: #0275d8
  }
  .bd-footer p {
      margin-bottom: 0
  }
  @media (min-width: 576px) {
      .bd-footer {
          text-align: left
      }
  }
  .bd-footer-links {
      padding-left: 0;
      margin-bottom: 1rem
  }
  .bd-footer-links li {
      display: inline-block
  }
  .bd-footer-links li+li {
      margin-left: 1rem
  }
  .bd-example-row .row+.row {
      margin-top: 1rem
  }
  .bd-example-row .row>.col,
  .bd-example-row .row>[class^=col-] {
      padding-top: .75rem;
      padding-bottom: .75rem;
      background-color: rgba(86, 61, 124, .15);
      border: 1px solid rgba(86, 61, 124, .2)
  }
  .bd-example-row .flex-items-bottom,
  .bd-example-row .flex-items-middle,
  .bd-example-row .flex-items-top {
      min-height: 6rem;
      background-color: rgba(255, 0, 0, .1)
  }
  .bd-example-row-flex-cols .row {
      min-height: 10rem;
      background-color: rgba(255, 0, 0, .1)
  }
  .bd-highlight {
      background-color: rgba(86, 61, 124, .15);
      border: 1px solid rgba(86, 61, 124, .15)
  }
  .bd-example-container {
      min-width: 16rem;
      max-width: 25rem;
      margin-right: auto;
      margin-left: auto
  }
  .bd-example-container-header {
      height: 3rem;
      margin-bottom: .5rem;
      background-color: #daeeff;
      border-radius: .25rem
  }
  .bd-example-container-sidebar {
      float: right;
      width: 4rem;
      height: 8rem;
      background-color: #fae3c4;
      border-radius: .25rem
  }
  .bd-example-container-body {
      height: 8rem;
      margin-right: 4.5rem;
      background-color: #957bbe;
      border-radius: .25rem
  }
  .bd-example-container-fluid {
      max-width: none
  }
  .bd-example {
      position: relative;
      padding: 1rem;
      margin: 1rem -1rem;
      border: solid #f7f7f9;
      border-width: .2rem 0 0
  }
  .bd-example::after {
      display: block;
      content: "";
      clear: both
  }
  @media (min-width: 576px) {
      .bd-example {
          padding: 1.5rem;
          margin-right: 0;
          margin-bottom: 0;
          margin-left: 0;
          border-width: .2rem
      }
  }
  .bd-example+.clipboard+.highlight,
  .bd-example+.highlight {
      margin-top: 0
  }
  .bd-example+p {
      margin-top: 2rem
  }
  .bd-example .pos-f-t {
      position: relative;
      margin: -1rem;
  }
  @media (min-width: 576px) {
      .bd-example .pos-f-t {
          margin: -1.5rem;
      }
  }
  .bd-example>.form-control+.form-control {
      margin-top: .5rem
  }
  
  .bd-example > .card {
    max-width: 20rem;
  }
  
  .bd-example>.alert+.alert,
  .bd-example>.nav+.nav,
  .bd-example>.navbar+.navbar,
  .bd-example>.progress+.btn,
  .bd-example>.progress+.progress {
      margin-top: 1rem
  }
  .bd-example>.dropdown-menu:first-child {
      position: static;
      display: block
  }
  .bd-example>.form-group:last-child {
      margin-bottom: 0
  }
  .bd-example>.close {
      float: none
  }
  .bd-example-type .table .type-info {
      color: #999;
      vertical-align: middle
  }
  .bd-example-type .table td {
      padding: 1rem 0;
      border-color: #eee
  }
  .bd-example-type .table tr:first-child td {
      border-top: 0
  }
  .bd-example-type h1,
  .bd-example-type h2,
  .bd-example-type h3,
  .bd-example-type h4,
  .bd-example-type h5,
  .bd-example-type h6 {
      margin: 0
  }
  .bd-example-bg-classes p {
      padding: 1rem
  }
  .bd-example>img+img {
      margin-left: .5rem
  }
  .bd-example>.btn-group {
      margin-top: .25rem;
      margin-bottom: .25rem
  }
  .bd-example>.btn-toolbar+.btn-toolbar {
      margin-top: .5rem
  }
  .bd-example-control-sizing input[type=text]+input[type=text],
  .bd-example-control-sizing select {
      margin-top: .5rem
  }
  .bd-example-form .input-group {
      margin-bottom: .5rem
  }
  .bd-example>textarea.form-control {
      resize: vertical
  }
  .bd-example>.list-group {
      max-width: 400px
  }
  .bd-example .fixed-top,
  .bd-example .sticky-top {
      position: static;
      margin: -1rem -1rem 1rem
  }
  .bd-example .fixed-bottom {
      position: static;
      margin: 1rem -1rem -1rem
  }
  @media (min-width: 576px) {
      .bd-example .fixed-top,
      .bd-example .sticky-top {
          margin: -1.5rem -1.5rem 1rem
      }
      .bd-example .fixed-bottom {
          margin: 1rem -1.5rem -1.5rem
      }
  }
  .bd-example .pagination {
      margin-top: .5rem;
      margin-bottom: .5rem
  }
  .bd-example-modal {
      background-color: #fafafa
  }
  .bd-example-modal .modal {
      position: relative;
      top: auto;
      right: auto;
      bottom: auto;
      left: auto;
      z-index: 1;
      display: block
  }
  .bd-example-modal .modal-dialog {
      left: auto;
      margin-right: auto;
      margin-left: auto
  }
  .bd-example-tabs .nav-tabs {
      margin-bottom: 1rem
  }
  .bd-example-tooltips {
      text-align: center
  }
  .bd-example-tooltips>.btn {
      margin-top: .25rem;
      margin-bottom: .25rem
  }
  .bd-example-popover-static {
      padding-bottom: 1.5rem;
      background-color: #f9f9f9
  }
  .bd-example-popover-static .popover {
      position: relative;
      display: block;
      float: left;
      width: 260px;
      margin: 1.25rem
  }
  .tooltip-demo a {
      white-space: nowrap
  }
  .bd-example-tooltip-static .tooltip {
      position: relative;
      display: inline-block;
      margin: 10px 20px;
      opacity: 1
  }
  .scrollspy-example {
      position: relative;
      height: 200px;
      margin-top: .5rem;
      overflow: auto
  }
  .bd-example>.bg-danger:not(.navbar),
  .bd-example>.bg-faded:not(.navbar),
  .bd-example>.bg-info:not(.navbar),
  .bd-example>.bg-inverse:not(.navbar),
  .bd-example>.bg-primary:not(.navbar),
  .bd-example>.bg-success:not(.navbar),
  .bd-example>.bg-warning:not(.navbar) {
      padding: .5rem;
      margin-top: .5rem;
      margin-bottom: .5rem
  }
  .bd-example-border-utils [class^=border-] {
      display: inline-block;
      width: 6rem;
      height: 6rem;
      margin: .25rem;
      background-color: #f5f5f5;
      border: 1px solid
  }
  .highlight {
      padding: 1rem;
      margin: 1rem -15px;
      background-color: #f7f7f9;
      -ms-overflow-style: -ms-autohiding-scrollbar
  }
  @media (min-width: 576px) {
      .highlight {
          padding: 1.5rem;
          margin-right: 0;
          margin-left: 0
      }
  }
  .highlight pre {
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;
      background-color: transparent;
      border: 0
  }
  .highlight pre code {
      font-size: inherit;
      color: #292b2c
  }
  .table-responsive .highlight pre {
      white-space: normal
  }
  .bd-table th small,
  .responsive-utilities th small {
      display: block;
      font-weight: 400;
      color: #999
  }
  .responsive-utilities tbody th {
      font-weight: 400
  }
  .responsive-utilities td {
      text-align: center
  }
  .responsive-utilities .is-visible {
      color: #468847;
      background-color: #dff0d8!important
  }
  .responsive-utilities .is-hidden {
      color: #ccc;
      background-color: #f9f9f9!important
  }
  .responsive-utilities-test {
      margin-top: .25rem
  }
  .responsive-utilities-test .col-6 {
      margin-top: .5rem;
      margin-bottom: .5rem
  }
  .responsive-utilities-test span {
      display: block;
      padding: 1rem .5rem;
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.1;
      text-align: center;
      border-radius: .25rem
  }
  .hidden-on .col-6>.not-visible,
  .visible-on .col-6>.not-visible {
      color: #999;
      border: 1px solid #ddd
  }
  .hidden-on .col-6 .visible,
  .visible-on .col-6 .visible {
      color: #468847;
      background-color: #dff0d8;
      border: 1px solid #d6e9c6
  }
  @media (max-width: 575px) {
      .hidden-xs-only {
          display: none!important
      }
  }
  @media (min-width: 576px) and (max-width: 767px) {
      .hidden-sm-only {
          display: none!important
      }
  }
  @media (min-width: 768px) and (max-width: 991px) {
      .hidden-md-only {
          display: none!important
      }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
      .hidden-lg-only {
          display: none!important
      }
  }
  @media (min-width: 1200px) {
      .hidden-xl-only {
          display: none!important
      }
  }
  .btn-bs {
      font-weight: 500;
      color: #7952b3;
      border-color: #7952b3
  }
  .btn-bs:active,
  .btn-bs:focus,
  .btn-bs:hover {
      color: #fff;
      background-color: #7952b3;
      border-color: #7952b3
  }
  .bd-callout {
      padding: 1.25rem;
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
      border: 1px solid #eee;
      border-left-width: .25rem;
      border-radius: .25rem
  }
  .bd-callout h4 {
      margin-top: 0;
      margin-bottom: .25rem
  }
  .bd-callout p:last-child {
      margin-bottom: 0
  }
  .bd-callout code {
      border-radius: .25rem
  }
  .bd-callout+.bd-callout {
      margin-top: -.25rem
  }
  .bd-callout-info {
      border-left-color: #5bc0de
  }
  .bd-callout-info h4 {
      color: #5bc0de
  }
  .bd-callout-warning {
      border-left-color: #f0ad4e
  }
  .bd-callout-warning h4 {
      color: #f0ad4e
  }
  .bd-callout-danger {
      border-left-color: #d9534f
  }
  .bd-callout-danger h4 {
      color: #d9534f
  }
  .bd-examples .img-thumbnail {
      margin-bottom: .75rem
  }
  .bd-examples h4 {
      margin-bottom: .25rem
  }
  .bd-examples p {
      margin-bottom: 1.25rem
  }
  @media (max-width: 480px) {
      .bd-examples {
          margin-right: -.75rem;
          margin-left: -.75rem
      }
      .bd-examples>[class^=col-] {
          padding-right: .75rem;
          padding-left: .75rem
      }
  }
  .bd-team {
      margin-bottom: 1.5rem
  }
  .bd-team .team-member {
      line-height: 2rem;
      color: #555
  }
  .bd-team .team-member:hover {
      color: #333;
      text-decoration: none
  }
  .bd-team .github-btn {
      float: right;
      width: 180px;
      height: 1.25rem;
      margin-top: .25rem;
      border: 0
  }
  .bd-team img {
      float: left;
      width: 2rem;
      margin-right: .5rem;
      border-radius: .25rem
  }
  .bd-browser-bugs td p {
      margin-bottom: 0
  }
  .bd-browser-bugs th:first-child {
      width: 18%
  }
  .bd-brand-logos {
      display: table;
      width: 100%;
      margin-bottom: 1rem;
      overflow: hidden;
      color: #563d7c;
      background-color: #f9f9f9;
      border-radius: .25rem
  }
  .bd-brand-item {
      padding: 4rem 0;
      text-align: center
  }
  .bd-brand-item+.bd-brand-item {
      border-top: 1px solid #fff
  }
  .bd-brand-logos .inverse {
      color: #fff;
      background-color: #563d7c
  }
  .bd-brand-item h1,
  .bd-brand-item h3 {
      margin-top: 0;
      margin-bottom: 0
  }
  .bd-brand-item .bd-booticon {
      margin-right: auto;
      margin-left: auto
  }
  @media (min-width: 768px) {
      .bd-brand-item {
          display: table-cell;
          width: 1%
      }
      .bd-brand-item+.bd-brand-item {
          border-top: 0;
          border-left: 1px solid #fff
      }
      .bd-brand-item h1 {
          font-size: 4rem
      }
  }
  .color-swatches {
      margin: 0 -5px;
      overflow: hidden
  }
  .color-swatch {
      float: left;
      width: 4rem;
      height: 4rem;
      margin-right: .25rem;
      margin-left: .25rem;
      border-radius: .25rem
  }
  @media (min-width: 768px) {
      .color-swatch {
          width: 6rem;
          height: 6rem
      }
  }
  .color-swatches .bd-purple {
      background-color: #563d7c
  }
  .color-swatches .bd-purple-light {
      background-color: #cdbfe3
  }
  .color-swatches .bd-purple-lighter {
      background-color: #e5e1ea
  }
  .color-swatches .bd-gray {
      background-color: #f9f9f9
  }
  .bd-clipboard {
      position: relative;
      display: none;
      float: right
  }
  .bd-clipboard+.highlight {
      margin-top: 0
  }
  .btn-clipboard {
      position: absolute;
      top: .5rem;
      right: .5rem;
      z-index: 10;
      display: block;
      padding: .25rem .5rem;
      font-size: 75%;
      color: #818a91;
      cursor: pointer;
      background-color: transparent;
      border-radius: .25rem
  }
  .btn-clipboard:hover {
      color: #fff;
      background-color: #027de7
  }
  @media (min-width: 768px) {
      .bd-clipboard {
          display: block
      }
  }
  .hll {
      background-color: #ffc
  }
  .c {
      color: #999
  }
  .k {
      color: #069
  }
  .o {
      color: #555
  }
  .cm {
      color: #999
  }
  .cp {
      color: #099
  }
  .c1 {
      color: #999
  }
  .cs {
      color: #999
  }
  .gd {
      background-color: #fcc;
      border: 1px solid #c00
  }
  .ge {
      font-style: italic
  }
  .gr {
      color: red
  }
  .gh {
      color: #030
  }
  .gi {
      background-color: #cfc;
      border: 1px solid #0c0
  }
  .go {
      color: #aaa
  }
  .gp {
      color: #009
  }
  .gu {
      color: #030
  }
  .gt {
      color: #9c6
  }
  .kc {
      color: #069
  }
  .kd {
      color: #069
  }
  .kn {
      color: #069
  }
  .kp {
      color: #069
  }
  .kr {
      color: #069
  }
  .kt {
      color: #078
  }
  .m {
      color: #f60
  }
  .s {
      color: #d44950
  }
  .na {
      color: #4f9fcf
  }
  .nb {
      color: #366
  }
  .nc {
      color: #0a8
  }
  .no {
      color: #360
  }
  .nd {
      color: #99f
  }
  .ni {
      color: #999
  }
  .ne {
      color: #c00
  }
  .nf {
      color: #c0f
  }
  .nl {
      color: #99f
  }
  .nn {
      color: #0cf
  }
  .nt {
      color: #2f6f9f
  }
  .nv {
      color: #033
  }
  .ow {
      color: #000
  }
  .w {
      color: #bbb
  }
  .mf {
      color: #f60
  }
  .mh {
      color: #f60
  }
  .mi {
      color: #f60
  }
  .mo {
      color: #f60
  }
  .sb {
      color: #c30
  }
  .sc {
      color: #c30
  }
  .sd {
      font-style: italic;
      color: #c30
  }
  .s2 {
      color: #c30
  }
  .se {
      color: #c30
  }
  .sh {
      color: #c30
  }
  .si {
      color: #a00
  }
  .sx {
      color: #c30
  }
  .sr {
      color: #3aa
  }
  .s1 {
      color: #c30
  }
  .ss {
      color: #fc3
  }
  .bp {
      color: #366
  }
  .vc {
      color: #033
  }
  .vg {
      color: #033
  }
  .vi {
      color: #033
  }
  .il {
      color: #f60
  }
  .css .nt+.nt,
  .css .o,
  .css .o+.nt {
      color: #999
  }
  .language-bash::before {
      color: #009;
      content: "$ ";
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none
  }
  .language-powershell::before {
      color: #009;
      content: "PM> ";
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none
  }
  .anchorjs-link {
      color: inherit
  }
  @media (max-width: 480px) {
      .anchorjs-link {
          display: none
      }
  }
  :hover>.anchorjs-link {
      opacity: .75;
      -webkit-transition: color .16s linear;
      -o-transition: color .16s linear;
      transition: color .16s linear
  }
  .anchorjs-link:focus,
  :hover>.anchorjs-link:hover {
      text-decoration: none;
      opacity: 1
  }
`;

export default DocBootstrap;
