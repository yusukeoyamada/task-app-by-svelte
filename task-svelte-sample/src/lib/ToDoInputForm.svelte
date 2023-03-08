<script>
  import { toDoItems } from "../store.js"
  import { onMount } from "svelte"

  // Props(Properties)
    // exportキーワードを使用して変数を宣言するだけで、データを他のコンポーネントに渡すことが
  export let userName

  let newItem = ""
  let newItemInputForm = null

  onMount(() => {
    newItemInputForm.focus()
  })

  function addToList() {
    // Auto subscriptionを使うと、$toDoItemsのように、状態の変数の前に$を付け加えるだけで、
    // 自動的に変数の状態変化の通知を受け取ることが
    $toDoItems = [...$toDoItems, {text: newItem, status: false}]
    newItem = ""
  }
</script>

<!-- bind:thisディレクティブは、渡された変数に要素のDOMノードへの参照を設定 -->
<input bind:value={newItem}  bind:this={newItemInputForm} type="text" placeholder="新しく追加するタスク">
<button on:click={addToList}>追加</button>

<h3>{userName}のタスクリスト</h3>
