import * as React from 'react';
import * as cx from 'classnames';

export default ({ messages, removeOldestMessage }) => {
	// setTimeout((() => removeOldestMessage()), 3000);

	return (
		<ul className="messages">
			{
				messages.map((message, i) =>
					<li
						className={cx('message', message.type)}
					  key={i}
					>
						{message.value}
					</li>
				)
			}
		</ul>
	);
}
