/**
 * Package file volume analysis
 */
import visualizer from 'rollup-plugin-visualizer';

export function configVisualizerConfig() {
  return visualizer({
    filename: './node_modules/.cache/visualizer/stats.html',
    open: true,
  }) as Plugin;
}
