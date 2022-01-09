import React from 'react';
import Icons from './icons';
import links from './content';
import * as S from './styled';

function SocialLinks() {
	return (
		<S.SocialLinksWrapper>
			<S.SocialLinksList>
				{links.map((link, index) => {
					const Icon = Icons[link.label];

					return (
						<S.SocialLinksItem key={index}>
							<S.SocialLinksLink
								href={link.url}
								title={link.label}
								target="_blank"
								rel="noopener noreferrer">
								<Icon className="icon" />
							</S.SocialLinksLink>
						</S.SocialLinksItem>
					);
				})}
			</S.SocialLinksList>
		</S.SocialLinksWrapper>
	);
}

export default SocialLinks;
