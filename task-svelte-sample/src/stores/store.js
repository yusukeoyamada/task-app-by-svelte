import { writable } from "svelte/store";

// ここで状態を保存する変数を定義
  // writableにより、状態が保存された変数の値を取得・更新できるように
export const toDoItems = writable([
  {text: 'ゴミ出し', status: true},
  {text: 'プログラミング学習', status: false},
  {text: '友達に連絡', status: false}
]);
