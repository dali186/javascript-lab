import Layout from "../components/layout/Layout";
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef, useEffect } from "react";
const ArticleWritePage = () => {
    const toastEditorRef = useRef(null);

    useEffect(() => {
    if (toastEditorRef.current) {
      // Editor를 DOM 요소에 마운트
      new Editor({
        el: toastEditorRef.current,
        height: '500px', // 원하는 높이 설정
        initialEditType: 'wysiwyg',
        previewStyle: 'vertical',
        useCommandShortcut: true,
      });
    }
  }, []);

    return <Layout>
                <div className="bg-blue-500 bg-[url('./assets/background/bg_paper_black.jpg')] bg-cover bg-center h-screen w-screen">
                    <div className="flex flex-col items-center justify-space-evenly min-h-screen pt-10">
                        <div ref={toastEditorRef}></div>
                    </div>
                </div>
    </Layout>;
}

export default ArticleWritePage;