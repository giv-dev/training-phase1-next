export type ButtonProps = {
  label: string;
  color: 'blue' | 'red' | 'yellow' | 'pink'; // 使える色を限定する（型安全）
};

export const CustomButton = ({ label, color }: ButtonProps) => {
  // 色名とクラスをセットにする
  const colorVariants = {
    blue: 'bg-blue-500 hover:bg-blue-700',
    red: 'bg-red-500 hover:bg-red-700',
    yellow: 'bg-yellow-500 hover:bg-yellow-700',
    pink: 'bg-pink-500 hover:bg-pink-700',
  };

  return (
    <button className={`${colorVariants[color]} text-white font-bold py-2 px-4 rounded transition-colors`}>
      {label}
    </button>
  );
};