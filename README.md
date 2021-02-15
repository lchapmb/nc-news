# Northcoders News

Northcoders News is a social news aggregation, web content rating, and discussion website.

Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which they have added.

## Setup

Instructions for setting up the backend:

Either clone the repo from https://github.com/lchapmb/nc-news or download and extract.

Use your console to install all necessary dependancies with:

```
npm i
```

If you wish to run the site locally, you will first need to change your working directory to news-app using the following command in terminal:

```
cd news-app
```

To run the server locally run the following command in your console and navigate to the page on your local machine using your browser. By default this will be http://localhost:3000

```
npm start
```

---

## User Stories

1. view a list of all articles
2. view a page for each topic with a list of related articles.
3. view an individual article.
4. view an individual article's comments.
5. sort articles by:
   - date created
   - comment_count
   - votes
6. post a new comment to an existing article (as a default logged in user. e.g. 'jessjelly').
7. delete my own comments (as a default logged in user. e.g. 'jessjelly').
8. vote on an article and immediately see the change.
9. vote on a comment and immediately see the change.

**Error-handling: As a user, I should...**

10. see a 404 error if I go on a non-existent path/a path for a non-existent article/topic.
11. see a 400 error if I go on a invalid article ID.
12. not be allowed to post a comment if I have not filled in all of the form boxes.

## Planned functionality

**As a user, I should be able to...**

18. navigate over pages of articles (e.g. using pagination or infinite scroll).
19. navigate over pages of comments (e.g. using pagination or infinite scroll).
20. view a list of all articles written by any specific user.
21. post a new article to an existing topic.
22. delete my own articles.

## Links

This site is a work in progress and will be hosted shortly!

GitHub repo: https://github.com/lchapmb/nc-news
