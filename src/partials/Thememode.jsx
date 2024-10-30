const Thememode = () => {
  return (
    <input
      type="checkbox"
      value="lofi"
      className="toggle theme-controller col-span-2 col-start-1 row-start-1  border-white bg-black [--tglbg:theme(colors.white)] checked:border-black checked:bg-white checked:[--tglbg:theme(colors.black)]"
    />
  );
};
export default Thememode;
