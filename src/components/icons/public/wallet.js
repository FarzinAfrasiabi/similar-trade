const WalletIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60">
      <g transform="translate(-.455)">
        <rect
          width="60"
          height="60"
          rx="28"
          transform="translate(.455)"
          {...props}
          opacity={0.1}
        />
        <path
          data-name="Combined Shape"
          d="M24.094 41c-1.231 0-2.2 0-3.016-.061a6.513 6.513 0 0 1-2.346-.54A5.739 5.739 0 0 1 16.108 38a5.2 5.2 0 0 1-.587-2.151c-.066-.749-.066-1.639-.066-2.768v-6.162c0-1.129 0-2.019.066-2.765A5.2 5.2 0 0 1 16.108 22a5.742 5.742 0 0 1 2.623-2.4 6.515 6.515 0 0 1 2.347-.539C21.889 19 22.863 19 24.094 19h12.724c1.231 0 2.2 0 3.016.061a6.555 6.555 0 0 1 2.346.539 5.738 5.738 0 0 1 2.622 2.4 5.2 5.2 0 0 1 .587 2.151c.044.5.059 1.063.064 1.721v8.25c0 .657-.019 1.222-.064 1.72A5.2 5.2 0 0 1 44.802 38a5.736 5.736 0 0 1-2.622 2.4 6.527 6.527 0 0 1-2.346.54c-.813.06-1.785.06-3.016.06Zm-2.772-19.2a3.614 3.614 0 0 0-1.229.247 2.854 2.854 0 0 0-1.312 1.2 2.866 2.866 0 0 0-.27 1.126c-.056.639-.056 1.505-.056 2.601v6.05c0 1.1 0 1.964.057 2.6a2.878 2.878 0 0 0 .27 1.126 2.871 2.871 0 0 0 1.312 1.2 3.564 3.564 0 0 0 1.229.249c.691.052 1.636.052 2.832.052h12.6c1.2 0 2.142 0 2.834-.052a3.579 3.579 0 0 0 1.229-.249 2.861 2.861 0 0 0 1.311-1.2 2.878 2.878 0 0 0 .27-1.126c.036-.4.049-.9.054-1.5h-4.498a4.331 4.331 0 0 1-4.5-4.124 4.33 4.33 0 0 1 4.5-4.125h4.5c0-.594-.018-1.093-.054-1.5a2.866 2.866 0 0 0-.27-1.126 2.87 2.87 0 0 0-1.311-1.2 3.629 3.629 0 0 0-1.231-.249c-.691-.05-1.634-.05-2.834-.05h-12.6c-1.2 0-2.142 0-2.833.05ZM36.455 30a1.506 1.506 0 0 0 3 0 1.506 1.506 0 0 0-3 0Z"
          {...props}
        />
      </g>
    </svg>
  );
};

export default WalletIcon;