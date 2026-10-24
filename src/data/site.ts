export const site = {
  name: 'みそのホームページ',
  description: 'ライブ配信を「純リスナー」として楽しんでます。またリス活の中で、面白そう・役立ちそうと思ったものをAIや様々なツールを活用しながら作っています。',
  socials: [
    { label: 'X', url: 'https://x.com/_miso_eg' },
    { label: 'Instagram', url: 'https://www.instagram.com/miso.eg' },
    { label: 'Palmu', url: 'https://app.palmu.jp/users/babb4d3512d14a69b481' },
    { label: 'Comfyclub', url: 'https://comfyapp.top/p/sr7BBP' },
    { label: 'GitHub', url: 'https://github.com/miso-eg' },
    { label: 'Steam', url: 'https://steamcommunity.com/id/alpc2632/' },
    // その他のSNSはURLが決まったらここに追加します。
  ],
};
export const categories = [
  { slug: 'tools', label: 'TOOLS', name: '自作ツール', icon: '✳', description: 'リス活から生まれた、ちょっと便利なもの。' },
  { slug: 'service', label: 'SERVICE', name: 'サービス', icon: '◇', description: '配信や日々に役立つ、自作サービス。' },
  { slug: 'gallery', label: 'GALLERY', name: '画像・イラスト', icon: '▧', description: 'つくった絵や画像を、ここに少しずつ。' },
  { slug: 'document', label: 'DOCUMENT', name: 'DOCUMENT', icon: '▤', description: '配信やリス活にまつわる解説を、サイト上で読めます。' },
  { slug: 'line', label: 'LINE', name: 'LINEスタンプ・絵文字', icon: '☺', description: 'トークに添える、つくったスタンプと絵文字。' },
  { slug: 'music', label: 'MUSIC', name: '音楽・BGM', icon: '♫', description: '日々に添える音楽とBGM。' },
  { slug: 'other', label: 'OTHER', name: 'その他の制作物', icon: '◇', description: 'カテゴリに収まらない、いろいろなもの。' },
] as const;
