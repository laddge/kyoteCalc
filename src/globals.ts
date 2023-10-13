export const colors: string[] = [  // 教科の色
  'bg-red-500',
  'bg-yellow-500',
  'bg-sky-500',
  'bg-green-500',
  'bg-violet-500',
]
export const subjects: { [key: string]: { name: string, color: number, score: number } } = {
  ja0: { name: '現代文', color: 0, score: 100 },
  ja1: { name: '古文', color: 0, score: 50 },
  ja2: { name: '漢文', color: 0, score: 50 },
  so0: { name: '社会(1)', color: 1, score: 100 },
  so1: { name: '社会(2)', color: 1, score: 100 },
  ma0: { name: '数学①', color: 2, score: 100 },
  ma1: { name: '数学②', color: 2, score: 100 },
  sc0: { name: '理科①(1)', color: 3, score: 50 },
  sc1: { name: '理科①(2)', color: 3, score: 50 },
  sc2: { name: '理科②(1)', color: 3, score: 100 },
  sc3: { name: '理科②(2)', color: 3, score: 100 },
  en0: { name: '英語リーディング', color: 4, score: 100 },
  en1: { name: '英語リスニング', color: 4, score: 100 },
  en2: { name: '外国語(英語以外)', color: 4, score: 200 },
}
