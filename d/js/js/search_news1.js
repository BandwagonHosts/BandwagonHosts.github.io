function search_check(obj){if(obj.keyboard.value.length==0){alert('请输入搜索关键字');return false;}return true;}document.write("<table border=0 cellpadding=3 cellspacing=1><form name=search_js1 method=post action=\'/e/search/index.php\' onsubmit=\'return search_check(document.search_js1);\'><tr><td><div align=center>搜索: <select name=show><option value=title>标题</option><option value=smalltext>简介</option><option value=newstext>内容</option><option value=writer>作者</option><option value=title,smalltext,newstext,writer>搜索全部</option></select><select name=classid><option value=0>所有栏目</option><option value='1' style='background:#99C4E3'>|-BandwagonHost</option><option value='2' style='background:#99C4E3'>|-Justmyscoks</option><option value='3' style='background:#99C4E3'>|-Chatgptproxy</option></select><input name=keyboard type=text size=13><input type=submit name=Submit value=搜索></div></td></tr></form></table>");