const EarningIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60">
      <g transform="translate(.071)" {...props}>
        <rect
          width="60"
          height="60"
          rx="28"
          transform="translate(-.071)"
          opacity=".1"
        />
        <path
          data-name="Combined Shape"
          d="M23.484 43a5.556 5.556 0 0 1-5.555-5.555V19.389a1.389 1.389 0 0 1 2.777 0v18.056a2.778 2.778 0 0 0 2.777 2.777H41.54a1.389 1.389 0 0 1 0 2.778Zm1.39-5.555a1.39 1.39 0 1 1 0-2.779h4.166a8.333 8.333 0 0 0 8.334-8.333v-3.591l-.407.406a1.389 1.389 0 0 1-1.964-1.964l2.777-2.778a1.39 1.39 0 0 1 1.964 0l2.779 2.779a1.39 1.39 0 0 1-1.965 1.964l-.406-.406v3.591A11.112 11.112 0 0 1 29.04 37.445Z"
        />
      </g>
    </svg>
  );
};

export default EarningIcon;
