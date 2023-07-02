const SearchIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path d="M0 0h24v24H0Z" fill="none" />
      <path
        data-name="Combined Shape"
        d="m20.68 21.7-3.571-3.57A9.156 9.156 0 0 1 2 11.16a9.158 9.158 0 1 1 16.48 5.508l3.614 3.615a1.011 1.011 0 0 1-.715 1.725.975.975 0 0 1-.699-.308ZM6.1 6.1A7.163 7.163 0 1 0 11.159 4 7.17 7.17 0 0 0 6.1 6.1Z"
        {...props}
      />
    </svg>
  );
};

export default SearchIcon;
