import "./styles.css";

//定義 変数名「onClickAdd」
const onClickAdd = () => {
  // テキストボックスに入力された値を、定義した変数に格納する
  // 「getElementById("id名").value」指定したid名が持つ値を指定する
  const inputText = document.getElementById("add-text").value;
  //テキストボックスに入力されたものが変数に格納された後、値を空文字にする
  document.getElementById("add-text").value = "";
  //変数「inputText」に入っているかアラートをだして確認
  // alert(inputText);

  // //liタグを生成する
  // const li = document.createElement("li");

  // //divタグを生成する
  // //「createElement」HTMLの要素を作る
  // const div = document.createElement("div");
  // //divタグにクラス名をつける
  // //「className」class名を付与する
  // div.className = "list-row";

  // //pタグを生成する
  // const p = document.createElement("p");
  // //生成したpタグの中にテキストボックスで入力された文字列を入れる
  // //「innerText」<開始タグ>と<終了タグ>に内包されたテキストを指す
  // p.innerText = inputText;

  // //button（完了）タグ生成
  // const complateButton = document.createElement("button");
  // complateButton.innerText = "完了";
  // complateButton.addEventListener("click", () => {
  //   //押された完了ボタンの祖先要素にあるliタグを未完了リストから削除
  //   deleteFromIncompleteList(complateButton.closest("li"));
  //   // const complateTarget = complateButton.closest("li");
  //   // document.getElementById("incomplate-list").removeChild(complateTarget);

  //   //完了リストに追加する要素
  //   //新しく「addTarget」を定義し、そこに指定した親要素を取得
  //   const addTarget = complateButton.closest("div");
  //   //新しく「text」を定義、pタグ直下の要素（テキスト）を取得
  //   //「firstElementChild」要素の最初の子要素を取得
  //   const text = addTarget.firstElementChild.innerText;
  //   //p以下を初期化
  //   //「textContent」特定のノードに対してノード内のテキストを文字列で取得
  //   addTarget.textContent = null;

  //   // liタグを生成
  //   const li = document.createElement("li");
  //   // pタグを生成
  //   const p = document.createElement("p");
  //   p.innerText = text;
  //   //buttonタグの生成
  //   const backButton = document.createElement("button");
  //   backButton.innerText = "戻す";
  //   //戻すボタンにクリックイベントを付与
  //   backButton.addEventListener("click", () => {
  //     //押された「戻す」ボタンの祖先要素（liタグ）を完了リストから削除
  //     //定義「deleteTarget」に祖先要素（liタグ）を指定
  //     const deleteTarget = backButton.closest("li");
  //     //「complate-list」タグから「定義：deleteTarget」のものを削除
  //     document.getElementById("complate-list").removeChild(deleteTarget);

  //     // テキストを取得
  //     // 戻すボタンの親要素（divタグ）の最初の要素（pタグ）のテキストを取得
  //     const text = backButton.parentNode.firstChild.innerText;
  //     console.log(text);

  //     //
  //   });

  //   // liタグ・divタグの子要素に各要素を設定
  //   addTarget.appendChild(p);
  //   addTarget.appendChild(backButton);
  //   li.appendChild(addTarget);

  //   // 完了リストに追加する
  //   document.getElementById("complate-list").appendChild(li);
  // });

  // //button（削除）タグ生成
  // const deleteButton = document.createElement("button");
  // deleteButton.innerText = "削除";
  // //クリックした時の処理
  // deleteButton.addEventListener("click", () => {
  //   deleteFromIncompleteList(deleteButton.closest("li"));
  //   //「parentNode」親の要素を取得する
  //   // const deleteTarget = deleteButton.parentNode;
  //   //「slosest」直近に存在する祖先要素（もしくは自分自身）を取得
  //   // const deleteTarget = deleteButton.closest("li");
  //   //「removeChild」指定した子ノード（開始タグ〜終了タグの間）を削除する
  //   // document.getElementById("incomplate-list").removeChild(deleteTarget);
  // });

  // // liタグの中にdivタグを入れる
  // //「appendChild」特定の親要素の中に要素を追加する
  // li.appendChild(div);
  // //divタグの中にpタグを入れる
  // div.appendChild(p);
  // //divタグの中にbuttonタグ（完了）を入れる
  // div.appendChild(complateButton);
  // //divタグの中にbuttonタグ（削除）を入れる
  // div.appendChild(deleteButton);

  // //未完了リストに生成したliタグを追加
  // document.getElementById("incomplate-list").appendChild(li);

  //作成した関数を入れ込む（引数はinputText）
  createIncomplateList(inputText);
};

// 未完了リストから指定の要素を削除
//「target」を引数とし、指定する
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};

//未完了リストに追加する関数
//渡す引数のみが違うので「text」を引数として指定する
const createIncomplateList = (text) => {
  //必要なタグを生成（li、div(class="list-row")、p(テキスト)、button（完了）、button（削除））
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  //「inputText」→「text（引数）」に変更
  p.innerText = text;
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  //完了ボタンをクリックしたときの動作を追加（未完了リストから指定の要素を削除、完了リストに指定の要素を追加）
  complateButton.addEventListener("click", () => {
    deleteFromIncompleteList(complateButton.closest("li"));
    const addTarget = complateButton.closest("div");
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // 戻るボタンをクリックしたときの動作を追加（完了リストから指定の要素を削除、テキストをtext定義に格納）
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.closest("li");
      document.getElementById("complate-list").removeChild(deleteTarget);
      const text = backButton.parentNode.firstChild.innerText;
      // 関数を追加（取得したテキストをもとに未完了のTODOにタスク欄を作成）
      createIncomplateList(text);
    });
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    li.appendChild(addTarget);
    document.getElementById("complate-list").appendChild(li);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  //削除ボタンをクリックした時の処理（未完了リストから指定の要素を削除）
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.closest("li"));
  });
  //追加する要素（li>div>p,button,button）を作成
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);
  //上記で作成した要素を未完了リストに追加
  document.getElementById("incomplate-list").appendChild(li);
};

document
  // 「getElementById」指定したid値を持つ要素をElementオブジェクトとして返すメソッド
  .getElementById("add-button")
  //「addEventListener」マウスによるクリックやキーボードからの入力といった様々なイベント処理を実行するメソッド
  .addEventListener("click", () => onClickAdd());
