import DepthText from '@/components/reactbits/DepthText';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <div className="pixel-frame p-8 md:p-12">
        <p className="pixel-chip mb-8">ABOUT · 關於我</p>
        <h2 className="font-pixel leading-none">
          <DepthText
            text="HELLO"
            layers={24}
            depth={2}
            faceColor="#e8f4e0"
            depthColor="#6bb5ff"
            tilt={6}
            pointerTracking
            smoothing={0.14}
            perspective={900}
            autoOrbit
            orbitSpeed={0.28}
            fontSize="clamp(2.2rem, 8vw, 4.5rem)"
            fontWeight={400}
            shadow
          />
        </h2>
        <p className="mt-8 text-lg md:text-xl">
          我是 <span className="font-pixel text-primary">FULAN</span>，正在學習編程。
        </p>
        <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
          我喜歡 <span className="text-foreground">我的世界（Minecraft）</span>，所以把這個網站做成了像素風。
          目前正在學習 C++、Python 和資料庫，目標是用程式把腦海裡的想法，像在遊戲裡堆方塊一樣，
          一塊一塊建造出來。
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          <span className="pixel-chip">正在學習編程</span>
          <span className="pixel-chip">像素愛好者</span>
          <span className="pixel-chip">Minecraft 玩家</span>
        </div>
      </div>
    </section>
  );
}
