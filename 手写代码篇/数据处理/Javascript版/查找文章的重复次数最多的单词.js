(function () {
    /*
  
  trim() 方法从字符串的两端清除空格，返回一个新的字符串，
  而不修改原始字符串。此上下文中的空格是指所有的空白字符（空格、tab、不换行空格等）以及所有行终止符字符（如 LF、CR 等）。*/
    /**
     *
     * @param artcle 需要判断的文章内容
     */
    function findMostWord(artcle) {
        //合法性判断
        if (!artcle)
            return;
        artcle = artcle.trim().toLocaleLowerCase();
        var wordlist = artcle.match(/[a-z]+/g);
        var visted = [], maxNum = 0, maxWord = "";
        artcle = " " + (wordlist === null || wordlist === void 0 ? void 0 : wordlist.join(" ")) + " ";
        //遍历
        wordlist === null || wordlist === void 0 ? void 0 : wordlist.forEach(function (item) {
            if (visted.indexOf(item) < 0) {
                visted.push(item);
                var word = new RegExp(" " + item + " ", "g");
                var num = artcle.match(word).length;
                if (num > maxNum) {
                    maxNum = num;
                    maxWord = item;
                }
            }
        });
        return "出现次数最多的单词是" + maxWord + "出现了" + maxNum + "次";
    }
    var str = "Most of us are taught to pay attention to what issaid-the words.Words do provide us with some information,but meanings are derived from so many other sources that it would hinder our effectivenessas a partner to a relationship to rely too heavily onwords alone.Words are used to describe only asmall part of the many ideas we associate with any given message.Sometimes we can gain insight into some of those associations if we listen for more than words.We dont always say what we mean or mean what we say.Sometimes our words dont mean anything except Im letting off some steam.I dont really want you to pay close attention to what Im saying.Just pay attention to what Im feeling.Mostly we mean several things at once.A person wanting topurchase a house says to the current owner,This step has to be fixed before Ill buy.Theowner says,Its been like that for years.Actually,the step hasnt been like that for years,but the unspoken message is: I dont want to fix it.We put up with it.Why cant you?The search for a more expansive view of meaning can be developed of examining a message interms of who said it,when it occurred,the related conditions or situation,and how it was said. 　　When a message occurs can also reveal associated meaning.Let us assume two couples do exactly the same amount of kissing and arguing.But one couple always kisses after anargument and the other couple always argues after a kiss.The ordering of the behaviors maymean a great deal more than the frequency of the behavior.A friends unusually docile behaviormay only be understood by noting that it was preceded by situations that required an abnormalamount of assertiveness.Some responses may be directly linked to a developing pattern ofresponses and defy logic.For example,a person who says No! to a serials of charges likeYoure dumb,Youre lazy,and Youre dishonest,may also say No! and try to justify hisor her response if the next statement is And youre good looking";
    console.log(findMostWord(str));
})();
