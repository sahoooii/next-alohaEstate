# next-alohaEstate <br />Build vacation rental Full-Stack App with Next.js 14+

<img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=plastic"> <img src="https://img.shields.io/badge/-Typescript-007ACC.svg?logo=typescript&style=plastic"> <img src="https://img.shields.io/badge/-MONGODB-00800.svg?logo=mongodb&style=flat&logoColor=fff"> <img src="https://img.shields.io/badge/-Zod-3E67B1.svg?logo=zod&style=flat&logoColor=fff"> <img src="https://img.shields.io/badge/-Clerk-6C47FF.svg?logo=clerk&style=flat&logoColor=fff"> <img src="https://img.shields.io/badge/-Stripe-008CDD.svg?logo=stripe&style=plastic"> <img src="https://img.shields.io/badge/-Cloudinary-3448C5.svg?logo=cloudinary&style=plastic">

<img src="https://img.shields.io/badge/-Tailwind_CSS-06B6D4.svg?logo=tailwindcss&style=flat&logoColor=ff0"> <img src="https://img.shields.io/badge/-shadcn/ui-000.svg?logo=shadcnui&style=flat&logoColor=fff">
<p>etc...</p>

## Link
[Aloha Estate](https://next-aloha-estate.vercel.app)

## Describe

This project is a full-stack vacation rental app, like an Airbnb built with Next.js and TypeScript. Mainly UI designed using shadcn/ui and Tailwind CSS. This one is my first piece of the Next.js original project.loha Estate is located in Hawaii, and find a perfect property in Hawaii which is you will stay in your next vacation.<br />
shadcn/ui helped me create a sophisticated design which is what I want to create. This app looks simple but it has enough functionality to find your perfect vacation rental. For example, we have a search function, you can search property with category also keywords. And you can save your favorite property on your list. If you have a question, you can message to property's owner. Also, manage own property and your bookings and so on.<br />
I created a lot of functionality in this app, so please browse!

このプロジェクトは、Next.jsとTypeScriptを使用して構築された Airbnbのようなフルスタックのバケーションレンタルアプリです。主に shadcn/uiとTailwind CSSを使用してUIを設計しました。これはNext.jsを使用した初めてのフルスタックオリジナルプロジェクトの作品ですAloha Estateはハワイにあり、次の休暇に滞在するのに最適なハワイの物件を見つけます。<br />
shadcn/uiは、洗練されたデザインを作成するのに役立ちました。このアプリは見た目はシンプルですが、完璧なバケーションレンタルを見つけるのに十分な機能を備えています。例えば検索機能があり、カテゴリーやキーワードで物件を検索できます。お気に入りの物件をリストに保存でたり、質問がある場合は、物件のオーナーにメッセージを送信できます。また、自分の物件や自分の予約などを管理することもできます。<br />
多くの機能を作成したので、ぜひご覧ください。

## Features
Here are some of the current features that Aloha Estate has:
- Nav
	- User authentication with Clerk
	- Change light or dark mode
	- Notification of unread message
- Home
	- Pick three Guest's favorite property
	- Pick two Recent Properties
- All properties page
	- Pagination
	- Property search with category and keywords
	- Add to favorite list and remove it
- Property details page
	- Photos swipe image gallery
	- Check all details of property
	-  Property sharing to social media
	- Pick date on calendar and booking it
	- Message to property's owner
	- Write a property review/See other users reviews
- Checkout page
	- Using Stripe
- Bookings page
	- Show stats of your bookings
	- Manage your bookings(Delete, Check property's detail)
- Property CRUD
	- Save images at Cloudinary
- Message CRUD
	- Message to property's owner
	- Mark as read message and can reply
	- Check your replied message
- Profile CRUD with images
- Admin Management
  - Display stats of users, properties, bookings
  - Chart data of monthly bookings
- Design shadcn/ui and Tailwind
- Responsive design
- Custom loading design
- Deploy on Vercel
- etc...

## src
* [shadcn/ui](https://ui.shadcn.com)
* [React Icons](https://react-icons.github.io/react-icons)
* [Cloudinary](https://cloudinary.com)
* [Clerk](https://clerk.com)
* [Stripe](https://stripe.com/jp)

## Getting Started

### Prerequisites
- Next.js 14+
- Node.js version 18 or higher

- Create a MongoDB database and obtain your MongoDB URI &nbsp; -[ MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a Stripe account and obtain your STRIPE_PUBLISHABLE_KEY and STRIPE_SECRET_KEY &nbsp; -[ Stripe Developer](https://docs.stripe.com/development?locale=ja-JP)
- Create a Cloudinary and obtain your CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET &nbsp; -[ Cloudinary ](https://cloudinary.com)

### Env Variables

Rename the `example.env` file to `.env` and `exampleLocal.env` file to `.env.local` add the following

```
1. example.env file to .env

* Get your MongoDB connection string from your MongoDB Atlas cluster and add it to
MONGODB_URI=ADD_YOUR_MONGO_URI

* Get your Cloudinary cloud name, API key, and API secret from your Cloudinary account and add them to

CLOUDINARY_CLOUD_NAME=ADD_YOUR_CLOUD_NAME
CLOUDINARY_API_KEY=ADD_YOUR_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=ADD_YOUR_CLOUDINARY_API_SECRET

ADMIN_USER_ID=SET_YOUR_ADMIN_USER_CLERK_ID

* Get your Stripe PUBLISHABLE KEY, and SECRET KEY from your Stripe account and add them to

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=ADD_YOUR_PUBLIC_STRIPE_PUBLISHABLE_KEY_SECRET
STRIPE_SECRET_KEY=ADD_YOUR_PUBLIC_STRIPE_SECRET_KEY

```

```
2. exampleLocal.env file to .env.local

* Get your Clerk PUBLISHABLE KEY, and SECRET KEY from your Clerk account and add them to

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=ADD_YOUR_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=ADD_YOUR__CLERK_SECRET_KEY

NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/profile/create
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/profile/create

# NEXT_PUBLIC_DOMAIN - change url, after deploy
NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000

```

### Install Dependencies
```
npm install
```

### Run the Development Server
```
npm run dev
```

Open http://localhost:3000 with your browser to see the result.
