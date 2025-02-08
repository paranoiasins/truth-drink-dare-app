import React, { useState, useEffect } from 'react';
import './App.css';

/* ▼ 4つのモードに分けたお題一覧 */
export const defaultPrompts = {
  normal: [
    { text: "好きな食べ物は？" },
    { text: "好きな四字熟語は？" },
    { text: "座右の銘は？" },
    { text: "最近ハマっている趣味は？" },
    { text: "休みの日は何して過ごす？" },
    { text: "もし、宝くじが当たったら？" },
    { text: "目玉焼きにはしょうゆ？　それともソース？" },
    { text: "一生に一度でいいからやってみたいことってある？" },
    { text: "タイムマシーンがあったら、過去と未来どっちに行く？" },
    { text: "明日、もし地球が終わるとしたら何をする？" },
    { text: "子どもの頃の夢は何だった？" },
    { text: "朝起きて最初にすることは？" },
    { text: "ストレス解消法を教えて" },
    { text: "一番仲の良い友達とはどんな関係？" },
    { text: "何歳のときが一番楽しかった？" },
    { text: "よく観るテレビ番組やYouTubeチャンネルは？" },
    { text: "最近観た映画・ドラマで面白かったものは？" },
    { text: "家族構成を簡単に紹介して" },
    { text: "今ハマっている音楽やアーティストは？" },
    { text: "無人島に一つだけ持っていくなら？" },
    { text: "いま一番欲しいものは？" },
    { text: "好きな季節とその理由は？" },
    { text: "自分の長所は何だと思う？" },
    { text: "自分の短所は何だと思う？" },
    { text: "人から「意外だね」と言われることは？" },
    { text: "小さい頃に好きだったキャラクターは？" },
    { text: "一番最近あった小さな幸せは？" },
    { text: "よく使うスマホアプリは？" },
    { text: "もし明日急に有名人になったら何をする？" },
    { text: "いま一番やりたいことは？" },
    { text: "苦手な食べ物はある？" },
    { text: "朝型？夜型？" },
    { text: "最近爆笑した出来事は？" },
    { text: "友達や家族にも言っていない秘密はある？" },
    { text: "やってみたい習い事やスキルはある？" },
    { text: "よく見る夢はどんな内容？" },
    { text: "一番好きなスポーツや運動は？" },
    { text: "行ってみたい国や場所は？" },
    { text: "ちょっと自慢できる特技は？" },
    { text: "自分を動物に例えるとしたら？" },
    { text: "これまでに飼ったことのあるペットは？" },
    { text: "得意な料理や手料理はある？" },
    { text: "一番好きな飲み物は？" },
    { text: "周囲には隠してるけど地味に好きなものは？" },
    { text: "好きな芸能人やアイドルは？" },
    { text: "いまイチオシの漫画・アニメは？" },
    { text: "幸せを感じる瞬間ってどんなとき？" },
    { text: "もし前世があるなら何だったと思う？" },
    { text: "人にはあまり理解されないけど自分は大好きなものは？" },
    { text: "スマホのホーム画面の壁紙は何？" },
    { text: "一番苦手な家事は？" },
    { text: "子どもの頃のあだ名は？" },
    { text: "最近ちょっとだけ後悔していることは？" },
    { text: "「これは人に言いにくい…」と思う自分のクセは？" },
    { text: "自分の身体や性格で、ちょっとコンプレックスはある？" },
    { text: "今までにやってしまった最大の失敗談は？" },
    { text: "過去に誰にも言えない嘘をついたことは？" }
  ],
  buchake: [
    { text: "一番恥ずかしい失敗談は？" },
    { text: "人に言いづらいコンプレックスはある？" },
    { text: "周囲にバレてないけど実はやったことがある悪いことは？" },
    { text: "最近こっそり泣いた理由は？" },
    { text: "今までで一番大きく嘘をついた瞬間は？" },
    { text: "実は人には隠している癖や習慣は？" },
    { text: "これだけは親にも知られたくない…と思う秘密は？" },
    { text: "人にはあまり言えない苦手な人のタイプは？" },
    { text: "過去にどうしても許せなかった他人の行動は？" },
    { text: "もし自分が他の誰かに生まれ変われるなら、誰を選ぶ？" },
    { text: "学生時代にやらかした最大のやんちゃは？" },
    { text: "これだけは絶対人に触れられたくない…と思う話題は？" },
    { text: "人生で一番「黒歴史」だと思う出来事は？" },
    { text: "今だから言える、大失恋のエピソードはある？" },
    { text: "友達をやめたくなった瞬間は？" },
    { text: "どうしても消したいSNS投稿や黒歴史はある？" },
    { text: "これまでに口にした中で一番ヒドい暴言は？" },
    { text: "なかなか言い出せないけど苦手な食べ物は？" },
    { text: "過去の恋愛で一番後悔していることは？" },
    { text: "もし自分だけが罪に問われないならやりたい過激な行為は？" },
    { text: "人に理解されないこだわりや趣味は？" },
    { text: "恋人や家族に隠しているコレクションはある？" },
    { text: "実は自分で「性格が悪いな…」と思う部分は？" },
    { text: "今まで付き合った人数を正直に言える？" },
    { text: "「これ以上は無理！」と思った仕事やバイト経験は？" },
    { text: "親にも言えない大きな秘密はある？" },
    { text: "別れた相手に言いたかったけど言えなかった一言は？" },
    { text: "心底どうかしていたと思う買い物の失敗は？" },
    { text: "人前では強がっているけど本当は怖くて仕方ないものは？" },
    { text: "今、こっそり不安を抱えていることは？" },
    { text: "生まれ変わるなら性別は変えたい？変えたくない？" },
    { text: "自分以外の誰かを本気で妬んだことはある？" },
    { text: "正直、「友達だけど面倒だな…」と思った相手はいる？" },
    { text: "今までで、もっとも気まずい沈黙を体験したのはどんなとき？" },
    { text: "他人には「変わってるね」と言われるこだわりは？" },
    { text: "冗談でもやってはいけないことをやった経験は？" },
    { text: "隠しておきたい異性とのやり取りやDMはある？" },
    { text: "自分の性格でどうしても直したい部分は？" },
    { text: "かつて片想いをしていた相手に今でも未練はある？" },
    { text: "お金で失敗したエピソードや浪費癖は？" },
    { text: "実は昔、いじめられたorいじめてしまった経験はある？" },
    { text: "親友にも言えない裏の顔はある？" },
    { text: "人に知られたくない恥ずかしいあだ名や呼び名はある？" },
    { text: "思わず「ヤバい」と焦った修羅場体験は？" },
    { text: "今でも恥ずかしく思う子供の頃の思い込みは？" },
    { text: "自分のプライドが傷ついた出来事ってある？" },
    { text: "バレたら怒られそうな不正やズルをしたことある？" },
    { text: "過去に誰かを本気で裏切ったと感じたことはある？" },
    { text: "周囲に隠している推し活や妄想があれば教えて" },
    { text: "「これだけは本当に誰にもバレたくない…」と思う秘密は？" }
  ],
  romance: [
    { text: "今まで告白した人数は？" },
    { text: "甘える派？甘えられたい派" },
    { text: "初恋はいつ？どんな相手だった？" },
    { text: "理想のデートプランは？" },
    { text: "恋愛で一番ときめいた瞬間は？" },
    { text: "浮気はどこからがアウトだと思う？" },
    { text: "好きな人にどんなアプローチをする？" },
    { text: "一番ドキドキしたorする告白のシチュエーションは？" },
    { text: "付き合ってみたい芸能人や有名人は？" },
    { text: "今までの恋愛で一番恥ずかしかった失敗は？" },
    { text: "運命の出会いは信じる？" },
    { text: "理想のキスシチュエーションは？" },
    { text: "相手に求める絶対に譲れない条件は？" },
    { text: "恋人にされて嬉しかったサプライズは？" },
    { text: "遠距離恋愛はできる？やっぱり無理？" },
    { text: "告白されるなら何て言われたい？" },
    { text: "過去の恋人と復縁したいと思ったことはある？" },
    { text: "好きな人の前で緊張してやらかした経験は？" },
    { text: "初デートで重要視するポイントは？" },
    { text: "もし相手の浮気を知ったらどうする？" },
    { text: "相手にされて一番嬉しいスキンシップは？" },
    { text: "恋愛の駆け引きは楽しい？面倒くさい？" },
    { text: "恋人に求める「外見」と「内面」どっちが大事？" },
    { text: "初めて好きな人ができたときの思い出は？" },
    { text: "今でも忘れられない好きだった人はいる？" },
    { text: "カップル間の連絡頻度はどれくらいが理想？" },
    { text: "理想と現実のギャップにショックを受けたことは？" },
    { text: "好きな人にどうやって気持ちを伝える？" },
    { text: "恋人のどんなクセにキュンとくる？" },
    { text: "失恋から立ち直る方法を教えて" },
    { text: "恋愛映画やドラマのような体験をしたことある？" },
    { text: "「これは地雷…」と思う言動は？" },
    { text: "片想いしているとき、どんな行動をとる？" },
    { text: "恋人とのケンカで一番大変だったエピソードは？" },
    { text: "結婚願望はある？理想の結婚相手ってどんな人？" },
    { text: "恋愛で一番嬉しかったサプライズは？" },
    { text: "嫉妬深い？あまりしない？" },
    { text: "今までで一番のロマンチックなシチュエーションは？" },
    { text: "友達の元恋人を好きになったことある？" },
    { text: "恋愛対象になる人の年齢幅は？" },
    { text: "逆に、どういうタイプは恋愛対象外？" },
    { text: "結婚と恋愛は別物？同じ？" },
    { text: "相手に合わせて自分を変えようと思ったことは？" },
    { text: "失恋で大号泣したことはある？" },
    { text: "同棲はアリ？ナシ？" },
    { text: "恋人ができたら周囲にすぐ言う？内緒にする？" },
    { text: "長続きするカップルの秘訣は？" },
    { text: "逆プロポーズはアリ？" },
    { text: "浮気を疑ったとき、まずどうする？" },
    { text: "恋人に直してほしいクセがあったら言える？" },
    { text: "告白してフラれたことはある？そのときの話を教えて" }
    { text: "身近な人の中でタイプの人は？" }
  ],
  r18: [
    { text: "これまでで一番ドキドキした夜の思い出は？" },
    { text: "秘密の妄想やファンタジーはある？" },
    { text: "初めて大人の雰囲気になったときのエピソードは？" },
    { text: "自分の身体で好きなパーツと嫌いなパーツは？" },
    { text: "今までに経験した中で、一番印象に残っているシチュエーションは？" },
    { text: "好みの下着や服装のタイプは？" },
    { text: "ロマンチックな演出と刺激的な演出、どっちが好き？" },
    { text: "いわゆる「フェチ」はある？" },
    { text: "雰囲気を盛り上げるために準備していることは？" },
    { text: "相手に言われて一番恥ずかしかったセリフは？" },
    { text: "好きな体位やシチュエーションはある？" },
    { text: "照れ隠しによくやってしまう行動は？" },
    { text: "大人のおもちゃを使ったことはある？興味はある？" },
    { text: "理想のムード作りって具体的にどんな感じ？" },
    { text: "過去に失敗してしまった夜のエピソードは？" },
    { text: "自慰行為の頻度は？" },
    { text: "好きな香りやアロマはある？" },
    { text: "相手にどんなランジェリーを身につけてほしい？" },
    { text: "いちばん雰囲気が盛り上がったのはどんなシチュ？" },
    { text: "性行為で失敗した話はある？" },
    { text: "オフィスや車など、刺激的な場所に憧れる？" },
    { text: "恋人の前で大胆になれるタイプ？" },
    { text: "体型やルックスの好みは？" },
    { text: "一晩中一緒に過ごしてみたい理想のシチュエーションは？" },
    { text: "過去に「もう限界！」と思った体験は？" },
    { text: "声の好みはある？" },
    { text: "一度試してみたいプレイや場所は？" },
    { text: "過去に人には言えない失敗をしたことある？" },
    { text: "夜の服装や下着を選ぶ基準は？" },
    { text: "相手のどんな仕草に色気を感じる？" },
    { text: "お酒が入ると大胆になる？それとも恥ずかしがり屋？" },
    { text: "恋人と一緒に観たい大人っぽい映画や動画はある？" },
    { text: "ソフトSMやコスプレなど、興味はある？" },
    { text: "あえて秘密にしている性癖はある？" },
    { text: "経験人数を正直に言える？" },
    { text: "「まだこれは試したことないけど…」と思うものは？" },
    { text: "身体の相性ってどれくらい重視する？" },
    { text: "過去にマニアックなプレイを要求されたことは？" },
    { text: "理想のシチュエーションはロマンチック派？スリル派？" },
    { text: "相手から言われて思わず胸が高鳴った一言は？" },
    { text: "寝るときはパジャマ？それとも何も着ない？" },
    { text: "雰囲気を出すために音楽やキャンドルは使う？" },
    { text: "二人きりで過ごす休みの日、どんなことをしたい？" },
    { text: "「実はここでしてみたい…」と秘かに思う場所は？" },
    { text: "夜を盛り上げるための小道具は用意する派？" },
    { text: "一度だけ「危ない…！」と思ったハプニングがあれば教えて" },
    { text: "攻める派？攻められたいは？" },
    { text: "ワンナイトはあり？" },
    { text: "実は身近な人でしてみたいって思う人は？" },
    { text: "実は苦手かもしれないけど言いにくいことは？" },
    { text: "自分がリードしたい派？されたい派？" },
    { text: "大人の関係で一番大事だと思うものは？" }
  ]
};


/* ▼ モードごとの挑戦用お題 */
export const defaultChallenges = {
  normal: [
    { text: "腕立て伏せを10回する" },
    { text: "好きな芸能人のモノマネを披露する！" },
    { text: "30秒、全力でダンスを踊る" },
    { text: "両隣の人に変なニックネームをつける" },
    { text: "目を閉じて変顔を30秒間キープする" },
    { text: "好きな食べ物を情熱的に語る" },
    { text: "みんなに向かって褒め言葉を言い続ける" },
    { text: "机の上に頭を乗せて30秒間おとなしくする" },
    { text: "右隣の人と握手して褒める" },
    { text: "隣の人の真似を1分間し続ける" },
    { text: "5秒以内に即興で短い歌を作って歌う" },
    { text: "10秒以内に全員にハイタッチする" },
    { text: "変な声で自己紹介しなおす" },
    { text: "好きな動物の鳴き声を全力で真似する" },
    { text: "10秒全力ぶりっこ" },
    { text: "自分の好きなスポーツを全力で実況する" },
    { text: "好きなアニメのキャラになりきって会話する" },
    { text: "左隣の人と10秒間見つめ合う" },
    { text: "3つのウソと1つの本当の話をする（みんなで当てる）" },
    { text: "スマホの予測変換で一番上に出てくる単語を3つ発表する" },
    { text: "5秒以内に好きな食べ物を10個言う" },
    { text: "片足立ちで1分間バランスを取る" },
    { text: "1分間だけ全力でイケメン/美女になりきる" },
    { text: "ドラえもんの声で30秒間会話する" },
    { text: "次のターンまで語尾に「にゃ」をつけて話す" },
  ],
  buchake: [
    { text: "過去の黒歴史を1つ暴露して" },
    { text: "10秒、全力で変顔をキープ" },
    { text: "最近の失敗談を全力で語る" },
    { text: "一番恥ずかしかった出来事を再現する" },
    { text: "学生時代のあだ名を大声で言う" },
    { text: "30秒、全力で自己否定ギャグをする" },
    { text: "友達にこっそり言っていた悪口を暴露する" },
    { text: "最後に泣いた理由を全員に説明する" },
    { text: "一番後悔している買い物について語る" },
    { text: "最も気まずかった沈黙の瞬間を再現する" },
    { text: "直近のLINE履歴を30秒読み上げる" },
    { text: "最近の恋愛失敗談を全員に共有する" },
    { text: "10秒間で自分の長所を5つ言う" },
    { text: "誰にも言えない秘密を1つ暴露する" },
    { text: "スマホの検索履歴を3つ発表する" },
    { text: "一番面倒だと思う友達の特徴を語る" },
    { text: "子供の頃の恥ずかしい思い込みを共有する" },
    { text: "人生で一番やらかしたことを発表する" },
    { text: "周囲に隠している趣味を発表する" },
    { text: "最近のムカついた出来事を全力で話す" },
    { text: "最近サボったことを正直に言う" },
    { text: "学生時代に一番怒られた理由を語る" },
    { text: "一番無駄だったと思う経験を話す" },
    { text: "過去にやったイタズラの中で最悪だったものを話す" },
    { text: "友達との喧嘩の理由を一人二役で再現する" },
  ],
  romance: [
    { text: "その場にいる異性の誰かに即興でラブレターを読む！" },
    { text: "好きな人に電話をかけるフリをしてセリフを言う！" },
    { text: "右隣の人に向かって告白の練習をする" },
    { text: "過去の恋愛失敗談を語る" },
    { text: "初恋の相手の特徴を再現する" },
    { text: "理想のデートプランを全力で語る" },
    { text: "好きな芸能人に向けたラブレターを読む" },
    { text: "恋愛でやらかしたエピソードを語る" },
    { text: "左隣の人に『好きです！』と大声で言う" },
    { text: "自分の恋愛の黒歴史を1つ暴露する" },
    { text: "最近キュンとした瞬間を全力で一人二役で再現する" },
    { text: "過去の告白エピソードを詳細に語る" },
    { text: "理想の恋人像を30秒語る" },
    { text: "一番ロマンチックだった瞬間を暴露する" },
    { text: "恋人にされて嬉しかったサプライズを語る" },
    { text: "恋愛対象外のタイプを発表する" },
    { text: "恋人に言いたかったけど言えなかった一言を語る" },
    { text: "好きな人への未練を暴露する" },
    { text: "過去の恋愛で後悔したことを語る" },
    { text: "初デートでやらかしたエピソードを語る" },
    { text: "一番緊張した告白の瞬間を再現する" },
    { text: "恋人に求める絶対に譲れない条件を語る" },
    { text: "好きな人に言われたいセリフを発表する" },
    { text: "過去の恋愛で一番嬉しかった瞬間を語る" },
    { text: "自分の恋愛観を語る" },
  ],
  r18: [
    { text: "セクシーなポーズで写真を撮らせる！" },
    { text: "エロい声で自己紹介をする！" },
    { text: "相手の耳元でささやく（架空の内容でもOK）" },
    { text: "好きな下着の色を発表する" },
    { text: "いわゆる『フェチ』を暴露する" },
    { text: "初めて大人の雰囲気になったときのエピソードを語る" },
    { text: "好みのボディパーツを発表する" },
    { text: "セクシーなダンスを披露する" },
    { text: "相手のどこに色気を感じるか語る" },
    { text: "最近ドキドキした瞬間を再現する" },
    { text: "大人の妄想を1つ暴露する" },
    { text: "過去に体験した一番大胆な瞬間を語る" },
    { text: "一度やってみたい大人の遊びを語る" },
    { text: "自分の好きな香りを発表する" },
    { text: "過去に経験した刺激的な場所について語る" },
    { text: "好きな体位を発表する（あれば）" },
    { text: "一番印象に残った夜のエピソードを語る" },
    { text: "恥ずかしかった夜の失敗談を語る" },
    { text: "相手にされたら嬉しいスキンシップを語る" },
    { text: "恋人との夜の習慣について語る" },
    { text: "大人のおもちゃを使った経験を語る（興味でもOK）" },
    { text: "好きな香りのシチュエーションを語る" },
    { text: "理想のムード作りについて語る" },
    { text: "自分の体で自信のある部分を発表する" },
    { text: "最もドキドキした夜の瞬間を語る" },
  ]
};


/* ▼ モードごとの罰ゲーム */
export const punishments = {
  normal: [
    "もう一杯飲む",
    "一発芸を披露する",
    "好きな人のイニシャルを言う",
    "スマホの壁紙をみんなに見せる",
    "左隣の人に肩を揉んでもらう",
    "10秒間、両手を上げて『バンザイ』し続ける",
    "全員に向かって『愛してる』と叫ぶ",
    "変顔をして自撮りし、それを全員に見せる",
    "10秒間、床に寝転がってゴロゴロする",
    "一番イケてるポーズをイケてる顔でする",
    "好きな食べ物を情熱的に歌にして歌う",
    "隣の人に好きなところを3つ言う",
    "一発ギャグをする",
    "今いる人の誰かに10秒間褒め言葉を言う",
    "変な歩き方で部屋を1周する",
    "5秒間、全力で叫ぶ（内容は自由）",
    "全員にハイタッチして『ありがとう！』と叫ぶ",
    "自分の小学生時代の夢を発表する",
    "次のターンまで片言で話す",
    "1分間、好きなアニメキャラの声真似をする",
    "両手をバタバタさせて鳥の真似をする",
    "1分間だけ全員を『先生』と呼ぶ",
    "みんなの前で好きなダンスを踊る",
    "両手で顔を隠して『恥ずかしい！』と叫ぶ",
    "みんなに向かって『僕or私が一番えらいのだ！』と宣言する"
  ],
  buchake: [
    "好きな人とのLINEメッセージを声に出して読む",
    "スマホの予測変換で一番上に出てくる単語を3つ発表する",
    "最近泣いた理由を全員に説明する",
    "最後に見た夢の内容を詳細に話す",
    "最近恥ずかしかった失敗を再現する",
    "誰にも言っていない秘密を1つ暴露する",
    "10秒間、全員に向かって変な声で自己紹介",
    "直近で後悔している行動を語る",
    "誰かに向かって恥ずかしいニックネームをつける",
    "学生時代の黒歴史を語る",
    "最近の恋愛エピソードを1つ話す",
    "周囲に隠しているコレクションを発表する",
    "過去の最大の後悔を語る",
    "人に言いづらい癖や習慣を発表する",
    "自分の性格で一番直したい部分を発表する",
    "最近こっそり泣いた理由を話す",
    "これまでに経験した最大の修羅場を話す",
    "自分のプライドが傷ついた瞬間を語る",
    "人に知られたくない趣味を発表する",
    "親にも言えない秘密を語る",
    "一番気まずかった瞬間を再現する",
    "直近でイラッとしたことを語る",
    "誰かに向かって感謝の気持ちを全力で伝える",
    "自分で『性格悪いな』と思った瞬間を暴露する"
  ],
  romance: [
    "全員の中で一番魅力的だと思う人を発表する",
    "最近キュンとした瞬間を話す",
    "過去の恋人に送りたいメッセージを読む",
    "理想のデートプランを発表する",
    "恋人に言いたかったけど言えなかったことを語る",
    "最近の恋愛エピソードを全員に共有する",
    "過去の恋愛で一番恥ずかしかった失敗を語る",
    "初恋の相手について語る",
    "恋人に求める絶対条件を発表する",
    "過去の恋愛で一番嬉しかった瞬間を語る",
    "最近の恋愛でやらかしたことを話す",
    "一番ロマンチックだった瞬間を再現する",
    "告白で失敗した経験を語る",
    "片思いしていた相手に送ったメッセージを再現する",
    "一番嬉しかったサプライズを語る",
    "最近感じた嫉妬の瞬間を語る",
    "恋愛で一番泣いた瞬間を語る",
    "過去の恋人と復縁したいと思ったことがあるか語る",
    "恋人とケンカした理由を話す",
    "自分の恋愛観を全員に語る",
    "恋人に言われて嬉しかった一言を語る",
    "恋人との思い出の場所を語る",
    "初デートの緊張した瞬間を再現する",
    "恋人に求める理想のプレゼントを語る",
    "自分の恋愛のこだわりを語る"
  ],
  r18: [
    "好きな人にラブメッセージを送る",
    "秘密の願望を1つ暴露する",
    "セクシーなポーズを全員に披露する",
    "セクシーな声で『好きです。付き合って、お願い…』と言う",
    "最近の大人の妄想を語る",
    "恥ずかしいフェチを発表する",
    "一番大胆な瞬間を再現する",
    "下着の色を発表する",
    "大人の遊びでやってみたいことを語る",
    "過去の失敗した夜のエピソードを語る",
    "好きなスキンシップを全員に語る",
    "大人の願望を語る",
    "恋人にしてもらいたいことを発表する",
    "最近ドキドキした瞬間を再現する",
    "大人の秘密を1つ暴露する",
    "セクシーなダンスを披露する",
    "恥ずかしかった経験を語る",
    "相手の体で一番好きな部分を発表する",
    "好きな体位を語る",
    "過去に経験した刺激的な場所を語る",
    "自分のセクシーな一面を全員に語る",
    "最近のドキドキ体験を再現する",
    "大人の理想のシチュエーションを語る",
    "一番ドキドキした瞬間を全員に語る",
    "自分の体で一番エロい場所を語る"
  ]
};


function App() {
  // ▼ モード（normal / buchake / romance / r18）
  const [mode, setMode] = useState("normal");

  // ▼ プレイヤー名（初期4つ + α）
  const [players, setPlayers] = useState(["", "", "", ""]);
  // ▼ 現在のターン（有効なプレイヤーのみ対象）
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  // ▼ 真実用のお題（現在表示中）
  const [currentPrompt, setCurrentPrompt] = useState(null);
  // ▼ ゲーム履歴
  const [gameHistory, setGameHistory] = useState([]);
  // ▼ 飲む回数管理（プレイヤー名 → 回数）
  const [drinkCounts, setDrinkCounts] = useState({});
  // ▼ 飲む回数しきい値（3回目から罰ゲーム）
  const punishmentThreshold = 3;
  // ▼ 誰がどの罰ゲーム中か
  const [punishmentAssignments, setPunishmentAssignments] = useState({});
  // ▼ 履歴タブ開閉
  const [historyOpen, setHistoryOpen] = useState(false);

  // ▼ モーダル（ポップアップ）の管理
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupContent, setPopupContent] = useState("");
  // popupType: "truth" / "drink" / "challenge" / "punishment"
  const [popupType, setPopupType] = useState("");

  // ▼ 有効なプレイヤー（空欄以外）
  const activePlayers = players.filter((p) => p.trim() !== "");

  /* ----------------------------------------
   * プレイヤー名入力欄の制御
   * ---------------------------------------- */
  const handlePlayerChange = (e, idx) => {
    const updated = [...players];
    updated[idx] = e.target.value;
    // 最後の欄に何か入力されたら新たに空欄を追加
    if (idx === players.length - 1 && e.target.value.trim() !== "") {
      updated.push("");
    }
    setPlayers(updated);
  };

  /* ----------------------------------------
   * モード別のお題を取得
   * ---------------------------------------- */
  const getAvailablePrompts = () => {
    return defaultPrompts[mode] || [];
  };

  // ランダムにお題を選ぶ
  const pickRandomPrompt = () => {
    const available = getAvailablePrompts();
    if (available.length === 0) {
      return { text: "お題がありません" };
    }
    return available[Math.floor(Math.random() * available.length)];
  };

// 挑戦をモードに基づいて選ぶ
const pickRandomChallenge = () => {
  const challenges = defaultChallenges[mode] || [];
  if (challenges.length === 0) {
    return { text: "挑戦のお題がありません" };
  }
  return challenges[Math.floor(Math.random() * challenges.length)];
};

// 罰ゲームをモードに基づいて選ぶ
const pickRandomPunishment = () => {
  const modePunishments = punishments[mode] || [];
  if (modePunishments.length === 0) {
    return "罰ゲームがありません";
  }
  return modePunishments[Math.floor(Math.random() * modePunishments.length)];
};

  /* ----------------------------------------
   * モード切り替え時にお題を再取得
   * ---------------------------------------- */
  useEffect(() => {
    setCurrentPrompt(pickRandomPrompt());
  }, [mode]);

  /* ----------------------------------------
   * 有効プレイヤー数が変わった場合にインデックスを調整
   * ---------------------------------------- */
  useEffect(() => {
    if (activePlayers.length > 0 && currentPlayerIndex >= activePlayers.length) {
      setCurrentPlayerIndex(0);
    }
  }, [activePlayers, currentPlayerIndex]);

  /* ----------------------------------------
   * 回答ボタン（真実／飲む／挑戦）
   * ---------------------------------------- */
  const handleAnswer = (answerType) => {
    if (activePlayers.length === 0) return; // プレイヤーいない場合はスキップ

    const currentPlayer = activePlayers[currentPlayerIndex];
    const currentCount = drinkCounts[currentPlayer] || 0;

    if (answerType === "truth") {
      // 真実 → 現在のお題をポップアップ表示
      const prompt = currentPrompt || { text: "お題なし" };
      setPopupTitle("真実のお題");
      setPopupContent(prompt.text);
      setPopupType("truth");
      setPopupOpen(true);

    } else if (answerType === "challenge") {
      // 挑戦 → ランダム挑戦をポップアップ表示
      const challenge = pickRandomChallenge();
      setPopupTitle("挑戦！");
      setPopupContent(challenge.text);
      setPopupType("challenge");
      setPopupOpen(true);

    } else if (answerType === "drink") {
      // 飲む → 飲む回数をチェック
      // 2回目まで: 通常の「飲む」ポップアップ
      // 3回目以降: 罰ゲームポップアップ
      if (currentCount >= 2) {
        // 3回目以降 → 罰ゲーム
        const punish = pickRandomPunishment();
        setPopupTitle("罰ゲーム発動！");
        setPopupContent(punish);
        setPopupType("punishment");
        setPopupOpen(true);
      } else {
        // 2回目まで → 普通の「飲む」ポップアップ
        setPopupTitle("飲むを選択");
        setPopupContent("さあ、飲みましょう！");
        setPopupType("drink");
        setPopupOpen(true);
      }
    }
  };

  /* ----------------------------------------
   * モーダルを閉じるときの処理
   * ---------------------------------------- */
  const handleClosePopup = () => {
    setPopupOpen(false);

    if (activePlayers.length === 0) return;

    const currentPlayer = activePlayers[currentPlayerIndex];
    const count = drinkCounts[currentPlayer] || 0;

    // (1) 真実
    if (popupType === "truth") {
      // 履歴に追加
      setGameHistory((prev) => [
                {
          player: currentPlayer,
          prompt: currentPrompt?.text || "お題なし",
          answer: "truth",
          timestamp: new Date().toLocaleTimeString(),
        },
        ...prev,
      ]);
      // お題を新しいものに差し替え
      setCurrentPrompt(pickRandomPrompt());

    // (2) 挑戦
    } else if (popupType === "challenge") {
       // 履歴に追加
       setGameHistory((prev) => [
        {
          player: currentPlayer,
          prompt: popupContent,
          answer: "challenge",
          timestamp: new Date().toLocaleTimeString(),
        },
        ...prev,
      ]);
    // (3) 飲む（通常）
    } else if (popupType === "drink") {
      // 履歴に「飲む」を追加
      setGameHistory((prev) => [
        {
          player: currentPlayer,
          prompt: "飲むを選択",
          answer: "drink",
          timestamp: new Date().toLocaleTimeString(),
        },
        ...prev,
      ]);
      // 飲む回数+1
      const newCount = count + 1;
      setDrinkCounts({ ...drinkCounts, [currentPlayer]: newCount });

      // 3回目に到達したら罰ゲームを割り当て
      if (newCount >= punishmentThreshold && !punishmentAssignments[currentPlayer]) {
        const pun = pickRandomPunishment();
        setPunishmentAssignments({
          ...punishmentAssignments,
          [currentPlayer]: pun,
        });
      }

    // (4) 罰ゲームを選んだ場合（punishment）
    } else if (popupType === "punishment") {
      // 罰ゲーム発動：飲む回数を加算し、毎回新たな罰ゲームを割り当てる
      const newCount = count + 1;
      setDrinkCounts({ ...drinkCounts, [currentPlayer]: newCount });

      // 履歴には「飲む + 罰ゲーム」を記録
      setGameHistory((prev) => [
        {
          player: currentPlayer,
          prompt: `罰ゲーム: ${popupContent}`,
          answer: "punishment",
          timestamp: new Date().toLocaleTimeString(),
        },
        ...prev,
      ]);

      // その都度、新たに罰ゲームを更新（3回目以降は何度でも）
      const pun = pickRandomPunishment();
      setPunishmentAssignments({
        ...punishmentAssignments,
        [currentPlayer]: pun,
      });
    }

    // どの選択肢でも新しいお題を取得
    setCurrentPrompt(pickRandomPrompt());

    // ターンを終了して次のプレイヤーへ
    moveToNextPlayer();

    // モーダル情報をリセット
    setPopupType("");
    setPopupTitle("");
    setPopupContent("");
  };

  /* ----------------------------------------
   * 次のプレイヤーへターン移行
   * ---------------------------------------- */
  const moveToNextPlayer = () => {
    if (activePlayers.length > 0) {
      const nextIndex = (currentPlayerIndex + 1) % activePlayers.length;
      setCurrentPlayerIndex(nextIndex);
    }
  };

  /* ----------------------------------------
   * 飲んだ回数ランキングの生成
   * ---------------------------------------- */
  const sortedDrinkCounts = Object.entries(drinkCounts).sort(
    (a, b) => b[1] - a[1]
  );

  // 順位表示アイコン
  const getRankIcon = (rank) => {
    if (rank === 0) return "🎖";
    if (rank === 1) return "🥈";
    if (rank === 2) return "🥉";
    return `${rank + 1}位`;
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Truth or Drink or Dare</h1>
      </header>

      {/* ▼ プレイヤー名入力 */}
      <div className="players-input card">
        <h2>名前</h2>
        <div className="player-input-grid">
          {players.map((p, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={`プレイヤー${idx + 1}`}
              value={p}
              onChange={(e) => handlePlayerChange(e, idx)}
            />
          ))}
        </div>
      </div>

      {/* ▼ モード選択 (normal/buchake/romance/r18) */}
      <div className="mode-selection card">
        <label>モード： </label>
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="normal">ノーマル</option>
          <option value="buchake">ぶっちゃけ</option>
          <option value="romance">恋愛</option>
          <option value="r18">R18</option>
        </select>
      </div>

      {/* ▼ メインのゲームエリア */}
      <div className="game-area card">
        {activePlayers.length > 0 ? (
          <>
            <h2 className="player-info">
              <span role="img" aria-label="player">👤</span>
              {" "}
              {activePlayers[currentPlayerIndex]} のターン
            </h2>
            <div className="prompt-display">
              <p className="prompt-text">
                {currentPrompt ? currentPrompt.text : "お題を取得中..."}
              </p>
            </div>
            <div className="button-group">
              <button
                className="btn btn-truth"
                onClick={() => handleAnswer("truth")}
              >
                🤞 真実を答える
              </button>
              <button
                className="btn btn-drink"
                onClick={() => handleAnswer("drink")}
              >
                🍺 飲む！
              </button>
              <button
                className="btn btn-challenge"
                onClick={() => handleAnswer("challenge")}
              >
                ⚡ 挑戦！
              </button>
            </div>
          </>
        ) : (
          <p>プレイヤー名を入力してください</p>
        )}
      </div>

      {/* ▼ 飲んだ回数ランキング */}
      <div className="ranking card">
        <h2>飲んだ回数ランキング</h2>
        <ul className="ranking-list">
          {sortedDrinkCounts.map(([player, count], idx) => (
            <li
              key={player}
              className={count >= punishmentThreshold ? "punished" : ""}
            >
              <span className="rank-number">{getRankIcon(idx)}</span>{" "}
              <span className="player-name">{player}</span>
              {`: ${count}回 `}
              {/* 罰ゲームの表示部分を削除 */}
            </li>
          ))}
        </ul>
      </div>

      {/* ▼ ゲーム履歴タブ */}
      <div className="history-tab" onClick={() => setHistoryOpen(!historyOpen)}>
        {historyOpen ? "ゲーム履歴を隠す" : "ゲーム履歴を表示"}
      </div>
      {historyOpen && (
        <div className="history card">
          <h2>ゲーム履歴</h2>
          <ul className="history-list">
            {gameHistory.map((record, i) => (
              <li key={i}>
                <span className="history-time">{record.timestamp}</span>：
                <strong>{record.player}</strong>
                {"  "}
                {record.answer === "truth" && "🤞 "}
                {record.answer === "drink" && "🍺 "}
                {record.answer === "challenge" && "⚡ "}
                {record.answer === "punishment" && "⚠️ "}
                {record.prompt}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ▼ 共通ポップアップ（モーダル） */}
      {popupOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{popupTitle}</h2>
            <p>{popupContent}</p>
            <button className="btn btn-popup-close" onClick={handleClosePopup}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
