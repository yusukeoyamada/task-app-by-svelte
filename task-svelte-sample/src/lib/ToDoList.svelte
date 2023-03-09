<script>
  import { toDoItems } from "../stores/store.js";
  import { fade, scale } from "svelte/transition";

  function removeFromList(i) {
    // 「$」は、「Auto subscription」の役割を担っており、
    // $toDoItemsのように、状態の変数の前に「$」を付け加えるだけで、
    // 自動的に、状態が保存された変数の値の変更を反映してくれるように。
    $toDoItems.splice(i, 1)
    $toDoItems = $toDoItems
  };
</script>

{#each $toDoItems as item, index}
  <div class="toDoItems" in:scale out:fade="{{ duration: 500 }}">
    <!-- 「bind:checked」により、statusをチェックボックスが選択される度に切り替え -->
    <input bind:checked={item.status} type="checkbox">

    <!-- item.statusの値がtrueであれば、<span>要素のクラスがcheckedになり、
    ユーザーがチェックしたタスクに取り消し線のCSSが適用される -->
      <!-- 以下は、右記の代替: 「class="{item.status ? 'checked' : ''}"」 -->
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
