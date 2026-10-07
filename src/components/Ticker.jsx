const TEXT =
  "★ UI/UX DESIGN ★ FRONT-END ★ VUE ★ REACT ★ NUXT ★ FIGMA ★ LARAVEL ★ SUPABASE ★ WORDPRESS ";

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div id="tk">{TEXT.repeat(3)}</div>
    </div>
  );
}
