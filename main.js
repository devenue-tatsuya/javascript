// ターミナルから取得してきたデータ（hoge）を、変換したいデータ（orgId）に変換する処理

let hoge = `
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
7
7
9
6
10
9
9
10
10
10
10
10
7
10
9
9
9
9
9
9
9
9
9
9
9
9
25
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
27
25
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
10
34
34
29
29
29
29
29
29
29
29
29
29
29
29
30
30
30
30
30
30
30
30
30
30
30
30
30
29
30
9`;

let orgId = `
1 	7
2	6
3	9
4	10
5	25
6	27
7	34
8	3
9	18
10	23
11	20
12	21
13	22
14	26
15	28
16	31
17	32
18	33
19	29
20	30`;

idinid = {};
orgId.split("\n").forEach((r) => {
  if (!r) return;
  x = r.split("\t");
  idinid[x[1]] = x[0];
});

hoge.split("\n").forEach((row) => {
  console.log(`${row}\t${(idinid[row] || "").replace(/ /, "\t")}`);
});
