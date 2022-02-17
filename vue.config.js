
vueCompilerOptions: {
    isCustomElement: tag => {
      return /^x-/.test(tag)
    }
  }