# Frontend vue internship template

## Hey!

This assignment is designed for basic learning [Vue.js](https://Vue.js.org/). In this task there is a [stack of technologies](#stackOfTechnologies) that must be used when working with the practical part, as well as [questions](#Questions) on the theoretical part that you must answer after the end of the assignment.

# Instructions:

* Before starting practice, it is advisable to study the theoretical part. A good signal that you are ready for the practice part is the opportunity to answer the questions below.
* You already have prepared stub components. You can work with them as you see fit.


## Questions
1) What is Vue.js?
2) List some features of Vue.js.
3) Explain Life cycle of Vue Instance.
4) How to create an instance of Vue.js.
5) Explain the differences between one-way data flow and two-way data binding?
6) How to create Two-Way Bindings in Vue.js?
7) What are filters in Vue.js?
8) How to create a custom filter in Vue.js?
9) What are Components in Vue.js? How to register a component inside other component
10) What are Directives in Vue.js, List some of them you used?
11) List type of Directive are available in Vue.js.
12) What is VUE-resource, how can you install Vue Resource ?
13) How to create Constants in Vue.js.
14) What is virtual dom in Vue.js?
15) Why we need Vue.js mixins?
16) What is Vuex?
17) What are filters in Vue.js?
18) How to create a component in Vue.js?
19) How to import js file in the Vue component?
20) How to call rest API from Vue.js?

## Stack of technologies<a name="stackOfTechnologies"></a>

1) [Vue.js](https://Vue.js.org/)
3) [Vuex](https://Vue.js.org/)
2) [Ant Designe](https://Vue.js.org/)
4) [GitHub REST API](https://docs.github.com/en/rest)
4) [Vue test](https://vue-test-utils.vuejs.org/guides/#common-tips)

## Practical part

Description
Develop the application `Github Issue Spammer (GIS)` which shows a list of user’s repositories, list of issues in each repository and has functionality to add, modify or remove issues for each of them.

The application consists of 4 pages:
1) List of repositories
2) Repository details (list of issues)
3) Add issue page
4) Edit issue page

Bonus pack:
1) Add OAuth authorization

#### List of repositories
Simple list with full repository name, description and stars count. List sorted by updated at field from high to low values. Should show No repositories found message if user hasn't added any repository yet. By clicking on a row the user navigates to the repository details page. List should contain pagination, default page size - 20 items.
#### Repository details (list of issues)
Page shows details of repository. This page contains 2 sections - brief info (details from list page + take any 2 additional fields from repository) and list of issues. Should show No issues found message if user hasn't added any issue yet. By clicking on a row the user navigates to the issue edit page.
#### Add issue
This page contains a form with text input, textarea and button. A user enters a issue title and description, and the app creates an issue and navigates the user to the details page. If error happens - form should show messages near the invalid fields.
#### Edit issue
The same UI as for adding issues. You need to populate form fields with existing values. A successful submitting form should become an untouched state. Handling errors similar to add issue page.
#### Remove issue
Remove the issue from the list or issue details page by clicking on the “X” button. Should show confirmation dialog before sending API requests.
#### Tests (Bonus)
You need to write tests for the entire application. Test coverage must be 100%
#### Auth (Bonus)
Block application (redirect user to login page) until user passes OAuth authorization. Use token to sign API requests and get current user repositories and issues.
### API
[GitHub REST API](https://docs.github.com/en/rest)

![project_image](https://github.com/IgorSobol/frontend-vue-internship-template/blob/master/project_image.png)


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.Vue.js.org/config/).
