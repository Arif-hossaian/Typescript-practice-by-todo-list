import React, { useRef } from 'react';

interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFiled: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex justify-center p-10"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        ref={inputRef}
        placeholder="Enter your task"
        className="px-5 py-5 h-3 relative focus:shadow-lg focus:shadow-indigo-500/40"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="bg-gradient-to-r from-[#ffc300] to-[#eb5e28] transition-colors rounded-[8px] px-[15px] py-[4px] text-white w-20">
        Add
      </button>
    </form>
  );
};

export default InputFiled;
