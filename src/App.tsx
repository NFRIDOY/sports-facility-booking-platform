import "./App.css";
import MainLayout from "./components/layout/MainLayout";

// export function Counter() {
//     const count = useAppSelector((state: RootState) => state.counter.value);
//     const dispatch = useAppDispatch();

//     return (
//         <div>
//             <div>
//                 <button
//                     aria-label="Increment value"
//                     onClick={() => dispatch(increment())}>
//                     Increment
//                 </button>
//                 <span>{count}</span>
//                 <button
//                     aria-label="Decrement value"
//                     onClick={() => dispatch(decrement())}>
//                     Decrement
//                 </button>
//             </div>
//         </div>
//     );
// }

function App() {
    return (
        <>
            <MainLayout />
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </>
    );
}

export default App;
