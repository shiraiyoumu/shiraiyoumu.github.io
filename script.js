const menu = [
    { menu: "ハットトリックセット", price:1500 ,shop:"GRILL TOKYO" },    
    { menu: "国産牛100%!!武骨BEEFハンバーグ BENTO", price:1400 ,shop:"BULL`S" },
    { menu: "チャンピオン弁当", price:1700 ,shop:"北海道ジンギスカン Lamb`z" },
    { menu: "温玉とり天丼", price:950 ,shop:"いちや" },
    { menu: "ハブコロール", price:700 ,shop:"HUB" },
    { menu: "ストロベリーバブルワッフル", price:950 ,shop:"ベリーズベリー" },
    { menu: "松坂牛ローストビーフ丼", price:1800 ,shop:"極みフーズ" },
    { menu: "ネギ塩牛タン丼", price:1200 ,shop:"メディトリーナ" },
    { menu: "ケバブサンド", price:800 ,shop:"カッパドキアキッチン" },
    { menu: "相模豚ミックス丼", price:1400 ,shop:"炭火焼我が家のとん丼や" },
    { menu: "スペシャリティコーヒー", price:600 ,shop:"WEEKEND" },
    { menu: "自家製ジェラート", price:450 ,shop:"成田ゆめ牧場" },    
    { menu: "全部のせ丼", price:1800 ,shop:"焼肉里味亭" },   
    { menu: "鮭虎丼", price:1800 ,shop:"鮭虎" },
    { menu: "赤ねこコンボ丼", price:1200 ,shop:"赤ねこ" },
    { menu: "粗挽き牛たん入りハンバーグオムライス", price:1000 ,shop:"ぐぅトラKitchen" },  
    { menu: "蛇口からみかんジュース", price:500 ,shop:"EHIMEみきゃんずキッチン" }, 
    { menu: "トリコチュロス", price:600 ,shop:"FIVE STARS" },    
    { menu: "燻製バターのカヌレ", price:700 ,shop:"燻製キッチンKEMUMAKI・KUN" },
    { menu: "シュラスコMIXイチボプレート",price: 1600 ,shop:"Bear's kitchen" },
    { menu: "黒毛和牛カルビ丼", price:1700 ,shop:"テンズキッチン" },
    { menu: "ポルケッタ", price:1200 ,shop:"コルポデラストレーガ" },
    { menu: "オムライス早矢仕ソース", price:1300 ,shop:"Jigemon" },
    { menu: "骨付き若鶏のコンフィ", price:1400 ,shop:"アンドセジュール" },
    { menu: "チーズタコライス", price:1500 ,shop:"Hungry Drive 1991" },
    { menu: "マルゲリータ", price:1100 ,shop:"PIZZA VAN" },
    { menu: "無添加煮干しのらーめん", price:1000 ,shop:"NOODLESTAND 栗原商店" }, 
    { menu: "ジャークチキンライス", price:1000 ,shop:"ライオン亭" },
    { menu: "キムチチヂミ", price:1300 ,shop:"キッチンカーまろん" },
    { menu: "げんこつコロッケ", price:500 ,shop:"oka-tte" },    
    { menu: "気まぐれハンバーグチキン付き", price:1200 ,shop:"PARLOR ZONO" }, 
    { menu: "餅屋のいちご大福", price:500 ,shop:"湘南しり餅" },
    { menu: "牛たたきと帆立丼", price:1200 ,shop:"宗谷岬間宮堂" },    
    { menu: "台湾風まぜごはん", price:1100 ,shop:"横浜点心屋台 吉清" },    
    { menu: "山椒ポークカレー", price:980 ,shop:"ricocurry" },   
    { menu: "焦がし醤油きのこバーガー", price:1300 ,shop:"BELIEVER IN BURGER" },    
    { menu: "ふわふわローストポークライス", price:1000 ,shop:"KITCHEN REVEL" },
    { menu: "鯖の黒煮アジフライ弁当", price:1200 ,shop:"食堂新" },   
    { menu: "香港風オリジナルワッフルサンド", price:700 ,shop:"Glades Kitchen" },         
    { menu: "炭火焙煎珈琲", price:400 ,shop:"南蛮屋" },      
    // { menu: "魚介豚骨琉球まぜそば", price:1000 ,shop:"M&M" },
    // { menu: "レイソルカリーライス", price:950 ,shop:"日立台カリーぶ" },
    // { menu: "たこザンギ", price:600 ,shop:"小樽飯櫃" },
    // { menu: "チュロス", price:500 ,shop:"Dandy Kitchen" },
    // { menu: "ヘーゼルナッツ香る贅沢チョコバナナクレープ", price:850 ,shop:"ねこもち" },
    // { menu: "ROCKETCHICKEN ベントーBOX", price:1000 ,shop:"ROCKETCHICKEN" },
    // { menu: "全部のせ飯", price:1300 ,shop:"CARNE TOKYO" },
    // { menu: "THE素麺", price:800 ,shop:"そうめん専門甚-JIN-" },
    // { menu: "ローストビーフ（PANINO）", price:1200 ,shop:"ローストビーフ（PANINO）" },
    // { menu: "漁港飯", price:1100 ,shop:"Blue Wood Cafe" },
    // { menu: "九条ネギマヨ京七味しょうゆ", price:700 ,shop:"福篭" },
    // { menu: "DOGTOWN BURGER", price:1600 ,shop:"DOGTOWN" },
    // { menu: "弁慶のおにぎり弁当", price:1200 ,shop:"おにぎり弁慶" },
    // { menu: "選べるおばんざい弁当", price:1100 ,shop:"おばんざいバル つむぎ" },    
    // { menu: "ナポリタン風焼きそば「ナポ焼き」", price:800 ,shop:"鎌倉Dining由比っと" },    
    // { menu: "special bowl", price:1100 ,shop:"irikai" },    
    // { menu: "香港風オリジナルワッフルサンド", price:700 ,shop:"Glades Kitchen" },    
    // { menu: "", price: ,shop:"" },    
    // 参照元:https://www.f-marinos.com/gourmet_promo/20250517/



];

const button = document.getElementById("gacha-button");
const resultDiv = document.getElementById("result");

button.addEventListener("click", function() {
    let selectedItems = [];
    let total = 0;
    const target = 1500;
    const tolerance = 500;

    let shuffledMenu = [...menu].sort(() => 0.5 - Math.random());

    for (let item of shuffledMenu) {
        if (total + item.price <= target + tolerance) {
            selectedItems.push(item);
            total += item.price;
        }
        if (total >= target - tolerance) {
            break;
        }
    }

    if (selectedItems.length === 0) {
        resultDiv.innerHTML = "ガチャ失敗！もう一回！";
    } else {
        let html = "<h2>ガチャ結果🔵⚪🔴 </h2><ul>";

          // ガチャ結果テキスト作成（ツイート用）
          let tweetText = "【スタグルガチャ結果】\n";
        selectedItems.forEach(item => {
            html += `<li>
                メニュー名：${item.menu}<br>
                店舗名：${item.shop}<br>
                金額：${item.price}円
             </li><br>`;
            tweetText += `・${item.menu}（${item.shop}）：${item.price}円\n`;
        });

        tweetText += `合計金額：${total}円！ #マリノススタグルガチャ #マリノススタグル`;
        const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

        html += `</ul><p>合計金額：${total}円</p>`;
        html += `<p><a href="${tweetURL}" class="tweet-button" target="_blank" rel="noopener noreferrer">ツイートする</a></p>`;

        resultDiv.innerHTML = html;
    }
});