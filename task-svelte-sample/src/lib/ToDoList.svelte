<script>
  import { toDoItems } from "../store.js"
  import { fade, scale } from "svelte/transition"

  function removeFromList(i) {
    // Auto subscriptionを使うと、$toDoItemsのように、状態の変数の前に$を付け加えるだけで、
    // 自動的に変数の状態変化の通知を受け取ることが
    $toDoItems.splice(i, 1)
    $toDoItems = $toDoItems
  }
</script>

{#each $toDoItems as item, index}
  <div class="toDoItems" in:scale out:fade="{{ duration: 500 }}">
    <!-- 「bind:checked」により、statusをチェックボックスが選択される度に切り替え -->
    <input bind:checked={item.status} type="checkbox">
    <!-- statusの値がtrueであれば、<span>要素のクラスがcheckedになり、
    ユーザーがチェックしたタスクに取り消し線のCSSが適用される -->
    <span class:checked={item.status}>{item.text}</span>
    <button on:click={() => removeFromList(index)}></button>
  </div>
{/each}

<style>
  .checked {
    text-decoration: line-through;
  }
  .toDoItems {
    text-align: left;
  }
</style>
