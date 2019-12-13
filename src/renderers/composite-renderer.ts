import { IPaneRenderer } from './ipane-renderer';

export class CompositeRenderer implements IPaneRenderer {
	private _renderers: ReadonlyArray<IPaneRenderer> = [];

	public setRenderers(renderers: ReadonlyArray<IPaneRenderer>): void {
		this._renderers = renderers;
	}

	public draw(ctx: CanvasRenderingContext2D, devicePixelRation: number, isHovered: boolean, hitTestData?: unknown): void {
		this._renderers.forEach((r: IPaneRenderer) => {
			ctx.save();
			r.draw(ctx, devicePixelRation, isHovered, hitTestData);
			ctx.restore();
		});
	}
}
