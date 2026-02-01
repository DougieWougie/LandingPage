import { useState, useEffect } from 'react';

export function useMarkdown(path) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(path)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load ${path}`);
        return res.text();
      })
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        setContent('');
        setLoading(false);
      });
  }, [path]);

  return { content, loading };
}
