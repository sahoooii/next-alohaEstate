# next-alohaEstate <br />Build vacation rental Full-Stack App with Next.js 14+

## 🛠 Tech Stack

![Next.js](https://img.shields.io/badge/next.js@14.2.13-000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript@5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Mongo DB](https://img.shields.io/badge/mongodb-00800?style=for-the-badge&logo=mongodb&logoColor=white)
![Zod](https://img.shields.io/badge/zod@3.23.8-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
<br />
![shadcn/ui](https://img.shields.io/badge/-shadcn/ui-000?style=for-the-badge&logo=shadcn/ui&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS@3.4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
<br />
![Clerk](https://img.shields.io/badge/clerk@5.6.4-764ABC?style=for-the-badge&logo=clerk&logoColor=white)
![Stripe](https://img.shields.io/badge/stripe@17.5.0-00457C?style=for-the-badge&logo=stripe&logoColor=white)
![Cloudinary](https://img.shields.io/badge/cloudinary@2.5.1-3448C5?style=for-the-badge&logo=cloudinary&logoColor=fff)

<p>etc...</p>

## Link

[🏝️ Aloha Estate](https://next-aloha-estate.vercel.app)

## Demo

![Image](https://github.com/user-attachments/assets/4cf39a7d-4964-4112-9172-1d9a643c4aee)

<br />

## What is this project?

**(EN)**

**Aloha Estate** is a full-stack vacation rental application inspired by Airbnb, built with **Next.js** and **TypeScript**. This platform helps users discover the perfect property for their next stay in Hawaii.

The UI is mainly designed using **shadcn/ui** and **Tailwind CSS**, and this project marks my first original full-stack build with Next.js. Thanks to shadcn/ui, I was able to create the clean and modern design I had envisioned.

Despite its simple look, the app includes all the essential features to make your vacation rental search smooth and enjoyable. You can:

- Search for properties by **category** or **keyword**

- Save your **favorite listings**

- **Message** property owners directly, and with chat

- Manage your own **listed** properties and **bookings**

- Integrated **Stripe** for secure and smooth online payments

I implemented many functionalities in this project, so I hope you’ll take a look and enjoy exploring it!
<br />
<br />

### ⚠️ Note:

This project uses Next.js version 14.2.13 to maintain compatibility and stability.<br >
Some security alerts may appear due to indirect dependencies from react-scripts or legacy packages. <br >
These do not affect core functionality and are acknowledged for future upgrade plans.

**(JP)**

**Aloha Estate** は、**Next.js** と **TypeScript** を使用して構築した Airbnb 風のフルスタック・バケーションレンタルアプリです。ハワイでの滞在にぴったりな物件を見つけることができます。

UI は主に **shadcn/ui** と **Tailwind CSS** を使用してデザインされており、このプロジェクトは私にとって Next.js を使った **初のオリジナルフルスタック** 開発になります。shadcn/ui を使用したおかげで、洗練されたデザインを実現できました。

一見シンプルな見た目ですが、バケーションレンタルをスムーズに探すための 十分な機能 を備えています。たとえば：

- カテゴリーやキーワードでの物件検索

- 気になる物件のお気に入り登録

- オーナーへのメッセージ送信、チャット機能

- 物件の予約 & 管理

- Stripe を使用した決済機能

たくさんの機能を実装したので、ぜひ触って楽しんでみてください！
<br />
<br />

### ⚠️ Note:

このプロジェクトでは、互換性と安定性を保つために Next.js のバージョン 14.2.13 を使用しています。<br />
一部のセキュリティアラートは、`react-scripts` やレガシーなパッケージに由来する間接的な依存関係によるもので、アプリケーションの主要機能には影響しません。これらの問題は、今後のアップグレード計画の中で順次対応する予定です。
<br />

## Features

**(EN)**

Here are some of the main features Aloha Estate offers:

✅ **Navigation & Theme**

- User authentication with **Clerk**
- Light / Dark mode toggle
- **Unread message** notification badge

✅ **Home Page**

- Featured picks: 2 guest-favorite properties & 3 latest listings
- Interactive layout using cards and tabs

✅ **All Properties Page**

- **Pagination** for better performance
- Property search by **category** and **keyword**
- **Add to favorites** and remove from favorites

✅ **Property Details Page**

- Swipeable photo gallery
- Full property info (price, description, amenities, etc.)
- Social media sharing
- **Booking calendar** to select stay dates
- **Send a message** to the property owner
- Leave and view **property reviews**

✅ **Checkout Page**

- **Stripe** integration for secure payments

✅ **Bookings Page**

- View booking history with stats
- Manage bookings (cancel, view details)

✅ **Property Management (CRUD)**

- Create, edit, and delete your properties
- Upload images to **Cloudinary**

✅ **Messaging System**

- 1-on-1 chat with property owners
- Mark messages as read / unread
- View chat history and reply anytime

✅ **Profile Settings**

- Edit user profile including profile image

✅ **Admin Dashboard**

- View **user, property, booking stats**
- Monthly booking trends with **charts**

✅ **Design & Deployment**

- Built with shadcn/ui and Tailwind CSS
- **Responsive** design for all devices
- Custom **loading skeletons**
- Deployed on **Vercel**
  <br />
  <br />

**(JP)**

Aloha Estate で現在実装されている主な機能は以下の通りです：

✅ **ナビゲーション＆テーマ設定**

- **Clerk** を使ったユーザー認証
- ライト / ダークモードの切り替え
- **未読メッセージ** の通知バッジ

✅ **ホームページ**

- 人気物件 2 件 ＆ 最新物件 3 件をピックアップして表示
- カードとタブを使ったインタラクティブなレイアウト

✅ **物件一覧ページ**

- **ページネーション** で快適な読み込み
- **カテゴリー・キーワード** で検索対応
- **お気に入り登録・解除** リスティングで管理

✅ **物件詳細ページ**

- スワイプ可能な写真ギャラリー
- 価格、物件の説明、アメニティなどの詳細情報を表示
- SNS で物件を **シェア**
- カレンダーから **宿泊日を選択して予約が可能**
- **オーナーに直接メッセージ送信** & **チャット**
- 物件レビューの **投稿・閲覧・削除**

✅ **チェックアウトページ**

- **Stripe** での決済機能を実装

✅ **予約管理ページ**

- 予約履歴と統計の表示
- **予約のキャンセル・詳細確認**

✅ **物件管理（CRUD）**

- 物件の登録・編集・削除
- **Cloudinary** への画像保存

✅ **メッセージ機能**

- 物件オーナーとの 1 対 1 チャット
- メッセージの既読 / 未読管理
- チャット履歴の確認と返信

✅ **プロフィール設定**

- プロフィール情報の登録、編集（画像も含む）

✅ **管理者/Admin ダッシュボード**

- **ユーザー・物件・予約数の統計**
- **月別予約件数** をグラフで表示

✅ **デザイン＆デプロイ**

- **shadcn/ui** と **Tailwind CSS** で構築
- すべてのデバイスに対応した **レスポンシブデザイン**
- 各ページに対応した **カスタム ローディングスケルトン**
- **Vercel** にデプロイ済み
  <br />
  <br />

## What's Improved? 🧐 (2025/04)

**(EN)**

After the initial development, I made several improvements to enhance UI consistency, user experience, and scalability:

🎨 **UI & Styling**

- Refactored **component-level and page-specific CSS** for better maintainability and consistency
- Improved **loading skeletons** to better match the app's base design and branding

💬 **Messaging System Overhaul**

- Revamped the messaging UI to a **LINE-style chat interface**
- Changed the message structure to be grouped by **userId × propertyId**
- Added **pagination** on the message list for better performance
- Enabled chat redirection from the message list to a dedicated **chat room view**
- Implemented **Optimistic UI** to reflect sent messages instantly without delay

🛠️ **Architecture & Functionality**

- Switched from email-style messaging to a **real-time chat-like experience**
- Improved message filtering logic by grouping chats by both user and property ID, resulting in more accurate and context-aware message management.

👥 **Added Dummy Users**

- Created **three dummy accounts** (including an admin user) to allow viewers to explore the full functionality without needing to sign up.
- All features can be tested directly by logging in with these pre-configured accounts.
  <br />
  <br />

**(JP)**

初期開発後、UI の統一性やユーザー体験の向上、拡張性を意識して以下のような改善を行いました：

🎨 **UI・スタイリングの改善**

- **ページ単位やコンポーネントの CSS を整理・修正**し、保守性と全体的な統一感を向上
- ページローディング時に表示される **スケルトンデザインをアプリ全体の雰囲気に合わせて最適化**

💬 **メッセージ機能の大幅改修**

- メッセージ UI を **LINE 風のチャットスタイル** に刷新
- メッセージの構造を **userId × propertyId** 単位でグループ化
- メッセージ一覧に **ページネーション** を追加し、表示速度を改善
- メッセージ一覧ページから、該当のチャットルームに **遷移できるように実装**
- メッセージ送信後、即座に画面に反映される **Optimistic UI を実装**

🛠️ **アーキテクチャ・機能の見直し**

- 従来のメール通知スタイルから、**リアルタイム風チャットスタイル** に刷新
- ユーザー ID と物件 ID の両方でメッセージをグルーピングし、やりとりの文脈が明確になることで、メッセージ管理の精度を大きく向上

👥 **ダミーユーザーの追加**

- ユーザーがサインアップすることなく、全機能を体験できるよう、 **3 人のダミーユーザー**（管理者を含む）を作成
- このアカウントを使用することにより、すぐにアプリのすべての機能を試セルことが可能

<br />

## Usage 🚀

### Prerequisites

- Next.js 14+
- Node.js version 18 or higher

### Setup

### 1. 📌 Required Accounts

- **MongoDB Atlas**: Create a database and obtain your MongoDB URI →&nbsp; [Sign up](https://www.mongodb.com/cloud/atlas/register)
- **Stripe**: Create an account and obtain your API keys → &nbsp; [Sign up](https://dashboard.stripe.com/register)
- **Cloudinary**: For image uploads → &nbsp; [Sign up](https://cloudinary.com)
- **Clerk**: For user authentication → &nbsp; [Sign up](https://clerk.com)

<br />

### 2. 🔧 Environment Variables

This project uses two environment files for separation of concerns:

- `.env.local`: contains **frontend and authentication-related** variables
- `.env`: contains **backend, database, media, and payment-related** variables

Make sure to rename the provided sample files as follows:

- `exampleLocal.env` → `.env.local`
- `example.env` → `.env`

<br />

`.env.local` – **For Frontend & Clerk Auth**

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=ADD_YOUR_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=ADD_YOUR_CLERK_SECRET_KEY

NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/profile/create
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/profile/create

# Update this after deployment
NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000

```

✅ `NEXT_PUBLIC_ `prefix is used for variables that need to be accessed on the client side (browser).

<br />

`.env` – **For Backend, DB, Cloudinary, Stripe, Admin IDs**

```
MONGODB_URI=ADD_YOUR_MONGO_URI

CLOUDINARY_CLOUD_NAME=ADD_YOUR_CLOUD_NAME
CLOUDINARY_API_KEY=ADD_YOUR_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=ADD_YOUR_CLOUDINARY_API_SECRET

# For admin role logic – same values, split for frontend and server-side usage
NEXT_PUBLIC_ADMIN_USER_ID=SET_YOUR_ADMIN_USER_ID
NEXT_PUBLIC_ADMIN_TEST_USER_ID=SET_YOUR_ADMIN_TEST_USER_ID
ADMIN_USER_ID=SET_YOUR_ADMIN_USER_ID
ADMIN_TEST_USER_ID=SET_YOUR_ADMIN_TEST_USER_ID

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=ADD_YOUR_PUBLIC_STRIPE_PUBLISHABLE_KEY_SECRET
STRIPE_SECRET_KEY=ADD_YOUR_PUBLIC_STRIPE_SECRET_KEY

```

ℹ️ This app supports two admin accounts: one for the real admin and another for the test admin user (used in dummy data).
These IDs are stored separately for frontend (`NEXT_PUBLIC_`) and backend usage (`no prefix`) but refer to the **same actual user ID.**

<br />

### 3. 🧩 Key Dependencies

This project utilizes several powerful UI libraries and styling tools:

- [shadcn/ui](https://ui.shadcn.com/)

  Built on top of Tailwind CSS and Radix UI, this library provides beautifully styled, accessible UI components.

  ➡️ No account is needed, but you should install and configure Tailwind CSS beforehand.

  📌 Note: If you're not familiar with `shadcn/ui`, be sure to check their [Getting Started guide](https://ui.shadcn.com/docs/installation).

- [Tailwind CSS](https://tailwindcss.com)

  Utility-first CSS framework used as the foundation for layout and design in this project.

- [React Icons](https://react-icons.github.io/react-icons)

  A simple and convenient way to use popular icon libraries (e.g., Font Awesome, Material Icons) as React components.

  ➡️ No sign-up required.

  <br />

### 4. Run the Application

```
# Install dependencies
npm install

# Run the development server
npm run dev

```

<br />

### 5. Build & Deploy

```
# Create production build
npm run build

```

App is ready to be deployed on platforms like Vercel.
Make sure your environment variables are also set in the Vercel dashboard.

<br />

### 6. 📌 Sample Logins

To skip the hassle of registration, you can log in with one of the dummy users created for testing:

| Role  | Email                 | Password       |
| ----- | --------------------- | -------------- |
| Admin | alohaestate@email.com | alohaestate123 |
| User1 | general1@email.com    | generalUser1   |
| User2 | general2@email.com    | generalUser2   |

➡️ All features can be accessed using these accounts, including property creation, bookings, messaging, etc.

<br />

### 7. Stripe Test Payments 💳

To test the booking and checkout functionality:

1. Go to the property details page
2. Select dates and book the property on calendar
3. On the checkout page, use Stripe's [test card numbers](https://docs.stripe.com/testing#international-cards) like:

```
Card Number: 4242 4242 4242 4242
Expiry: Any future date
CVC: Any 3 digits
ZIP: Any 5 digits
```

➡️ No real transaction will be made. Just enjoy the flow!

<br />

## 📘 Development Notes

**(EN)**

This project underwent a comprehensive refactoring over the course of a month, with a strong focus on stability, security, and a smooth user experience.

**Key areas of improvement included:**

- Redesigning the messaging system from a basic email-style thread to a **LINE-style** real-time chat grouped by user × property.
- Implementing **Optimistic UI** for the chat feature, allowing messages to appear instantly before server confirmation.
- Separating environment variables into `.env` and `.env.local` for clearer management between client-side and server-side values.

This refactoring was more than just technical maintenance—it was a major transformation of the messaging experience and its underlying architecture. Rebuilding the chat feature from scratch, along with UI improvements, gave me valuable hands-on experience in structuring scalable features, managing real-time interactions, and thinking from a user-first perspective. 💬✨

**(JP)**

このプロジェクトは約 1 ヶ月かけて大規模なリファクタリングを行い、安定性・セキュリティ・使いやすさの向上を目指しました。

**主な改善点：**

- メッセージ機能を従来の email 形式から、ユーザー × 物件単位で会話を管理する **LINE 風チャット形式** に再構築。
- メッセージ送信時に即時反映されるよう、**Optimistic UI** を実装。
- クライアント・サーバーで使用する環境変数を `.env` と `.env.local` に分割し、管理を明確化。

今回のリファクタリングは単なるコードの整理、見直しではなく、メッセージ機能を根本から作り直す大きな挑戦でした。チャット方式の再設計と UI の見直しを通じて、リアルタイム処理の設計やスケーラブルな機能の構築、そして「使う人の立場で考える力」を実践的に鍛えることができ、とても有意義な時間となりました。💬✨
