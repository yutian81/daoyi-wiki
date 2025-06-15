<template>
  <!-- 桌面端使用原生PDF组件 -->
  <PDF
    v-if="!isMobile"
    :url="url"
    :viewer="true"
    :no-toolbar="noToolbar"
    :zoom="zoom"
    :page="page"
  />
  
  <!-- 移动端显示区域 -->
  <div v-else>
    <!-- 加载中状态 -->
    <div v-if="loading" class="pdf-loading">
      正在加载PDF文档...
    </div>
    
    <!-- 错误状态 -->
    <div v-else-if="loadError" class="pdf-error">
      <p>无法加载PDF文档</p>
      <a :href="url" target="_blank">点击下载PDF文件</a>
    </div>
    
    <!-- 成功加载状态 -->
    <iframe
      v-else
      :src="viewerUrl"
      width="100%"
      :height="mobileHeight"
      frameborder="0"
      class="pdf-viewer"
      @load="onIframeLoad"
    ></iframe>
  </div>
</template>

<script>
// 导入PDF组件
import { PDF } from "vuepress-theme-hope/lib/client/components/PDF";

export default {
  name: "SmartPDF",
  components: {
    PDF // 注册PDF组件
  },
  props: {
    url: {
      type: String,
      required: true
    },
    noToolbar: {
      type: Boolean,
      default: false
    },
    zoom: {
      type: Number,
      default: 100
    },
    page: {
      type: Number,
      default: 1
    },
    mobileHeight: {
      type: String,
      default: "500px"
    }
  },
  data() {
    return {
      isMobile: false,
      loading: true,    // 初始为加载中状态
      loadError: false  // 加载错误状态
    };
  },
  computed: {
    viewerUrl() {
      // 添加页面参数（如果指定）
      const pageParam = this.page > 1 ? `#page=${this.page}` : '';
      return `/pdfjs/web/viewer.html?file=${encodeURIComponent(this.url)}${pageParam}`;
    }
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
    
    // 如果是移动端，设置超时检测
    if (this.isMobile) {
      setTimeout(() => {
        if (this.loading) {
          this.loadError = true;
          this.loading = false;
        }
      }, 10000); // 10秒超时
    }
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
    onIframeLoad() {
      this.loading = false;
      
      // 检查内容是否加载成功
      setTimeout(() => {
        try {
          const iframe = this.$el.querySelector("iframe");
          const hasContent = iframe.contentDocument.querySelector("#viewerContainer");
          
          // 如果没有内容，标记为错误状态
          if (!hasContent || hasContent.children.length === 0) {
            this.loadError = true;
          }
        } catch (e) {
          this.loadError = true;
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
.pdf-viewer {
  border: 1px solid #eee;
  border-radius: 8px;
  margin: 1.5rem 0;
  background: #f5f5f5;
}

/* 加载状态样式 */
.pdf-loading {
  height: var(--mobile-height, 500px); /* 使用CSS变量 */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  color: #666;
  font-size: 1.2rem;
}

/* 错误状态样式 */
.pdf-error {
  height: var(--mobile-height, 500px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  background: #fff8f8;
  border: 1px solid #ffcccc;
  color: #d9534f;
}

.pdf-error a {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #3498db;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}

/* 移动端优化 */
@media (max-width: 768px) {
  .pdf-viewer {
    height: var(--mobile-height, 500px);
  }
}
</style>