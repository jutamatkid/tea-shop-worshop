import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./learn-hooks/Counter";
import SimpleForm from "./learn-hooks/SimpleForm";
import Wearwoft from "./learn-hooks/WereWolf";
import TimerCounter from "./learn-hooks/TimerCounter";
import FocusInput from "./learn-hooks/FocusInput";
import CounterWithRef from "./learn-hooks/CounterWithRef";
import ExpensiveComponent from "./learn-hooks/ExpensiveComponent";
import MemoizedComponent from "./learn-hooks/MemoizedComponent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Counter></Counter>
    <Counter></Counter>
    <SimpleForm />
    <Wearwoft/>
    <TimerCounter/>
    <FocusInput/>
    <CounterWithRef/> */}
    <ExpensiveComponent/>
    <MemoizedComponent/>
  </StrictMode>,
);
