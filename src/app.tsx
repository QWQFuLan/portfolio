import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import HomePage from '@/pages/HomePage/HomePage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import PixelTrail from '@/components/reactbits/PixelTrail';

export default function App() {
  return (
    <>
      <PixelTrail
        className="pixel-canvas--fixed"
        gridSize={55}
        trailSize={0.05}
        maxAge={300}
        interpolate={0}
        color="#846300"
        gooeyFilter={{ id: "custom-goo-filter", strength: 1 }}
      />
      {/* The app content sits in its own stacking context (z-index: 1) so the
          trail layer (z-index: 0) stays above the page background yet below
          every piece of content. */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
