module.exports = {
  eleventyComputed: {
    gallerySorted: (data) => {
      const sorted = data.gallery.sort((a, b) => {
        const nameB = b["Press or Organization Name"].toUpperCase();
        const nameA = a["Press or Organization Name"].toUpperCase();

        if (nameA < nameB) {
          return -1;
        }

        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

      return sorted;
    },
  },
};
