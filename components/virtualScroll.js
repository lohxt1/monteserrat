import { useContext, useEffect, useMemo, useRef } from "react";
import useVirtualScrollStore from "../stores/useVirtualScrollStore";

const VirtualScroll = (props) => {
  const arr = useMemo(() => Array.from({ length: 1 }, (v, i) => i), []);
  const scrollRef = useRef();
  const endScrollTimerRef = useRef();

  useEffect(() => {
    scrollRef.current.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => {
      scrollRef.current.removeEventListener("scroll", handleScroll, {
        passive: true,
      });
    };
  }, []);

  const handleScroll = (e) => {
    let scrollTop = scrollRef.current.scrollTop;
    let bufferScrollAmount =
      (scrollTop * 200) / (scrollRef.current.scrollHeight - window.innerHeight);
    // let scrollDirection = bufferScrollAmount > scrollAmount ? 1 : -1;
    let scrollAmount = bufferScrollAmount < 0 ? 0 : bufferScrollAmount;
    // The range of pure scrollAmount is [0 - 1]
    // It's multiplied with 200, because it's the number of steps in the model animation clip
    if (!window.scrollAmount) window.scrollAmount = [];
    window.scrollAmount.push(scrollAmount);
    endScrollTimerRef.current && clearTimeout(endScrollTimerRef.current);
    useVirtualScrollStore.setState({ scrollAmount, isScrolling: true });
    endScrollTimerRef.current = setTimeout(
      () => useVirtualScrollStore.setState({ isScrolling: false }),
      500
    );
  };

  return (
    <section>
      <div className="scroll-block" ref={scrollRef}>
        <div className="scroll-block__body"></div>
      </div>
      <style jsx>{`
        section {
          position: absolute;
          width: 100vw;
          height: 100%;
          display: flex;
          flex-direction: column;
          color: #fff;
        }
        .scroll-block {
          position: relative;
          width: 100vw;
          display: inline-block;
          flex-direction: column;
          color: #fff;
          overflow-y: scroll;
          color: #000;
          scroll-behavior: smooth;
        }
        .scroll-block__body {
          position: relative;
          width: 100%;
          height: ${arr.length * 20000}px;
        }
        .scroll-block-bit {
          height: 200px;
        }
      `}</style>
    </section>
  );
};

export default VirtualScroll;
