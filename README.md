# 概要

私が TypeScript のプロジェクトで採用する設定をメモ代わりに実際のプロジェクト設定として記録したリポジトリです。

# ライブラリの管理

ライブラリは yarn workspaces で管理します。

## 共通のライブラリとして追加

```sh
# プロジェクトルートディレクトリで実行。-Wオプションを付ける
yarn add -W {package-name}

# --devオプションも利用可能
yarn add -W --dev {package-name}
```

## パッケージを指定して追加

```sh
# 各パッケージのディレクトリに移動してyarn add
cd packages/{local-package-name}
yarn add {package-name}
```

monorepo 内のパッケージを追加する場合は上記コマンドではうまく行かない。
package.json に直接書き加えた後に yarn すると内部でリンクしてくれるが、このやり方が正しいかは不明。

# 開発

## 開発モードで立ち上げ

```
lerna run dev --parallel
```
