<script>
	import ToDoInputForm from "./lib/ToDoInputForm.svelte";
  import ToDoList from "./lib/ToDoList.svelte";

  let nameEntered = false

  let lastName = "";
  let firstName = "";

  // リアクティブ宣言「$:」を使用して
  // lastName・firstNameとfullNameを同期させる
    // リアクティブは、代入がトリガーに。代入により、その変更をコンパイラに教える
  $: fullName = lastName + " " + firstName;

  function handleSubmit() {
    if (lastName && firstName) {
      nameEntered = true
    }
  };
</script>

<main>
  {#if nameEntered}
    <h1>タスクリストアプリケーションへようこそ、{fullName}さん!</h1>
    <ToDoInputForm userName={fullName}/>
    <ToDoList />
  {:else}
    <h1>タスクリストアプリケーションへようこそ!</h1>
    <h3>名前を入力してください。</h3>

    <!-- フォームは、デフォルトの動作として、form要素に送信先が指定されていない場合、
    現在のURLに対してフォームの内容を送信。
    現在のURLに対してフォームの送信が行われると、ページが自動的にリロードされてしまう。
    この動作を防ぐために、「event.preventDefault()」を走らせる。 -->
    <form on:submit|preventDefault={handleSubmit}>

      <!-- 「bind:value」により、input要素に入力される値は、{lastName}や、{firstName}変数に紐付けられる。
      この紐付けにより、データを双方向で同期させることができる。 -->
        <!-- ユーザーが入力要素の値を変更すると、それに応じて値が更新される -->
      <div>
        <input bind:value={lastName} type="text" placeholder="姓" required>
      </div>
      <div>
        <input bind:value={firstName} type="text" placeholder="名" required>
      </div>
      <button type="submit">タスク管理を始める</button>
    </form>
  {/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 450px;
		margin: 0 auto;
	}
</style>
