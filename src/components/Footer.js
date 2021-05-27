import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const FooterSection = styled.footer`
    display: flex;
    justify-content: space-between;
`;

const FooterCopy = styled.div`
    padding: var(--space-8);
`;

const SocialLinks = styled.ul`
    margin: 0;
    display: flex;
    margin-right: var(--space-8);
`;

const SocialLink = styled.li`
    list-style: none;
    padding: var(--space-8);

    a {
        color: var(--primary);
        &:hover {
            color: var(--accent);
        }
    }
`;

const Footer = () => {
    const data = useStaticQuery(graphql`
        query FooterQuery {
            site {
                siteMetadata {
                    social {
                        name
                        url
                    }
                }
            }
        }
    `);

    return (
        <FooterSection>
            <FooterCopy>&copy; Andrew Cetnarskyj {new Date().getFullYear()}</FooterCopy>
            <SocialLinks>
                {data.site.siteMetadata.social.map((socialLink, index) => (
                    <SocialLink id={index}>
                        <a href={socialLink.url} title={socialLink.name}>
                            {socialLink.name}
                        </a>
                    </SocialLink>
                ))}
            </SocialLinks>
        </FooterSection>
    );
};

export default Footer;
