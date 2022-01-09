![easel logo](client/src/img/logo.png)
<br>
# [Easel](https://easelapp.herokuapp.com) Digital Fine Art Marketplace
#### A digital fine art marketplace designed to help artists expand their following and sell their art safely and easily
<br>
<br>
*Team Members:*
- [@RachMink](https://github.com/RachMink)
- [@leeran7](https://github.com/leeran7)
- [@JuZNyC](https://github.com/JuZNyC)

### Inspiration
Leeran's 
Aside for it being difficult to make it big in the art scene, one of the biggest issues for artists in the traditional fine art marketplace, is the production of counterfeit products. 

This Leeran personally, as one of these artists was his grandfather. People would counterfit his art which caused Mr. Farin to lose lots of profit on his art. 

This CUNY Tech Prep project was created to allow an artist to easily track their sales and allow up and coming artists to gain a following at the same time

[![Alternate Text]({image-url})]({video-url} "Link Title")
## Features


## Stack

*API backend*

- express.js
- sequelize.js

*React client*

- Material-UI for a clean Material Design
- React Router

*Deployed on Heroku*

## Project Structure

<pre>
.
├── README.md
├── <strong>api</strong>
│   ├── app.js
│   ├── <strong>config</strong>
│   │   └── config.json
│   ├── <strong>controllers</strong>
│   │   ├── appConfig.js
│   │   ├── index.js
│   │   ├── artwork.js
│   │   ├── auth.js
│   │   ├── cart.js
│   │   ├── checkout.js
│   │   ├── liked.js
│   │   ├── sampleartworks.js
│   │   ├── socials.js
│   │   ├── user.js
│   │   └── posts.js
│   ├── <strong>models</strong>
│   |   ├── artwork.js
│   │   ├── cart.js
│   │   ├── cartitem.js
│   │   ├── index.js
│   │   ├── liked.js
│   │   ├── post.js
│   │   ├── sampleArtworks.js
│   │   ├── transaction.js
│   |   └── user.js
│   └── <strong>middlewares</strong>
│       └── auth.js
├── <strong>client</strong>
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── <strong>public</strong>
│   │   ├── easel5.png
│   │   ├── index.html
│   │   ├── logo.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── <strong>src</strong>
│       ├── <strong>components</strong>
│       │   ├── AboutTheArtist.js
│       │   ├── ArtistName.js
│       │   ├── AuthButton.js
│       │   ├── AuthForm.js
│       │   ├── CartForm.js
│       │   ├── CloudinaryUploadWidget.js
│       │   ├── CustomDialog.js
│       │   ├── CustomSnackBar.js
│       │   ├── Loading.js
│       │   ├── LoginForm.js
│       │   ├── NavBar.js
│       │   ├── PhotoGallery.js
│       │   ├── SellForm.js
│       │   ├── SignUpForm.js
│       │   └── Post.js
│       ├── <strong>context</strong>
│       │   └── AuthContext.js
│       ├── <strong>img</strong>
│       │   └── logo.png
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── index.css
│       ├── index.js
│       ├── <strong>pages</strong>
│       │   ├── AboutUsPage.js
│       │   ├── ArtistList.js
│       │   ├── ArtistPage.js
│       │   ├── BuyHomePage.js
│       │   ├── Cart.js
│       │   ├── PostFormPage.js
│       │   ├── PostsListPage.js
│       │   ├── ProfilePage.js
│       │   ├── Register.js
│       │   ├── SellArtPage.js
│       │   └── ShowPostPage.js
│       └── serviceWorker.js
├── package-lock.json
└── package.json
</pre>
